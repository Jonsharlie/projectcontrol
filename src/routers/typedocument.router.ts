import express from "express"
import { TypeDocumentController } from "../controllers/typedocument.controller"

const typeDocumentController = new TypeDocumentController()
const router = express.Router()

router.get('/tipo-documento', (req, res) => typeDocumentController.getTypeDocuments(req, res))
router.get('/tipo-documento/:id', (req, res) => typeDocumentController.getTypeDocumentById(req, res))
router.post('/tipo-documento/create', (req, res) => typeDocumentController.createTypeDocument(req, res))
router.delete('/tipo-documento/delete/:id', (req, res) => typeDocumentController.deleteTypeDocument(req, res))
router.put('/tipo-documento/update/:id', (req, res) => typeDocumentController.updateTypeDocument(req, res))

export default router