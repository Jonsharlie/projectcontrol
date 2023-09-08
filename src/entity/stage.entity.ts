import { BaseEntity } from "../config/base.entity"
import { Entity, Column, CreateDateColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm"
import { ProjectEntity } from "./project.entity"
import { RequirementEntity } from "./requirement.entity"

@Entity({name: "stage"})
export class StageEntity extends BaseEntity {
    @Column({
        type: "varchar",
        length: 50,
        unique: true
    })
    name!: string

    @CreateDateColumn()
    startDate!: Date

    @CreateDateColumn()
    endDate!: Date

    @Column({
        default: true
    })
    state!: boolean

    @ManyToOne(() => ProjectEntity, (project) => project.stages)
    @JoinColumn({name: "id_project", "referencedColumnName": "id"})
    project!: ProjectEntity

    @OneToMany(() => RequirementEntity, (requirement) => requirement.stage)
    requirements!: RequirementEntity[]
}