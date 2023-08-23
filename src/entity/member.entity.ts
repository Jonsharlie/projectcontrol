import { BaseEntity } from "../config/base.entity"
import { AreaEntity } from "./area.entity"
import { ChargeEntity } from "./charge.entity"
import { MemberTeamEntity } from "./member-team.entity"
import { MemberProjectEntity } from "./member-project.entity"
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm"

@Entity({name: "member"})
export class MemberEntity extends BaseEntity {
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

    @OneToMany(() => MemberTeamEntity, (memberTeam) => memberTeam.member)
    memberTeam!: MemberTeamEntity

    @OneToMany(() => MemberProjectEntity, (memberProject) => memberProject.member)
    memberProject!: MemberProjectEntity
}