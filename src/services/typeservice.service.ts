import { ConfigServer } from "../config/config"
import { TypeServiceEntity } from "../entity/typeservice.entity"
import { Request, Response } from "express"
import { AppDataSource } from "../config/data.source"
import { DataSource, DeleteResult, UpdateResult } from "typeorm"

export class TypeServiceService extends ConfigServer {
    async findAllTypeService(): Promise<TypeServiceEntity[]> {
        const isInitialized: boolean = AppDataSource.isInitialized
        let getConn: DataSource
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const data = await getConn.getRepository(TypeServiceEntity).find({
            select: {
                id: true,
                name: true,
                state: true
            },
            order: {
                name: "ASC"
            }
        })
        return data
    }

    async findTypeServiceById(req: Request): Promise<TypeServiceEntity | null> {
        const {id} = req.params
        const isInitialized: boolean = AppDataSource.isInitialized
        let getConn: DataSource
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const typeService = getConn.getRepository(TypeServiceEntity).findOneBy({id})
        return typeService
    }

    async createTypeService(req: Request, res: Response): Promise<TypeServiceEntity[]> {
        const typeServiceData = req.body
        let getConn: DataSource
        const isInitialized: boolean = AppDataSource.isInitialized
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const repo = getConn.getRepository(TypeServiceEntity)
        const typeService = repo.create(typeServiceData)
        const data = await repo.save(typeService)
        return data
    }

    async deleteTypeService(req: Request, res: Response): Promise<DeleteResult> {
        let getConn: DataSource
        const {id} = req.params
        const isInitialized: boolean = AppDataSource.isInitialized
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        return await getConn.getRepository(TypeServiceEntity).delete(id)
    }

    async updateTypeService(req: Request, res: Response): Promise<UpdateResult> {
        let getConn: DataSource
        const {id} = req.params
        const isInitialized: boolean = AppDataSource.isInitialized
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        return await getConn.getRepository(TypeServiceEntity).update(id, req.body)
    }
}