import { BaseEntity } from '../config/base.entity'
import { CustomerEntity } from './customer.entity'
import { ProjectEntity } from './project.entity'
import { StaffEntity } from './staff.entity'
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne } from "typeorm"

@Entity({name: "project_staff"})
export class ProjectStaffEntity extends BaseEntity {
    @CreateDateColumn()
    registerDate!: Date

    @ManyToOne(() => StaffEntity, (staff) => staff.staffToProjects)
    @JoinColumn({name: "id_staff", "referencedColumnName": "id"})
    staff!: StaffEntity

    @ManyToOne(() => ProjectEntity, (project) => project.staffToProjects)
    @JoinColumn({name: "id_project", "referencedColumnName": "id"})
    project!: ProjectEntity
}