import mongoose, { Schema, model, Document } from 'mongoose'


const Image = new Schema({
    fileName : {type: String},
    fileUrl : {type: String},
    uploadDate : {type: Date, default: Date.now()}
})

module.exports = mongoose.model('Image', Image)