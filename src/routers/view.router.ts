import express from "express"
import {PageController} from "../controllers/page.controller"

const pageController = new PageController()
const router = express.Router()

router.get('/', (req, res) => pageController.getViewPrincipal(req, res))
router.get('/area', (req, res) => pageController.getViewArea(req, res))
router.get('/cargo', (req, res) => pageController.getViewCharge(req, res))
router.get('/cliente', (req, res) => pageController.getViewCustomer(req, res))
router.get('/tipo-personal', (req, res) => pageController.getViewTipoTrabajador(req, res))
router.get('/personal', (req, res) => pageController.getViewTrabajador(req, res))
router.get('/tipo-documento', (req, res) => pageController.getViewTipoDocumento(req, res))
router.get('/tipo-servicio', (req, res) => pageController.getViewTipoServicio(req, res))
router.get('/estado-actividad', (req, res) => pageController.getViewEstadoActividad(req, res))
router.get('/proyecto', (req, res) => pageController.getViewProyecto(req, res))

export default router