import { Router } from "express";
import { getAllUsers, getFriends, getPosibleFriends, createUser, editFriends } from "../controllers/user.controller"
const router = Router();

// http://localhost:3000/user

router.get("/getUsers", getAllUsers);
router.get("/getFriends/:user_id", getFriends);
router.get("/posibleFriends/:user_id", getPosibleFriends);
router.post("/create", createUser);
router.post("/editFriends/:user_id", editFriends);

export default router;
