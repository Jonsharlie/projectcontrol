import "reflect-metadata"
import express from 'express'
import cors from 'cors'
import { ConfigServer } from './config/config'
import { DataSource } from 'typeorm'
import areaRouter from './routers/area.router'
import teamRouter from './routers/team.router'
import userProfileRouter from './routers/userprofile.router'
import userRouter from './routers/user.router'
import morgan from 'morgan';
class ServerBootstrap extends ConfigServer {
    public app: express.Application = express()
    private port: Number = this.getNumberEnv("PORT")

    constructor() {
        super()
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))
        this.dbConnect()
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use('/api', [areaRouter, teamRouter, userProfileRouter, userRouter])
        this.listen()
    }

    async dbConnect(): Promise<DataSource | void> {
        return this.initConnect
            .then(() => {
                console.log("Connect Success")
            })
            .catch((err) => {
                console.error(err)
            })
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log('Server listening on port => '+this.port)
        })
    }
}

new ServerBootstrap()
