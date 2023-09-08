import { BaseEntity } from "../config/base.entity"
import { AreaEntity } from "./area.entity"
import { ChargeEntity } from "./charge.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm"
import { TypeStaffEntity } from "./typestaff.entity"
import { StaffTeamEntity } from "./staff.team.entity"
import { ProjectStaffEntity } from "./project.staff.entity"
import { ActivityEntity } from "./activity.entity"

@Entity({name: "staff"})
export class StaffEntity extends BaseEntity {
    @OneToOne(() => AreaEntity, {
        eager: true,
        cascade: true
    })
    @JoinColumn({name: "id_area"})
    area!: AreaEntity

    @OneToOne(() => ChargeEntity, {
        eager: true,
        cascade: true
    })
    @JoinColumn({name: "id_charge"})
    charge!: ChargeEntity

    @Column({
        type: "varchar",
        length: 50
    })
    name!: string

    @Column({
        type: "varchar",
        length: 50
    })
    firstName!: string

    @Column({
        type: "varchar",
        length: 50
    })
    lastName!: string

    @Column({
        type: "varchar",
        length: 50
    })
    email!: string

    @Column({
        type: "varchar",
        length: 15
    })
    phone!: string

    @Column({
        default: true
    })
    state!: boolean

    @ManyToOne(() => TypeStaffEntity, (typeStaff) => typeStaff.staffs)
    @JoinColumn({name: "id_typestaff", "referencedColumnName": "id"})
    typeStaff!: TypeStaffEntity

    @OneToMany(() => StaffTeamEntity, (staffTeam) => staffTeam.staff)
    staffToTeams!: StaffTeamEntity[]

    @OneToMany(() => ProjectStaffEntity, (projectStaff) => projectStaff.staff)
    staffToProjects!: ProjectStaffEntity[]

    @OneToMany(() => ActivityEntity, (activity) => activity.staff)
    activities!: ActivityEntity[]
}