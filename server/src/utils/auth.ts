import User from "../resources/users/user.model";
import { NextFunction, Request, Response } from "express";
import jwt, { Secret } from 'jsonwebtoken'
import config from '../config/index'

interface IUserRequest extends Request {
    user: Object;
}


const verifyToken = (token: string) =>
    new Promise((resolve, reject) => {
        jwt.verify(token, config.jwt_secret as Secret, (err, payload) => {
            if (err) return reject(err)
            resolve(payload)
        })
    })


const signIn = async (req: Request, res: Response) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send({ message: 'Email and password required' })
    }
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const match = await user.comparePassword(password)

        if (!match) {
            return res.status(400).json({ message: "Password is incorrect" });
        }

        const token = user.generateToken();
        return res.status(201).json({ token });
    } catch (error) {
        return res.status(400).end();
    }
}


const signUp = async (req: Request, res: Response) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send({ message: 'Email and password required' })
    }
    try {
        const { email, password } = req.body
        const userDB = await User.findOne({ email }).exec();
        if (userDB) {
            return res.status(400).json({ message: "User already exists" });
        }
        const user = await User.create({ email, password });
        const token = user.generateToken();
        return res.status(201).send({ token });
    } catch (error) {
        console.log(error)
        return res.status(400).end()
    }
}


const protect = async (req: any, res: Response, next: NextFunction) => {
    if (req.headers.authorization) {
        return res.status(401).end()
    }
    const token = req.headers.authorization?.split('Bearer ')[1]
    if (!token) {
        return res.status(401).end()
    }
    try {
        const payload: any = verifyToken(token)

        const user = await User.findOne({ _id: payload.id })
            .select('-password')
            .lean()
            .exec()

        if (!user) {
            return res.status(401).send({ message: 'User not found' })
        }
        req.user = user
        next()
    } catch (error) {
        return res.status(400).send({ msg: 'No auth' })
    }
}

export = {
    signIn,
    signUp,
    protect
}