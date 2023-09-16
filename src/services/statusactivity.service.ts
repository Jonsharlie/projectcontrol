import { ConfigServer } from "../config/config"
import { StatusActivityEntity } from "../entity/statusactivity.entity"
import { Request, Response } from "express"
import { AppDataSource } from "../config/data.source"
import { DataSource, DeleteResult, UpdateResult } from "typeorm"

export class StatusActivityService extends ConfigServer {
    async findAllStatusActivity(): Promise<StatusActivityEntity[]> {
        const isInitialized: boolean = AppDataSource.isInitialized
        let getConn: DataSource
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const data = await getConn.getRepository(StatusActivityEntity).find({
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

    async findStatusActivityById(req: Request): Promise<StatusActivityEntity | null> {
        const {id_statusactivity} = req.body
        const id = this.getStringToValue(id_statusactivity)
        const isInitialized: boolean = AppDataSource.isInitialized
        let getConn: DataSource
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const statusActivity = getConn.getRepository(StatusActivityEntity).findOneBy({id})
        return statusActivity
    }

    async createStatusActivity(req: Request, res: Response): Promise<StatusActivityEntity[]> {
        const statusData = req.body
        let getConn: DataSource
        const isInitialized: boolean = AppDataSource.isInitialized
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const repo = getConn.getRepository(StatusActivityEntity)
        const status = repo.create(statusData)
        const data = await repo.save(status)
        return data
    }

    async deleteStatusActivity(req: Request, res: Response): Promise<DeleteResult> {
        let getConn: DataSource
        const {id} = req.params
        const isInitialized: boolean = AppDataSource.isInitialized
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        return await getConn.getRepository(StatusActivityEntity).delete(id)
    }

    async updateStatusActivity(req: Request, res: Response): Promise<UpdateResult> {
        let getConn: DataSource
        const {id} = req.params
        const isInitialized: boolean = AppDataSource.isInitialized
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        return await getConn.getRepository(StatusActivityEntity).update(id, req.body)
    }

    getStringToValue(value: any): string {
        return value.toString()
    }
}