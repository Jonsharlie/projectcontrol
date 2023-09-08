import { BaseEntity } from "../config/base.entity"
import { Entity, Column, CreateDateColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm"
import { StageEntity } from "./stage.entity"
import { ActivityEntity } from "./activity.entity"

@Entity({name: "requirement"})
export class RequirementEntity extends BaseEntity {
    @Column({
        type: "varchar",
        length: 100
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

    @ManyToOne(() => StageEntity, (stage) => stage.requirements)
    @JoinColumn({name: "id_stage", "referencedColumnName": "id"})
    stage!: StageEntity

    @OneToMany(() => ActivityEntity, (activity) => activity.requirement)
    activities!: ActivityEntity[]
}