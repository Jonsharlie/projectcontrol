import { BaseEntity} from "../config/base.entity"
import { MemberTeamEntity } from "./member-team.entity"
import { Column, Entity, OneToMany } from "typeorm"

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

    @OneToMany(() => MemberTeamEntity, (memberTeam) => memberTeam.team)
    memberTeam!: MemberTeamEntity
}