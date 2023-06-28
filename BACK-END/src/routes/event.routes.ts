import { Router } from "express";
import * as fs from 'node:fs';
import controllers from "../controllers";

const router = Router()


router.post("/create", controllers.Event.createEvent);
router.get("/getAll", controllers.Event.getEvents);
router.get("/getONE", controllers.Event.getEvent);
router.put("/update", controllers.Event.updateEvent)

export default router




























// router.post("/uploadImage",  upload.array('image', 5), (req, res, next) => {
//     let files = JSON.parse(JSON.stringify(req.files))
//     const images = files.map((file: { filename: any; originalname: any; }) => {
//       return {
//         filename: file.filename,
//         originalname: file.originalname
//       }
//     })
//     Image.insertMany(images, (err: any, result: any) => {
//       if (err) return res.sendStatus(404)
//       res.json(result)
//     })
//   })

// router.get('image/:id', (req, res, next) => {
//     Image.findOne({_id: req.params.id}, (err: any, image: { filename: any; }) => {
//       if (err) return res.sendStatus(404)
//       fs.createReadStream(path.resolve(UPLOAD_PATH, image.filename)).pipe(res)
//     })
//   })