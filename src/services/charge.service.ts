import { ConfigServer } from "../config/config"
import { ChargeEntity } from "../entity/charge.entity"
import { Request, Response } from "express"
import { AppDataSource } from "../config/data.source"
import { DataSource, DeleteResult, UpdateResult } from "typeorm"

export class ChargeService extends ConfigServer {
    async findAllCharge(): Promise<ChargeEntity[]> {
        const isInitialized: boolean = AppDataSource.isInitialized
        let getConn: DataSource
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const data = await getConn.getRepository(ChargeEntity).find({
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

    async findChargeById(req: Request): Promise<ChargeEntity | null> {
        const {id_charge} = req.body
        const id = this.getStringToValue(id_charge)
        const isInitialized: boolean = AppDataSource.isInitialized
        let getConn: DataSource
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const charge = getConn.getRepository(ChargeEntity).findOneBy({id})
        return charge
    }

    async createCharge(req: Request, res: Response): Promise<ChargeEntity[]> {
        const chargeData = req.body
        let getConn: DataSource
        const isInitialized: boolean = AppDataSource.isInitialized
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const repo = getConn.getRepository(ChargeEntity)
        const charge = repo.create(chargeData)
        const data = await repo.save(charge)
        return data
    }

    async deleteCharge(req: Request, res: Response): Promise<DeleteResult> {
        let getConn: DataSource
        const {id} = req.params
        const isInitialized: boolean = AppDataSource.isInitialized
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        return await getConn.getRepository(ChargeEntity).delete(id)
    }

    async updateCharge(req: Request, res: Response): Promise<UpdateResult> {
        let getConn: DataSource
        const {id} = req.params
        const isInitialized: boolean = AppDataSource.isInitialized
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        return await getConn.getRepository(ChargeEntity).update(id, req.body)
    }

    getStringToValue(value: any): string {
        return value.toString()
    }
}