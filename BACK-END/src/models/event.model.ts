import mongoose, { Schema } from "mongoose";

//definir esquema de la colleción

const Event = new Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    date_from: {type: Date, required: true},
    date_to: {type: Date, required: true},
    hour: {type: String, required: true},
    images: {type: String, required: true},
    description: {type: String, required: true},
    likes: {type: Number},
    opinions: {type: String}
},{
    timestamps: true,
    versionKey: false
})

export default mongoose.model("event", Event)
