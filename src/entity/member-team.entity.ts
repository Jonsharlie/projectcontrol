import { MemberEntity } from "./member.entity"
import { TeamEntity } from "./team.entity"
import { BaseEntity } from "../config/base.entity"
import { CreateDateColumn, Entity, JoinColumn, ManyToOne } from "typeorm"

@Entity({name: "member_team"})
export class MemberTeamEntity extends BaseEntity {
    @CreateDateColumn()
    dateAssignment!: "date"

    @ManyToOne(() => MemberEntity, (member) => member.memberTeam)
    @JoinColumn({name: "member_id"})
    member!: MemberEntity

    @ManyToOne(() => TeamEntity, (team) => team.memberTeam)
    @JoinColumn({name: "team_id"})
    team!: TeamEntity
}