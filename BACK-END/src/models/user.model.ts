import { Schema, model } from "mongoose";
import { User } from "../interfaces/user.interface";

const userSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    friends: { type: [String], required: true, default: [] },
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
