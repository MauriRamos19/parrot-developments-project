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
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    name: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    address2: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    state: {
        type: String,
        trim: true 
    },
    zip: {
        type: String,
        trim: true
    },
    country: {
        type: String,
        trim: true
    },
    userType: {
        type: String
    },
    wallet: {
        type: String,
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

userSchema.methods.comparePassword = function (password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
}

userSchema.methods.findByIdAndGenerateToken = function (): Promise<string> {
    return new Promise((resolve, reject) => {
        jwt.sign({ id: this._id }, config.jwt_secret as Secret, { expiresIn: "1h" }, (err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token as string | PromiseLike<string>);
            }
        });
    });
}




userSchema.methods.generateToken = function (): string {
    return jwt.sign({ id: this._id }, config.jwt_secret as Secret, { expiresIn: "1h" });
}


export default model<User>("User", userSchema);
