import { Request, Response } from 'express'
import { TypeServiceService } from '../services/typeservice.service';
import { HttpResponse } from '../shared/response/http.response'
import { DeleteResult, UpdateResult } from 'typeorm';

export class TypeServiceController {
    constructor(private readonly typeServiceService: TypeServiceService = new TypeServiceService(), private readonly httpResponse: HttpResponse = new HttpResponse()) {}

    async getTypeServices(req: Request, res: Response) {
        try {
            const data = await this.typeServiceService.findAllTypeService()
            if (data.length === 0) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async getTypeServiceById(req: Request, res: Response) {
        try {
            const data = await this.typeServiceService.findTypeServiceById(req)
            if (!data) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async createTypeService(req: Request, res: Response) {
        try {
            const data = await this.typeServiceService.createTypeService(req, res)
            if (data.length === 0) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async deleteTypeService(req: Request, res: Response) {
        try {
            const data: DeleteResult = await this.typeServiceService.deleteTypeService(req, res)
            if (!data.affected) {
                return this.httpResponse.NotFound(res, "Hay un error en eliminar")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async updateTypeService(req: Request, res: Response) {
        try {
            const data: UpdateResult = await this.typeServiceService.updateTypeService(req, res)
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