import { Router } from "express";

import User from "./user.routes"
import Event from "./event.routes"

const router = Router()

// rutas del API


// rutas del usuario
router.use("/user", User)

// rutas de los productos
router.use("/event", Event)

// exportar rutas
export default router