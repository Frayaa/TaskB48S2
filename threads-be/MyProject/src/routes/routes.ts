import AuthController from "../controllers/AuthController"
import ThreadController from "../controllers/ThreadController"
import * as express from "express"
import authenticate from "../middlewares/authMiddleware"
import { upload } from "../middlewares/uploadFile"
import QueueController from "../controllers/QueueController"

const router = express.Router()

router.get("/threads", authenticate,ThreadController.find)
router.get("/thread/:id", authenticate, ThreadController.findOne)
router.post("/thread", authenticate,upload("image"), ThreadController.create)
// router.post("/thread", authenticate,upload("image"),QueueController.enqueue)
router.delete("/thread/:id", authenticate, ThreadController.delete)
router.patch("/thread/update/:id", authenticate, ThreadController.update)

router.post("/auth/register", AuthController.register)
router.post("/auth/login", AuthController.login)
router.get("/auth/check", authenticate, AuthController.check)

export default router
