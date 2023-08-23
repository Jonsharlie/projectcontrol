import express from "express"
import { UserController } from "../controllers/user.controller"

const userController = new UserController()
const router = express.Router()

router.get('/users', (req, res) => userController.getUsers(req, res))
router.get('/users/:id', (req, res) => userController.getUserById(req, res))
router.post('/users/create', (req, res) => userController.createUser(req, res))
router.delete('/users/delete/:id', (req, res) => userController.deleteUser(req, res))
router.put('/users/update/:id', (req, res) => userController.updateUser(req, res))

export default router