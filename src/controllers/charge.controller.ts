import { Request, Response } from 'express'
import { ChargeService } from '../services/charge.service';
import { HttpResponse } from '../shared/response/http.response'
import { DeleteResult, UpdateResult } from 'typeorm';

export class ChargeController {
    constructor(private readonly chargeService: ChargeService = new ChargeService(), private readonly httpResponse: HttpResponse = new HttpResponse()) {}

    async getCharges(req: Request, res: Response) {
        try {
            const data = await this.chargeService.findAllCharge()
            if (data.length === 0) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async getChargeById(req: Request, res: Response) {
        try {
            const data = await this.chargeService.findChargeById(req)
            if (!data) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async createCharge(req: Request, res: Response) {
        try {
            const data = await this.chargeService.createCharge(req, res)
            if (data.length === 0) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async deleteCharge(req: Request, res: Response) {
        try {
            const data: DeleteResult = await this.chargeService.deleteCharge(req, res)
            if (!data.affected) {
                return this.httpResponse.NotFound(res, "Hay un error en eliminar")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async updateCharge(req: Request, res: Response) {
        try {
            const data: UpdateResult = await this.chargeService.updateCharge(req, res)
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