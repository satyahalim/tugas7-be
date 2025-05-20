import express from "express"
import { createUser,getUsers,getUsersById,updateUser,deleteUser, login, logout } from "../controller/UserController.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { getAccessToken } from "../controller/TokenController.js";

const router = express.Router();

//endpoint untuk dapetin access token
router.get("/token",getAccessToken)

//endpoint login logout
router.post("/login",login)
router.delete("/logout",logout)

router.get("/users",verifyToken,getUsers)
router.get("/users/:id",verifyToken,getUsersById)
router.post("/users",createUser)
router.patch("/users/:id",verifyToken,updateUser)
router.delete("/users/:id",verifyToken,deleteUser)

export default router