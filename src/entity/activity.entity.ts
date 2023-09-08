import { BaseEntity } from "../config/base.entity"
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne } from "typeorm"
import { RequirementEntity } from "./requirement.entity"
import { StaffEntity } from "./staff.entity"

@Entity({name: "activity"})
export class ActivityEntity extends BaseEntity {
    @Column({
        type: "varchar",
        length: 100,
        unique: true
    })
    name!: string

    @CreateDateColumn()
    startDate!: Date

    @CreateDateColumn()
    endDate!: Date

    @Column({
        default: true
    })
    state!: boolean

    @ManyToOne(() => RequirementEntity, (requirement) => requirement.activities)
    @JoinColumn({name: "id_requirement", "referencedColumnName": "id"})
    requirement!: RequirementEntity

    @ManyToOne(() => StaffEntity, (staff) => staff.activities)
    @JoinColumn({name: "id_staff", "referencedColumnName": "id"})
    staff!: StaffEntity
} 