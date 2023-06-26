import { Router } from "express";
import controllers from "../controllers";
import multer from "multer";
// import { uploadImageAndCreateEvent } from '../controllers/event.controller';
import upload from "../middlewares/multer";

// import upload from "../middlewares/multer";

const Image = require('../models/Image')
const storage = require('../middlewares/multer')
const router = Router()


router.post("/create", controllers.Event.createEvent);
router.get("/getAll", controllers.Event.getEvents);
router.get("/getONE", controllers.Event.getEvent);
router.put("/update", controllers.Event.updateEvent)

// router.post('/evento', upload.single('imagen'), uploadImageAndCreateEvent);

// subir el archivo
// router.post("/upload", upload.single('file'), controllers.Event.uploadImageEvent)
// const uploader = multer({
//     storage
// }).single('file')
// router.post('/upload', uploader,  async(req, res) =>{
//     const { body, file} = req
//     if(file && body){
//         const newImage = new Image({
//             fileName : body.name,
//             fileUrl : `http://localhost:8080/${file.filename}`
//         })
//         await newImage.save()
//         res.json({
//             newImage: newImage
//         })
//     }
// })



export default router