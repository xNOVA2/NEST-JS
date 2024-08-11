import { Document } from "mongoose";

export interface IUser {
    username: string;
    email: string;
    age: number;
    address: string;
    location: string;
    profilePicture:string;
}

export interface IUserDocs extends IUser, Document {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}