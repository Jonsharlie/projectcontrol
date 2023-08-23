import { BaseEntity } from "../config/base.entity"
import { Column, Entity } from 'typeorm'

@Entity({name: "area"})
export class AreaEntity extends BaseEntity {
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
}