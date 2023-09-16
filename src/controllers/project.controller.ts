import { Request, Response } from 'express'
import { ProjectService } from '../services/project.service';
import { HttpResponse } from '../shared/response/http.response'
import { DeleteResult, UpdateResult } from 'typeorm';

export class ProjectController {
    constructor(private readonly projectService: ProjectService = new ProjectService(), private readonly httpResponse: HttpResponse = new HttpResponse()) {}

    async getProjects(req: Request, res: Response) {
        try {
            const data = await this.projectService.findAllProject()
            if (data.length === 0) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async getProjectById(req: Request, res: Response) {
        try {
            const data = await this.projectService.findProjectById(req)
            if (!data) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async createProject(req: Request, res: Response) {
        try {
            const data = await this.projectService.createProject(req, res)
            if (data.length === 0) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async deleteProject(req: Request, res: Response) {
        try {
            const data: DeleteResult = await this.projectService.deleteProject(req, res)
            if (!data.affected) {
                return this.httpResponse.NotFound(res, "Hay un error en eliminar")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async updateProject(req: Request, res: Response) {
        try {
            const data: UpdateResult = await this.projectService.updateProject(req, res)
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