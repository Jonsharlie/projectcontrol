import { Request, Response } from 'express'
import { UserProfileService } from '../services/userprofile.service';
import { HttpResponse } from '../shared/response/http.response'
import { DeleteResult, UpdateResult } from 'typeorm';

export class UserProfileController {
    constructor(private readonly userProfileService: UserProfileService = new UserProfileService(), private readonly httpResponse: HttpResponse = new HttpResponse()) {}

    async getUserProfiles(req: Request, res: Response) {
        try {
            const data = await this.userProfileService.findAllUserProfile()
            if (data.length === 0) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async getUserProfileById(req: Request, res: Response) {
        try {
            const data = await this.userProfileService.findUserProfileById(req.params.id)
            if (!data) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async createUserProfile(req: Request, res: Response) {
        try {
            const data = await this.userProfileService.createUserProfile(req, res)
            if (data.length === 0) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async deleteUserProfile(req: Request, res: Response) {
        try {
            const data: DeleteResult = await this.userProfileService.deleteUserProfile(req, res)
            if (!data.affected) {
                return this.httpResponse.NotFound(res, "Hay un error en eliminar")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async updateUserProfile(req: Request, res: Response) {
        try {
            const data: UpdateResult = await this.userProfileService.updateUserProfile(req, res)
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