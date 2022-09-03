import { Request, Response } from "express";
import { ObjectId } from "mongoose";
import { User } from '../types/types' 

export interface modelInfoRequest extends Request {
    user: userRequest;
}

type userRequest = {
    _id: ObjectId;
};

export const getOne =
    (model: any) => async (req: modelInfoRequest, res: Response) => {
        try {
            const doc = await model
                .findOne({ createdBy: req.user._id, _id: req.params.id })
                .lean()
                .exec();

            if (!doc) {
                return res.status(400).end();
            }

            res.status(200).json({ data: doc });
        } catch (e) {
            console.error(e);
            res.status(400).end();
        }
    };

export const getMany =
    (model: any) => async (req: modelInfoRequest, res: Response) => {
        try {
            const docs = await model.find({ createdBy: req.user._id }).lean().exec();

            res.status(200).json({ data: docs });
        } catch (e) {
            console.error(e);
            res.status(400).end();
        }
    };

export const createOne =
    (model: any) => async (req: modelInfoRequest, res: Response) => {
        const createdBy = req.user._id;
        try {
            const doc = await model.create({ ...req.body, createdBy });
            res.status(201).json({ data: doc });
        } catch (e) {
            console.error(e);
            res.status(400).end();
        }
    };

export const updateOne =
    (model: any) => async (req: modelInfoRequest, res: Response) => {
        try {
            const updatedDoc = await model
                .findOneAndUpdate(
                    {
                        createdBy: req.user._id,
                        _id: req.params.id,
                    },
                    req.body,
                    { new: true }
                )
                .lean()
                .exec();

            if (!updatedDoc) {
                return res.status(400).end();
            }

            res.status(200).json({ data: updatedDoc });
        } catch (e) {
            console.error(e);
            res.status(400).end();
        }
    };

export const removeOne =
    (model: any) => async (req: modelInfoRequest, res: Response) => {
        try {
            const removed = await model.findOneAndRemove({
                createdBy: req.user._id,
                _id: req.params.id,
            });

            if (!removed) {
                return res.status(400).end();
            }

            return res.status(200).json({ data: removed });
        } catch (e) {
            console.error(e);
            res.status(400).end();
        }
    };

export const crudControllers = (model: any) => ({
    removeOne: removeOne(model),
    updateOne: updateOne(model),
    getMany: getMany(model),
    getOne: getOne(model),
    createOne: createOne(model),
});