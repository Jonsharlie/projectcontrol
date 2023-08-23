import { BaseEntity } from "../config/base.entity"
import { Column, Entity } from 'typeorm'

@Entity({name: "charge"})
export class ChargeEntity extends BaseEntity {
    @Column({
        type: "varchar",
        length: 40,
        unique: true
    })
    name!: string

    @Column({
        default: true
    })
    state!: boolean
}