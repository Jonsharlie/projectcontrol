import { BaseEntity } from "../config/base.entity"
import { Column, Entity, OneToMany, OneToOne } from "typeorm"
import { ProjectEntity } from "./project.entity"

@Entity({name: "customer"})
export class CustomerEntity extends BaseEntity {
    @Column({
        type: "varchar",
        length: 11
    })
    numberRUC!: string

    @Column({
        type: "varchar",
        length: 60
    })
    businessName!: string

    @Column({
        default: true
    })
    state!: boolean

    @OneToMany(() => ProjectEntity, (project) => project.customer)
    projects!: ProjectEntity[]
}