import { BaseEntity } from "../config/base.entity"
import { Column, Entity, OneToMany } from "typeorm"
import { UserEntity } from "./user.entity"

@Entity({name: "userprofile"})
export class UserProfileEntity extends BaseEntity {
    @Column({
        type: "varchar",
        length: 30,
        unique: true
    })
    name!: string

    @Column({
        default: true
    })
    state!: boolean

    @OneToMany(() => UserEntity, (users) => users.userprofile)
    users!: UserEntity[]
}