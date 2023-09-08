import { BaseEntity } from "../config/base.entity"
import { UserProfileEntity } from "./userprofile.entity"
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm"

@Entity({name: "user"})
export class UserEntity extends BaseEntity {

    @ManyToOne(() => UserProfileEntity, (userprofile) => userprofile.users)
    @JoinColumn({name: "id_userprofile", "referencedColumnName": "id"})
    userprofile!: UserProfileEntity

    @Column({
        type: "varchar",
        length: 40,
        unique: true
    })
    login!: string

    @Column({
        type: "varchar",
        length: 100,
        unique: true
    })
    password!: string

    @Column({
        type: "varchar",
        length: 100
    })
    remeber_token!: string

    @Column({
        default: true
    })
    state!: boolean
}