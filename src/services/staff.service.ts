import { ConfigServer } from '../config/config'
import { StaffEntity } from '../entity/staff.entity'
import { Request, Response } from "express"
import { AppDataSource } from "../config/data.source"
import { DataSource, DeleteResult, UpdateResult } from "typeorm"
import { AreaService } from "./area.service"
import { ChargeService } from './charge.service'
import { TypeDocumentService } from './typedocument.service'
import { TypeStaffService } from './typestaff.service'

export class StaffService extends ConfigServer {
    async findAllStaff(): Promise<StaffEntity[]> {
        const isInitialized: boolean = AppDataSource.isInitialized
        let getConn: DataSource
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const data = await getConn.getRepository(StaffEntity).find({
            relations: {
                area: true,
                charge: true,
                typeDocument: true,
                typeStaff: true
            }
        })
        console.log('data staff from controller', data)
        return data
    }

    async findStaffById(req: Request): Promise<StaffEntity | null> {
        const {id} = req.params
        const isInitialized: boolean = AppDataSource.isInitialized
        let getConn: DataSource
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const user = getConn.getRepository(StaffEntity).findOneBy({id})
        return user
    }

    async createStaff(req: Request, res: Response): Promise<StaffEntity[]> {
        const staffData = req.body

        const areaService = new AreaService()
        const area = await areaService.findAreaById(req)
        staffData.area = area
        
        const chargeService = new ChargeService()
        const charge = await chargeService.findChargeById(req)
        staffData.charge = charge

        const typeDocumentService = new TypeDocumentService()
        const typeDocument = await typeDocumentService.findTypeDocumentById(req)
        staffData.typeDocument = typeDocument

        const typeStaffService = new TypeStaffService()
        const typeStaff = await typeStaffService.findTypeStaffById(req)
        staffData.typeStaff = typeStaff

        let getConn: DataSource
        const isInitialized: boolean = AppDataSource.isInitialized
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const repo = getConn.getRepository(StaffEntity)
        const staff = repo.create(staffData)
        const data = await repo.save(staff)
        return data
    }

    async deleteStaff(req: Request, res: Response): Promise<DeleteResult> {
        let getConn: DataSource
        const {id} = req.params
        const isInitialized: boolean = AppDataSource.isInitialized
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        return await getConn.getRepository(StaffEntity).delete(id)
    }

    async updateStaff(req: Request, res: Response): Promise<UpdateResult> {
        let getConn: DataSource
        const {id} = req.params
        const isInitialized: boolean = AppDataSource.isInitialized
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        
        const areaService = new AreaService()
        const area = await areaService.findAreaById(req.body.id_area)

        const chargeService = new ChargeService()
        const charge = await chargeService.findChargeById(req.body.id_charge)

        return await getConn
            .createQueryBuilder()
            .update(StaffEntity)
            .set({
                "firstName": req.body.firstName,
                "lastName": req.body.lastName,
                "email": req.body.email,
                "phone": req.body.phone,
                "area": area,
                "charge": charge
            })
            .where("id = :id", {id: id})
            .execute()
    }
}