import { Schema, model, Document } from "mongoose";
import bcrypt from "bcrypt";
import { User } from "../../types/types";
import jwt, { Secret } from "jsonwebtoken";
import config from "../../config";



const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}
, { timestamps: true });




userSchema.pre("save", function (next) {
    const user = this;
    if (user.isModified("password")) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
    }
);


userSchema.methods.comparePassword = function (password: any): Promise<boolean> {
    const passwordHash = this.password
    return new Promise((resolve,reject) => {
        bcrypt.compare(password, passwordHash, (err, same) => {
            if(err) return reject(err)
            resolve(same)
        })
    })
}



userSchema.methods.generateToken = function (): string {
    return jwt.sign({ id: this._id }, config.jwt_secret as Secret, { expiresIn: "1h" });
}


export default model<User>("User", userSchema);
