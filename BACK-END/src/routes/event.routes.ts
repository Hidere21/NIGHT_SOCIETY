import { Router } from "express";
import {getEvents, getEvent, createEvent, updateEvent }  from "../controllers/event.controller"

const router = Router()

router.get("/getEvents", getEvents);
router.get("/getEvent", getEvent);
router.post("/createEvent", createEvent);
router.put("/updateEvent", updateEvent)


export default router