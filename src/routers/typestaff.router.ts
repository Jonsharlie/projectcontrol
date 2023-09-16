import express from "express"
import { TypeStaffController } from "../controllers/typestaff.controller"

const typeStaffController = new TypeStaffController()
const router = express.Router()

router.get('/tipo-personal', (req, res) => typeStaffController.getTypeStaffs(req, res))
router.get('/tipo-personal/:id', (req, res) => typeStaffController.getTypeStaffById(req, res))
router.post('/tipo-personal/create', (req, res) => typeStaffController.createTypeStaff(req, res))
router.delete('/tipo-personal/delete/:id', (req, res) => typeStaffController.deleteTypeStaff(req, res))
router.put('/tipo-personal/update/:id', (req, res) => typeStaffController.updateTypeStaff(req, res))

export default router