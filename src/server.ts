import "reflect-metadata"
import express from 'express'
import cors from 'cors'
import { ConfigServer } from './config/config'
import { DataSource } from 'typeorm'
import viewRouter from './routers/view.router'
import areaRouter from './routers/area.router'
import teamRouter from './routers/team.router'
import chargeRouter from "./routers/charge.router"
import customerRouter from './routers/customer.router'
import userProfileRouter from './routers/userprofile.router'
import userRouter from './routers/user.router'
import typeStaffRouter from './routers/typestaff.router'
import staffRouter from './routers/staff.router'
import typeDocumentRouter from './routers/typedocument.router'
import typeServiceRouter from './routers/typeservice.router'
import statusActivityRouter from './routers/statusactivity.router'
import projectRouter from './routers/project.router'
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
        this.views()
        this.app.use('/', viewRouter)
        this.app.use('/api', [
            areaRouter,
            chargeRouter,
            customerRouter,
            teamRouter,
            userProfileRouter,
            userRouter,
            typeStaffRouter,
            staffRouter,
            typeDocumentRouter,
            typeServiceRouter,
            statusActivityRouter,
            projectRouter
        ])
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

    public views() {
        const expressLayouts = require('express-ejs-layouts')
        const path = require('path')
        this.app.set('view engine', 'ejs')
        this.app.use(expressLayouts)
        this.app.use(express.static(path.join(__dirname, '..', 'src/public')))
    }
}

new ServerBootstrap()
