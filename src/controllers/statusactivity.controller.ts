import { Request, Response } from 'express'
import { StatusActivityService } from '../services/statusactivity.service';
import { HttpResponse } from '../shared/response/http.response'
import { DeleteResult, UpdateResult } from 'typeorm';

export class StatusActivityController {
    constructor(private readonly statusActivityService: StatusActivityService = new StatusActivityService(), private readonly httpResponse: HttpResponse = new HttpResponse()) {}

    async getStatusActivity(req: Request, res: Response) {
        try {
            const data = await this.statusActivityService.findAllStatusActivity()
            if (data.length === 0) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async getStatusActivityById(req: Request, res: Response) {
        try {
            const data = await this.statusActivityService.findStatusActivityById(req)
            if (!data) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async createStatusActivity(req: Request, res: Response) {
        try {
            const data = await this.statusActivityService.createStatusActivity(req, res)
            if (data.length === 0) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async deleteStatusActivity(req: Request, res: Response) {
        try {
            const data: DeleteResult = await this.statusActivityService.deleteStatusActivity(req, res)
            if (!data.affected) {
                return this.httpResponse.NotFound(res, "Hay un error en eliminar")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async updateStatusActivity(req: Request, res: Response) {
        try {
            const data: UpdateResult = await this.statusActivityService.updateStatusActivity(req, res)
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