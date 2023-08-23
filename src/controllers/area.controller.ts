import { Request, Response } from 'express'
import { AreaService } from '../services/area.service';
import { HttpResponse } from '../shared/response/http.response'
import { DeleteResult, UpdateResult } from 'typeorm';

export class AreaController {
    constructor(private readonly areaService: AreaService = new AreaService(), private readonly httpResponse: HttpResponse = new HttpResponse()) {}

    async getAreas(req: Request, res: Response) {
        try {
            const data = await this.areaService.findAllArea()
            if (data.length === 0) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async getAreaById(req: Request, res: Response) {
        try {
            const data = await this.areaService.findAreaById(req)
            if (!data) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async createArea(req: Request, res: Response) {
        try {
            const data = await this.areaService.createArea(req, res)
            if (data.length === 0) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async deleteArea(req: Request, res: Response) {
        try {
            const data: DeleteResult = await this.areaService.deleteArea(req, res)
            if (!data.affected) {
                return this.httpResponse.NotFound(res, "Hay un error en eliminar")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async updateArea(req: Request, res: Response) {
        try {
            const data: UpdateResult = await this.areaService.updateArea(req, res)
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