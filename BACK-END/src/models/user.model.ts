import { Schema, model } from "mongoose";
import { User } from "../interfaces/user.interface";

const userSchema = new Schema<User>({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    friends: { type: [String], required: true, default: [] },
    accounts: { type: [String], required: true, default: [] },
    userImage: { type: String, default: ''}

}, {
    timestamps: true,
    versionKey: false
});

export default model<User>('user', userSchema);