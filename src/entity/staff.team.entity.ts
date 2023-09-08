import { TeamEntity } from './team.entity'
import { StaffEntity } from './staff.entity'
import { BaseEntity } from '../config/base.entity'
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne } from "typeorm"

@Entity({name: "staff_team"})
export class StaffTeamEntity extends BaseEntity {
    @CreateDateColumn()
    registrationDate!: Date

    @Column({
        default: true
    })
    leader!: boolean

    @ManyToOne(() => StaffEntity, (staff) => staff.staffToTeams)
    @JoinColumn({name: "id_staff", "referencedColumnName": "id"})
    staff!: StaffEntity

    @ManyToOne(() => TeamEntity, (team) => team.staffToTeams)
    @JoinColumn({name: "id_team", "referencedColumnName": "id"})
    team!: TeamEntity
}