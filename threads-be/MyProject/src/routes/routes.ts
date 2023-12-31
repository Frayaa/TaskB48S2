import AuthController from "../controllers/AuthController"
import ThreadController from "../controllers/ThreadController"
import express = require("express") 
import authenticate from "../middlewares/authMiddleware"
import { upload } from "../middlewares/uploadFile"
import RepliesController from "../controllers/RepliesController"
import ThreadsQueue from "../queues/ThreadsQueue"
import LikesController from "../controllers/LikesController"
import FollowsController from "../controllers/FollowsController"
import ProfileController from "../controllers/ProfileController"
import ProfileQueue from "../queues/ProfileQueue"

const router = express.Router()

router.get("/threads", authenticate, ThreadController.find)
router.get("/thread/:id", authenticate, ThreadController.findOne)
// router.post("/thread", authenticate,upload("image"), ThreadController.create)
router.post("/thread", authenticate, upload("image"), ThreadsQueue.create)
router.delete("/thread/:id", authenticate, ThreadController.delete)
router.patch("/thread/update/:id", authenticate, ThreadController.update)

router.get("/replies", authenticate, RepliesController.find)
router.post("/reply", authenticate, RepliesController.create)

router.post("/like", authenticate, LikesController.create)
router.delete("/like/:thread_id", authenticate, LikesController.delete)

router.post("/auth/register", AuthController.register)
router.post("/auth/login", AuthController.login)
router.get("/auth/check", authenticate, AuthController.check)

router.get("/follows", authenticate, FollowsController.find)
router.post("/follow", authenticate, FollowsController.create)
router.delete(
  "/follow/:followed_user_id",
  authenticate,
  FollowsController.delete
)

router.get("/users", authenticate, ProfileController.find)
router.get("/user/random", authenticate, ProfileController.getRandomUser)
router.get("/user/search", ProfileController.search)
router.get("/user/:id", authenticate, ProfileController.findOne)
router.patch(
  "/profile",
  authenticate,
  upload("profile_picture"),
  ProfileController.update
)

export default router
