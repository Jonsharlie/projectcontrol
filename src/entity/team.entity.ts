import { BaseEntity} from "../config/base.entity"
import { Column, Entity, OneToMany } from "typeorm"
import { StaffTeamEntity } from "./staff.team.entity"

@Entity({name: "team"})
export class TeamEntity extends BaseEntity {
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

    @OneToMany(() => StaffTeamEntity, (teamStaff) => teamStaff.team)
    staffToTeams!: StaffTeamEntity[]
}