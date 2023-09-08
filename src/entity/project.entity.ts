import { BaseEntity } from "../config/base.entity"
import { CustomerEntity } from "./customer.entity"
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm"
import { TypeServiceEntity } from "./typeservice.entity"
import { ProjectStaffEntity } from "./project.staff.entity"
import { StageEntity } from "./stage.entity"
import { SpentEntity } from "./spent.entity"

@Entity({name: "project"})
export class ProjectEntity extends BaseEntity {
    
    @Column({
        type: "varchar",
        length: 100,
        unique: true
    })
    name!: string

    @Column({
        type: "text"
    })
    description!: string

    @CreateDateColumn()
    startDate!: Date

    @CreateDateColumn()
    endDate!: Date

    @Column({
        type: "decimal",
        precision: 10,
        scale: 2,
        default: 0
    })
    budget!: number

    @Column({
        default: true
    })
    state!: boolean

    @ManyToOne(() => CustomerEntity, (customer) => customer.projects)
    @JoinColumn({name: "id_customer", "referencedColumnName": "id"})
    customer!: CustomerEntity

    @ManyToOne(() => TypeServiceEntity, (typeService) => typeService.projects)
    @JoinColumn({name: "id_typeservice", "referencedColumnName": "id"})
    typeService!: TypeServiceEntity

    @OneToMany(() => ProjectStaffEntity, (projectStaff) => projectStaff.project)
    staffToProjects!: ProjectStaffEntity[]

    @OneToMany(() => StageEntity, (stage) => stage.project)
    stages!: StageEntity[]

    @OneToMany(() => SpentEntity, (spent) => spent.project)
    spents!: SpentEntity[]
}