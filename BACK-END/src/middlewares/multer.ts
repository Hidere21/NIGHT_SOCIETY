import multer from "multer"
import { Path } from "mongoose"
import express from "express";
const { MongoClient } = require('mongodb');


const path = require('path')
const app = express();

// donde se van almacenar
let storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        // cb(null, `${__dirname}/../uploads`)
        cb(null, path.join(__dirname, '../uploads'))
    },
    filename: (req, file, cb)=>{
        // cb(null, `${Date.now}-${file.originalname}`)
        // cb(null, `${file.originalname} - ${Date.now()}.${file.mimetype.split('/')[1]}`)
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
        cb(null, `${file.fieldname}-${uniqueSuffix}`);
    }
})

// module.exports = storage


// configuracion del multer
const upload = multer({storage})
export default upload