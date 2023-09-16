import express from "express"
import { StaffController } from "../controllers/staff.controller"

const staffController = new StaffController()
const router = express.Router()

router.get('/personal', (req, res) => staffController.getStaffs(req, res))
router.get('/personal/:id', (req, res) => staffController.getStaffById(req, res))
router.post('/personal/create', (req, res) => staffController.createStaff(req, res))
router.delete('/personal/delete/:id', (req, res) => staffController.deleteStaff(req, res))
router.put('/personal/update/:id', (req, res) => staffController.updateStaff(req, res))

export default router