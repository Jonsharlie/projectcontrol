import express from "express"
import { ChargeController } from "../controllers/charge.controller"

const chargeController = new ChargeController()
const router = express.Router()

router.get('/cargos', (req, res) => chargeController.getCharges(req, res))
router.get('/cargos/:id', (req, res) => chargeController.getChargeById(req, res))
router.post('/cargos/create', (req, res) => chargeController.createCharge(req, res))
router.delete('/cargos/delete/:id', (req, res) => chargeController.deleteCharge(req, res))
router.put('/cargos/update/:id', (req, res) => chargeController.updateCharge(req, res))

export default router