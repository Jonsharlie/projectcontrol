import { Request, Response } from 'express'
import { TeamService } from '../services/team.service';
import { HttpResponse } from '../shared/response/http.response'
import { DeleteResult, UpdateResult } from 'typeorm';

export class TeamController {
    constructor(private readonly teamService: TeamService = new TeamService(), private readonly httpResponse: HttpResponse = new HttpResponse()) {}

    async getTeams(req: Request, res: Response) {
        try {
            const data = await this.teamService.findAllTeam()
            if (data.length === 0) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async getTeamById(req: Request, res: Response) {
        try {
            const data = await this.teamService.findTeamById(req)
            if (!data) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async createTeam(req: Request, res: Response) {
        try {
            const data = await this.teamService.createTeam(req, res)
            if (data.length === 0) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async deleteTeam(req: Request, res: Response) {
        try {
            const data: DeleteResult = await this.teamService.deleteTeam(req, res)
            if (!data.affected) {
                return this.httpResponse.NotFound(res, "Hay un error en eliminar")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async updateTeam(req: Request, res: Response) {
        try {
            const data: UpdateResult = await this.teamService.updateTeam(req, res)
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