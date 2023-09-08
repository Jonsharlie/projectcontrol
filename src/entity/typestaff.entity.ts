import { BaseEntity } from "../config/base.entity"
import { Column, Entity, OneToMany } from "typeorm"
import { StaffEntity } from "./staff.entity"

@Entity({name: "typestaff"})
export class TypeStaffEntity extends BaseEntity {
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

    @OneToMany(() => StaffEntity, (staff) => staff.typeStaff)
    staffs!: StaffEntity[]
}