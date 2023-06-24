import { Router } from "express";
import controllers from "../controllers";
import upload from "../middlewares/multer";


const router = Router()


router.post("/create", controllers.Event.createEvent);
router.get("/getAll", controllers.Event.getEvents);
router.get("/getONE", controllers.Event.getEvent);
router.put("/update", controllers.Event.updateEvent)


// subir el archivo
router.post("/upload", upload.single('file'), controllers.Event.uploadImageEvent)

export default router