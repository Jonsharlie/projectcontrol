import express from "express"
import { StatusActivityController } from "../controllers/statusactivity.controller"

const statusActivityController = new StatusActivityController()
const router = express.Router()

router.get('/estado-actividad', (req, res) => statusActivityController.getStatusActivity(req, res))
router.get('/estado-actividad/:id', (req, res) => statusActivityController.getStatusActivityById(req, res))
router.post('/estado-actividad/create', (req, res) => statusActivityController.createStatusActivity(req, res))
router.delete('/estado-actividad/delete/:id', (req, res) => statusActivityController.deleteStatusActivity(req, res))
router.put('/estado-actividad/update/:id', (req, res) => statusActivityController.updateStatusActivity(req, res))

export default router