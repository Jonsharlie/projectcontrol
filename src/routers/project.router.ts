import express from "express"
import { ProjectController } from "../controllers/project.controller"

const projectController = new ProjectController()
const router = express.Router()

router.get('/proyectos', (req, res) => projectController.getProjects(req, res))
router.get('/proyectos/:id', (req, res) => projectController.getProjectById(req, res))
router.post('/proyectos/create', (req, res) => projectController.createProject(req, res))
router.delete('/proyectos/delete/:id', (req, res) => projectController.deleteProject(req, res))
router.put('/proyectos/update/:id', (req, res) => projectController.updateProject(req, res))

export default router