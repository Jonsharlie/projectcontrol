import { ConfigServer } from "../config/config"
import { UserEntity } from "../entity/user.entity"
import { Request, Response } from "express"
import { AppDataSource } from "../config/data.source"
import { DataSource, DeleteResult, UpdateResult } from "typeorm"
import { UserProfileService } from './userprofile.service';

export class UserService extends ConfigServer {
    async findAllUser(): Promise<UserEntity[]> {
        const isInitialized: boolean = AppDataSource.isInitialized
        let getConn: DataSource
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const data = await getConn.getRepository(UserEntity).find()
        return data
    }

    async findUserById(req: Request): Promise<UserEntity | null> {
        const {id} = req.params
        const isInitialized: boolean = AppDataSource.isInitialized
        let getConn: DataSource
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const user = getConn.getRepository(UserEntity).findOneBy({id})
        return user
    }

    async createUser(req: Request, res: Response): Promise<UserEntity[]> {
        const userData = req.body
        const userProfileService = new UserProfileService()
        const userProfile = await userProfileService.findUserProfileById(userData.id_userprofile)
        userData.userprofile = userProfile
        let getConn: DataSource
        const isInitialized: boolean = AppDataSource.isInitialized
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const repo = getConn.getRepository(UserEntity)
        const user = repo.create(userData)
        const data = await repo.save(user)
        return data
    }

    async deleteUser(req: Request, res: Response): Promise<DeleteResult> {
        let getConn: DataSource
        const {id} = req.params
        const isInitialized: boolean = AppDataSource.isInitialized
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        return await getConn.getRepository(UserEntity).delete(id)
    }

    async updateUser(req: Request, res: Response): Promise<UpdateResult> {
        let getConn: DataSource
        const {id} = req.params
        const isInitialized: boolean = AppDataSource.isInitialized
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        
        const userProfileService = new UserProfileService()
        const userProfile = await userProfileService.findUserProfileById(req.body.id_userprofile)

        return await getConn
            .createQueryBuilder()
            .update(UserEntity)
            .set({
                "login": req.body.login,
                "password": req.body.password,
                "userprofile": userProfile
            })
            .where("id = :id", {id: id})
            .execute()
    }
}