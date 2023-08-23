import { ConfigServer } from "../config/config"
import { UserProfileEntity } from "../entity/userprofile.entity"
import { Request, Response } from "express"
import { AppDataSource } from "../config/data.source"
import { DataSource, DeleteResult, UpdateResult } from "typeorm"

export class UserProfileService extends ConfigServer {
    async findAllUserProfile(): Promise<UserProfileEntity[]> {
        const isInitialized: boolean = AppDataSource.isInitialized
        let getConn: DataSource
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const data = await getConn.getRepository(UserProfileEntity).find()
        return data
    }

    async findUserProfileById(id: string): Promise<UserProfileEntity | null> {
        // const {id} = req.params
        const isInitialized: boolean = AppDataSource.isInitialized
        let getConn: DataSource
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const userProfile = getConn.getRepository(UserProfileEntity).findOneBy({id})
        return userProfile
    }

    async createUserProfile(req: Request, res: Response): Promise<UserProfileEntity[]> {
        const userProfileData = req.body
        let getConn: DataSource
        const isInitialized: boolean = AppDataSource.isInitialized
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        const repo = getConn.getRepository(UserProfileEntity)
        const userProfile = repo.create(userProfileData)
        const data = await repo.save(userProfile)
        return data
    }

    async deleteUserProfile(req: Request, res: Response): Promise<DeleteResult> {
        let getConn: DataSource
        const {id} = req.params
        const isInitialized: boolean = AppDataSource.isInitialized
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        return await getConn.getRepository(UserProfileEntity).delete(id)
    }

    async updateUserProfile(req: Request, res: Response): Promise<UpdateResult> {
        let getConn: DataSource
        const {id} = req.params
        const isInitialized: boolean = AppDataSource.isInitialized
        if (isInitialized) {
            getConn = AppDataSource
        } else {
            getConn = await this.initConnect
        }
        return await getConn.getRepository(UserProfileEntity).update(id, req.body)
    }
}