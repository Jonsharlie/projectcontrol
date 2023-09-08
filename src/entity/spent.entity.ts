import { BaseEntity } from "../config/base.entity"
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne } from "typeorm"
import { ProjectEntity } from "./project.entity"

@Entity({name: "spent"})
export class SpentEntity extends BaseEntity {
    @Column({
        type: "varchar",
        length: 100
    })
    concept!: string

    @CreateDateColumn()
    registerDate!: Date

    @Column({
        default: true
    })
    state!: boolean

    @ManyToOne(() => ProjectEntity, (project) => project.spents)
    @JoinColumn({name: "id_project", "referencedColumnName": "id"})
    project!: ProjectEntity
}