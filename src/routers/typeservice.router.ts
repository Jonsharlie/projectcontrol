import express from "express"
import { TypeServiceController } from "../controllers/typeservice.controller"

const typeServiceController = new TypeServiceController()
const router = express.Router()

router.get('/tipo-servicio', (req, res) => typeServiceController.getTypeServices(req, res))
router.get('/tipo-servicio/:id', (req, res) => typeServiceController.getTypeServiceById(req, res))
router.post('/tipo-servicio/create', (req, res) => typeServiceController.createTypeService(req, res))
router.delete('/tipo-servicio/delete/:id', (req, res) => typeServiceController.deleteTypeService(req, res))
router.put('/tipo-servicio/update/:id', (req, res) => typeServiceController.updateTypeService(req, res))

export default router