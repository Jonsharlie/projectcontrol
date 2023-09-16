import { Request, Response } from 'express'
import { TypeStaffService } from '../services/typestaff.service';
import { HttpResponse } from '../shared/response/http.response'
import { DeleteResult, UpdateResult } from 'typeorm';

export class TypeStaffController {
    constructor(private readonly typeStaffService: TypeStaffService = new TypeStaffService(), private readonly httpResponse: HttpResponse = new HttpResponse()) {}

    async getTypeStaffs(req: Request, res: Response) {
        try {
            const data = await this.typeStaffService.findAllTypeStaff()
            if (data.length === 0) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async getTypeStaffById(req: Request, res: Response) {
        try {
            const data = await this.typeStaffService.findTypeStaffById(req)
            if (!data) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async createTypeStaff(req: Request, res: Response) {
        try {
            const data = await this.typeStaffService.createTypeStaff(req, res)
            if (data.length === 0) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async deleteTypeStaff(req: Request, res: Response) {
        try {
            const data: DeleteResult = await this.typeStaffService.deleteTypeStaff(req, res)
            if (!data.affected) {
                return this.httpResponse.NotFound(res, "Hay un error en eliminar")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async updateTypeStaff(req: Request, res: Response) {
        try {
            const data: UpdateResult = await this.typeStaffService.updateTypeStaff(req, res)
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