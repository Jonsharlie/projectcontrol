import express from "express"
import { CustomerController } from "../controllers/customer.controller"

const customerController = new CustomerController()
const router = express.Router()

router.get('/clientes', (req, res) => customerController.getCustomers(req, res))
router.get('/clientes/:id', (req, res) => customerController.getCustomerById(req, res))
router.post('/clientes/create', (req, res) => customerController.createCustomer(req, res))
router.delete('/clientes/delete/:id', (req, res) => customerController.deleteCustomer(req, res))
router.put('/clientes/update/:id', (req, res) => customerController.updateCustomer(req, res))

export default router