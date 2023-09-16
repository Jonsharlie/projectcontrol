import { ConfigServer } from "../config/config"
import { ProjectEntity } from "../entity/project.entity"
import { Request, Response } from "express"
import { AppDataSource } from "../config/data.source"
import { DataSource, DeleteResult, UpdateResult } from "typeorm"
import { CustomerService } from "./customer.service"
import { TypeServiceService } from "./typeservice.service"

export class ProjectService extends ConfigServer {
    async findAllProject(): Promise<ProjectEntity[]> {
        const isInitialized: boolean = AppDataSource.isInitialized
        let getConn: DataSource
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const data = await getConn.getRepository(ProjectEntity).find({
            select: {
                id: true,
                name: true,
                description: true,
                startDate: true,
                endDate: true,
                budget: true,
                state: true
            },
            order: {
                name: "ASC"
            }
        })
        return data
    }

    async findProjectById(req: Request): Promise<ProjectEntity | null> {
        const {id} = req.params
        const isInitialized: boolean = AppDataSource.isInitialized
        let getConn: DataSource
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const project = getConn.getRepository(ProjectEntity).findOneBy({id})
        return project
    }

    async createProject(req: Request, res: Response): Promise<ProjectEntity[]> {
        const projectData = req.body

        const customerService = new CustomerService()
        const customer = await customerService.findCustomerById(req)
        projectData.customer = customer

        const typeServiceService = new TypeServiceService()
        const typeService = await typeServiceService.findTypeServiceById(req)
        projectData.typeService = typeService
        
        let getConn: DataSource
        const isInitialized: boolean = AppDataSource.isInitialized
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const repo = getConn.getRepository(ProjectEntity)
        const project = repo.create(projectData)
        const data = await repo.save(project)
        return data
    }

    async deleteProject(req: Request, res: Response): Promise<DeleteResult> {
        let getConn: DataSource
        const {id} = req.params
        const isInitialized: boolean = AppDataSource.isInitialized
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        return await getConn.getRepository(ProjectEntity).delete(id)
    }

    async updateProject(req: Request, res: Response): Promise<UpdateResult> {
        let getConn: DataSource
        const {id} = req.params
        const isInitialized: boolean = AppDataSource.isInitialized
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        return await getConn.getRepository(ProjectEntity).update(id, req.body)
    }
}