import express from "express"
import { getMyProfile, login, signup } from "../controllers/user.js"
import { isAuthenticated } from "../middlewares/auth.js"


const router = express.Router()

router.post("/login", login)

router.post("/new", signup)

router.post("/me",isAuthenticated, getMyProfile)


export default router