import mongoose, { Schema, model, Document } from "mongoose";

//definir esquema de la colleción

const Event = new Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    date_from: {type: Date, required: true},
    date_to: {type: Date, required: true},
    hour: {type: [String], required: true},
    images: {type: String, required: false},
    description: {type: String, required: true},
    opinions: {type: Array, default: []},
    qualify: {type: Array, default: []},

},{
    timestamps: true,
    versionKey: false
})

export default mongoose.model("event", Event)
