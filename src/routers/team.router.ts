import express from "express"
import { TeamController } from "../controllers/team.controller"

const teamController = new TeamController()
const router = express.Router()

router.get('/teams', (req, res) => teamController.getTeams(req, res))
router.get('/teams/:id', (req, res) => teamController.getTeamById(req, res))
router.post('/teams/create', (req, res) => teamController.createTeam(req, res))
router.delete('/teams/delete/:id', (req, res) => teamController.deleteTeam(req, res))
router.put('/teams/update/:id', (req, res) => teamController.updateTeam(req, res))

export default router