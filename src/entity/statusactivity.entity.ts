import { BaseEntity } from "../config/base.entity"
import { Column, Entity, OneToMany } from "typeorm"
import { ActivityEntity } from "./activity.entity"

@Entity({name: "statusActivity"})
export class StatusActivityEntity extends BaseEntity {
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

    @OneToMany(() => ActivityEntity, (activity) => activity.statusActivity)
    activities!: ActivityEntity[]
}