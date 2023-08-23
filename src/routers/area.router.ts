import express from "express"
import { AreaController } from "../controllers/area.controller"

const areaController = new AreaController()
const router = express.Router()

router.get('/areas', (req, res) => areaController.getAreas(req, res))
router.get('/areas/:id', (req, res) => areaController.getAreaById(req, res))
router.post('/areas/create', (req, res) => areaController.createArea(req, res))
router.delete('/areas/delete/:id', (req, res) => areaController.deleteArea(req, res))
router.put('/areas/update/:id', (req, res) => areaController.updateArea(req, res))

export default router