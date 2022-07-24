import { Document } from "mongoose";

type userType = 'admin' | 'user';


export interface SendMailOptions {
    from: string;
    to: string;
    subject: string;
    html: HTMLElement;
}

export interface TransporterOptions {
    host?: string | undefined;
    secureConnection?: boolean | undefined;
    port?: number | undefined;
    requireTLS?: boolean | undefined;
    tls?: {} | undefined;
    auth?: {
        user: string;
        pass: string;
    } | undefined;
}

export interface User extends Document {
    email: string;
    password: string;
    name: string;
    lastName: string;
    phone: string;
    address: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    userType: userType;
    wallet: String;
    country: string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(password: string): Promise<boolean>;
    generateToken(): string;
}

