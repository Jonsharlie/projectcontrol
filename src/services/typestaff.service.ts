import { ConfigServer } from "../config/config"
import { TypeStaffEntity } from "../entity/typestaff.entity"
import { Request, Response } from "express"
import { AppDataSource } from "../config/data.source"
import { DataSource, DeleteResult, UpdateResult } from "typeorm"

export class TypeStaffService extends ConfigServer {
    async findAllTypeStaff(): Promise<TypeStaffEntity[]> {
        const isInitialized: boolean = AppDataSource.isInitialized
        let getConn: DataSource
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const data = await getConn.getRepository(TypeStaffEntity).find({
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

    async findTypeStaffById(req: Request): Promise<TypeStaffEntity | null> {
        const {id_typestaff} = req.body
        const id = this.getStringToValue(id_typestaff)
        const isInitialized: boolean = AppDataSource.isInitialized
        let getConn: DataSource
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const typeStaff = getConn.getRepository(TypeStaffEntity).findOneBy({id})
        return typeStaff
    }

    async createTypeStaff(req: Request, res: Response): Promise<TypeStaffEntity[]> {
        const typeStaffData = req.body
        let getConn: DataSource
        const isInitialized: boolean = AppDataSource.isInitialized
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const repo = getConn.getRepository(TypeStaffEntity)
        const typeStaff = repo.create(typeStaffData)
        const data = await repo.save(typeStaff)
        return data
    }

    async deleteTypeStaff(req: Request, res: Response): Promise<DeleteResult> {
        let getConn: DataSource
        const {id} = req.params
        const isInitialized: boolean = AppDataSource.isInitialized
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        return await getConn.getRepository(TypeStaffEntity).delete(id)
    }

    async updateTypeStaff(req: Request, res: Response): Promise<UpdateResult> {
        let getConn: DataSource
        const {id} = req.params
        const isInitialized: boolean = AppDataSource.isInitialized
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        return await getConn.getRepository(TypeStaffEntity).update(id, req.body)
    }

    getStringToValue(value: any): string {
        return value.toString()
    }
}