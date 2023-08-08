import ThreadController from "../controllers/ThreadController"
import * as express from "express"

const router = express.Router()

router.get("/threads", ThreadController.find)
router.get("/thread/:id", ThreadController.findOne)
router.post("/thread", ThreadController.create)
router.delete("/thread/:id", ThreadController.delete)
router.patch("/thread/update/:id", ThreadController.update)

export default router
