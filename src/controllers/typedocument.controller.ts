import { Request, Response } from 'express'
import { TypeDocumentService } from '../services/typedocument.service';
import { HttpResponse } from '../shared/response/http.response'
import { DeleteResult, UpdateResult } from 'typeorm';

export class TypeDocumentController {
    constructor(private readonly typeDocumentService: TypeDocumentService = new TypeDocumentService(), private readonly httpResponse: HttpResponse = new HttpResponse()) {}

    async getTypeDocuments(req: Request, res: Response) {
        try {
            const data = await this.typeDocumentService.findAllTypeDocument()
            if (data.length === 0) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async getTypeDocumentById(req: Request, res: Response) {
        try {
            const data = await this.typeDocumentService.findTypeDocumentById(req)
            if (!data) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async createTypeDocument(req: Request, res: Response) {
        try {
            const data = await this.typeDocumentService.createTypeDocument(req, res)
            if (data.length === 0) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async deleteTypeDocument(req: Request, res: Response) {
        try {
            const data: DeleteResult = await this.typeDocumentService.deleteTypeDocument(req, res)
            if (!data.affected) {
                return this.httpResponse.NotFound(res, "Hay un error en eliminar")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async updateTypeDocument(req: Request, res: Response) {
        try {
            const data: UpdateResult = await this.typeDocumentService.updateTypeDocument(req, res)
            if (!data.affected) {
                return this.httpResponse.NotFound(res, "Hay un error en actualizar")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }
}