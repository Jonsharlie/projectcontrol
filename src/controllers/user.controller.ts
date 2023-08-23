import { Request, Response } from 'express'
import { UserService } from '../services/user.service';
import { HttpResponse } from '../shared/response/http.response'
import { DeleteResult, UpdateResult } from 'typeorm';

export class UserController {
    constructor(private readonly userService: UserService = new UserService(), private readonly httpResponse: HttpResponse = new HttpResponse()) {}

    async getUsers(req: Request, res: Response) {
        try {
            const data = await this.userService.findAllUser()
            if (data.length === 0) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async getUserById(req: Request, res: Response) {
        try {
            const data = await this.userService.findUserById(req)
            if (!data) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async createUser(req: Request, res: Response) {
        try {
            const data = await this.userService.createUser(req, res)
            if (data.length === 0) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            const data: DeleteResult = await this.userService.deleteUser(req, res)
            if (!data.affected) {
                return this.httpResponse.NotFound(res, "Hay un error en eliminar")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async updateUser(req: Request, res: Response) {
        try {
            const data: UpdateResult = await this.userService.updateUser(req, res)
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