import { ConfigServer } from "../config/config"
import { TypeDocumentEntity } from "../entity/typedocument.entity"
import { Request, Response } from "express"
import { AppDataSource } from "../config/data.source"
import { DataSource, DeleteResult, UpdateResult } from "typeorm"

export class TypeDocumentService extends ConfigServer {
    async findAllTypeDocument(): Promise<TypeDocumentEntity[]> {
        const isInitialized: boolean = AppDataSource.isInitialized
        let getConn: DataSource
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const data = await getConn.getRepository(TypeDocumentEntity).find({
            select: {
                id: true,
                name: true,
                abbreviation: true,
                length: true,
                person: true,
                company: true,
                state: true
            },
            order: {
                name: "ASC"
            }
        })
        return data
    }

    async findTypeDocumentById(req: Request): Promise<TypeDocumentEntity | null> {
        const {id_typedocument} = req.body
        const id = this.getStringToValue(id_typedocument)
        const isInitialized: boolean = AppDataSource.isInitialized
        let getConn: DataSource
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const typeDocument = getConn.getRepository(TypeDocumentEntity).findOneBy({id})
        return typeDocument
    }

    async findAllForPerson(): Promise<TypeDocumentEntity[]> {
        const isInitialized: boolean = AppDataSource.isInitialized
        let getConn: DataSource
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const data = await getConn.getRepository(TypeDocumentEntity).find({
            select: {
                id: true,
                name: true,
                abbreviation: true,
                length: true,
                person: true,
                company: true,
                state: true
            },
            where: {
                person: true
            },
            order: {
                name: "ASC"
            }
        })
        return data
    }

    async createTypeDocument(req: Request, res: Response): Promise<TypeDocumentEntity[]> {
        const typeDocumentData = req.body
        let getConn: DataSource
        const isInitialized: boolean = AppDataSource.isInitialized
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const repo = getConn.getRepository(TypeDocumentEntity)
        const typeDocument = repo.create(typeDocumentData)
        const data = await repo.save(typeDocument)
        return data
    }

    async deleteTypeDocument(req: Request, res: Response): Promise<DeleteResult> {
        let getConn: DataSource
        const {id} = req.params
        const isInitialized: boolean = AppDataSource.isInitialized
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        return await getConn.getRepository(TypeDocumentEntity).delete(id)
    }

    async updateTypeDocument(req: Request, res: Response): Promise<UpdateResult> {
        let getConn: DataSource
        const {id} = req.params
        const isInitialized: boolean = AppDataSource.isInitialized
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        return await getConn.getRepository(TypeDocumentEntity).update(id, req.body)
    }

    getStringToValue(value: any): string {
        return value.toString()
    }
}