import { Schema, model } from "mongoose";
import { User } from "../interfaces/user.interface";
import mongoose from "mongoose";

const userSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    number: {type: String, required: true},
    dateBirth:{type: String, required: true},
    gener:{type: String, required: true},
    friends: { type: [String], required: false, default: [] },
    accounts: {
      type: [
        {
          name: { type: String },
          user: { type: String },
          url: { type: String },
        },
      ],
    },
    studyOrWork: { type: String, required: true },
    userImage: { type: String, default: "" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("user", userSchema);
