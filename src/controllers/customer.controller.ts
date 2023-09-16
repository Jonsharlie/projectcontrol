import { Request, Response } from 'express'
import { CustomerService } from '../services/customer.service';
import { HttpResponse } from '../shared/response/http.response'
import { DeleteResult, UpdateResult } from 'typeorm';

export class CustomerController {
    constructor(private readonly customerService: CustomerService = new CustomerService(), private readonly httpResponse: HttpResponse = new HttpResponse()) {}

    async getCustomers(req: Request, res: Response) {
        try {
            const data = await this.customerService.findAllCustomer()
            if (data.length === 0) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async getCustomerById(req: Request, res: Response) {
        try {
            const data = await this.customerService.findCustomerById(req)
            if (!data) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async createCustomer(req: Request, res: Response) {
        try {
            const data = await this.customerService.createCustomer(req, res)
            if (data.length === 0) {
                return this.httpResponse.NotFound(res, "No existe dato")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async deleteCustomer(req: Request, res: Response) {
        try {
            const data: DeleteResult = await this.customerService.deleteCustomer(req, res)
            if (!data.affected) {
                return this.httpResponse.NotFound(res, "Hay un error en eliminar")
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e)
            return this.httpResponse.Error(res, e)
        }
    }

    async updateCustomer(req: Request, res: Response) {
        try {
            const data: UpdateResult = await this.customerService.updateCustomer(req, res)
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