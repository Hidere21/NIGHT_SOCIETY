import mongoose, { Schema } from "mongoose";

//definir esquema de la colleción

const Event = new Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    date_from: {type: Date, required: true},
    date_to: {type: Date, required: true},
    hour: {type: [String], required: true},
    images: {type: String, required: false},
    description: {type: String, required: true},
    likes: {type: Number},
<<<<<<< HEAD
    opinions: {type: String}
=======
    opinions: {type: Array, default: []},
    qualify: {type: Array, default: []},
    
>>>>>>> 7f7f62e4d10cbecfde7ff7fb0e4aa2fbae81cd9b
},{
    timestamps: true,
    versionKey: false
})

export default mongoose.model("event", Event)
