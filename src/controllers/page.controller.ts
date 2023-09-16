import {Request, Response} from 'express'

export class PageController {
    getViewPrincipal(req: Request, res: Response) {
        res.render('pages/home')
    }

    async getViewArea(req: Request, res: Response) {
        const response = await fetch('http://localhost:8000/api/areas')
        const areas = await response.json()
        res.render('pages/area', {areas: areas})
    }

    async getViewCharge(req: Request, res: Response) {
        const response = await fetch('http://localhost:8000/api/cargos')
        const charges = await response.json()
        res.render('pages/cargo', {charges: charges})
    }

    async getViewCustomer(req: Request, res: Response) {
        const responseClientes = await fetch('http://localhost:8000/api/clientes')
        const customers = await responseClientes.json()

        const responseTipoDocumento = await fetch('http://localhost:8000/api/tipo-documento')
        const typeDocuments = await responseTipoDocumento.json()

        res.render('pages/cliente', {customers: customers, typeDocuments: typeDocuments})
    }

    async getViewTipoTrabajador(req: Request, res: Response) {
        const response = await fetch('http://localhost:8000/api/tipo-personal')
        const typeStaffs = await response.json()
        res.render('pages/tipo-personal', {typeStaffs: typeStaffs})
    }

    async getViewTrabajador(req: Request, res: Response) {
        const responseStaffs = await fetch('http://localhost:8000/api/personal')
        const staffs = await responseStaffs.json()

        const responseTypeStaff = await fetch('http://localhost:8000/api/tipo-personal')
        const typeStaffs = await responseTypeStaff.json()

        const responseTypeDocuments = await fetch('http://localhost:8000/api/tipo-documento')
        const typeDocuments = await responseTypeDocuments.json()

        const responseAreas = await fetch('http://localhost:8000/api/areas')
        const areas = await responseAreas.json()

        const responseCargos = await fetch('http://localhost:8000/api/cargos')
        const cargos = await responseCargos.json()

        res.render('pages/personal',
            {
                staffs: staffs,
                typeStaffs: typeStaffs,
                typeDocuments: typeDocuments,
                areas: areas,
                cargos: cargos
            }
        )
    }

    async getViewTipoDocumento(req: Request, res: Response) {
        const response = await fetch('http://localhost:8000/api/tipo-documento')
        const typeDocuments = await response.json()
        res.render('pages/tipo-documento', {typeDocuments: typeDocuments})
    }

    async getViewTipoServicio(req: Request, res: Response) {
        const response = await fetch('http://localhost:8000/api/tipo-servicio')
        const typeServices = await response.json()
        res.render('pages/tipo-servicio', {typeServices: typeServices})
    }

    async getViewEstadoActividad(req: Request, res: Response) {
        const response = await fetch('http://localhost:8000/api/estado-actividad')
        const statusActivities = await response.json()
        res.render('pages/estado-actividad', {statusActivities: statusActivities})
    }

    async getViewProyecto(req: Request, res: Response) {
        const responseProjects = await fetch('http://localhost:8000/api/proyectos')
        const projects = await responseProjects.json()

        const responseClientes = await fetch('http://localhost:8000/api/clientes')
        const clientes = await responseClientes.json()

        const responseTipoServicio = await fetch('http://localhost:8000/api/tipo-servicio')
        const tipoServicios = await responseTipoServicio.json()

        res.render('pages/proyecto', {
            projects: projects,
            clientes: clientes,
            tipoServicios: tipoServicios
        })
    }
}
