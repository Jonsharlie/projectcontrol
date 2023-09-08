import { BaseEntity } from "../config/base.entity"
import { Column, Entity, OneToMany } from "typeorm"
import { ProjectEntity } from "./project.entity"

@Entity({name: "typeservice"})
export class TypeServiceEntity extends BaseEntity {
    @Column({
        type: "varchar",
        length: 50,
        unique: true
    })
    name!: string

    @Column({
        default: true
    })
    state!: boolean

    @OneToMany(() => ProjectEntity, (projects) => projects.typeService)
    projects!: ProjectEntity[]
}