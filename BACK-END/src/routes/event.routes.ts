import { Router } from "express";
import controllers from "../controllers";


const router = Router()


router.post("/create", controllers.Event.createEvent);
router.get("/getAll", controllers.Event.getEvents);
router.get("/getONE", controllers.Event.getEvent);
router.put("/update", controllers.Event.updateEvent)


export default router