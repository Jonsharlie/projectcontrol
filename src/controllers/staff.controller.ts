import { Request, Response } from 'express'
import { StaffService } from '../services/staff.service';
import { HttpResponse } from '../shared/response/http.response'
import { DeleteResult, UpdateResult } from 'typeorm';

export class StaffController {
    constructor(private readonly staffService: StaffService = new StaffService(), private readonly httpResponse: HttpResponse = new HttpResponse()) {}

    async getStaffs(req: Request, res: Response) {
        try {
            const data = await this.staffService.findAllStaff()
            if (data.length === 0) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async getStaffById(req: Request, res: Response) {
        try {
            const data = await this.staffService.findStaffById(req)
            if (!data) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async createStaff(req: Request, res: Response) {
        try {
            const data = await this.staffService.createStaff(req, res)
            if (data.length === 0) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async deleteStaff(req: Request, res: Response) {
        try {
            const data: DeleteResult = await this.staffService.deleteStaff(req, res)
            if (!data.affected) {
                return this.httpResponse.NotFound(res, "Hay un error en eliminar")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async updateStaff(req: Request, res: Response) {
        try {
            const data: UpdateResult = await this.staffService.updateStaff(req, res)
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