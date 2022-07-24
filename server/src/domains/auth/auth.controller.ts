import User from "../users/user";
import { Request, Response } from "express";

interface IUserRequest extends Request {
    userId: string;
}


export class AuthController {


    public static async login(req: Request, res: Response) {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        if (!(await user.comparePassword(password))) {
            return res.status(400).json({ message: "Password is incorrect" });
        }

        const token = user.generateToken();
        return res.status(200).json({ token });
    }


    public static async register(req: Request, res: Response) {
        const { name, email, password, confirmPassword } = req.body;

        const userDB = await User.findOne({ email });

        if (userDB) {
            return res.status(400).json({ message: "User already exists" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }
        
        const user = new User({ name, email, password });
        await user.save();
        const token = user.generateToken();
        return res.status(200).json({ token });
    }


    public static async renewToken(req: IUserRequest, res: Response) {
        const { userId } = req;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        const token = user.generateToken();
        return res.status(200).json({ token });
    }
}

