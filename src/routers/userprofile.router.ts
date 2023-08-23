import express from "express"
import { UserProfileController } from "../controllers/userprofile.controller"

const userProfileController = new UserProfileController()
const router = express.Router()

router.get('/userprofile', (req, res) => userProfileController.getUserProfiles(req, res))
router.get('/userprofile/:id', (req, res) => userProfileController.getUserProfileById(req, res))
router.post('/userprofile/create', (req, res) => userProfileController.createUserProfile(req, res))
router.delete('/userprofile/delete/:id', (req, res) => userProfileController.deleteUserProfile(req, res))
router.put('/userprofile/update/:id', (req, res) => userProfileController.updateUserProfile(req, res))

export default router