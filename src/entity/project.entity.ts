import { BaseEntity } from "../config/base.entity"
import { MemberProjectEntity } from "./member-project.entity"
import { Column, CreateDateColumn, Entity, OneToMany } from "typeorm"

@Entity({name: "project"})
export class ProjectEntity extends BaseEntity {
    
    @Column({
        type: "varchar",
        length: 100,
        unique: true
    })
    name!: string

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

    @OneToMany(() => MemberProjectEntity ,(memberProject) => memberProject.project)
    memberProject!: MemberProjectEntity
}