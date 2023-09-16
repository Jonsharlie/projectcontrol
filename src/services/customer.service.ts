import { ConfigServer } from "../config/config"
import { CustomerEntity } from "../entity/customer.entity"
import { Request, Response } from "express"
import { AppDataSource } from "../config/data.source"
import { DataSource, DeleteResult, UpdateResult } from "typeorm"
import { TypeDocumentService } from './typedocument.service'

export class CustomerService extends ConfigServer {
    async findAllCustomer(): Promise<CustomerEntity[]> {
        const isInitialized: boolean = AppDataSource.isInitialized
        let getConn: DataSource
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const data = await getConn.getRepository(CustomerEntity).find({
            relations: {
                typeDocument: true
            }
        })
        return data
    }

    async findCustomerById(req: Request): Promise<CustomerEntity | null> {
        const {id} = req.params
        const isInitialized: boolean = AppDataSource.isInitialized
        let getConn: DataSource
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const customer = getConn.getRepository(CustomerEntity).findOneBy({id})
        return customer
    }

    async createCustomer(req: Request, res: Response): Promise<CustomerEntity[]> {
        const customerData = req.body

        const typeDocumentService = new TypeDocumentService()
        const typeDocument = await typeDocumentService.findTypeDocumentById(req)
        
        customerData.typeDocument = typeDocument
        let getConn: DataSource
        const isInitialized: boolean = AppDataSource.isInitialized
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const repo = getConn.getRepository(CustomerEntity)
        const customer = repo.create(customerData)
        const data = await repo.save(customer)
        return data
    }

    async deleteCustomer(req: Request, res: Response): Promise<DeleteResult> {
        let getConn: DataSource
        const {id} = req.params
        const isInitialized: boolean = AppDataSource.isInitialized
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        return await getConn.getRepository(CustomerEntity).delete(id)
    }

    async updateCustomer(req: Request, res: Response): Promise<UpdateResult> {
        let getConn: DataSource
        const {id} = req.params
        const isInitialized: boolean = AppDataSource.isInitialized
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        return await getConn.getRepository(CustomerEntity).update(id, req.body)
    }
}