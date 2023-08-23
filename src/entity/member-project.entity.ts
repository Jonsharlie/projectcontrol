import { MemberEntity } from "./member.entity";
import { ProjectEntity } from "./project.entity";
import { BaseEntity } from "../config/base.entity"
import { CreateDateColumn, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity({name: "member_project"})
export class MemberProjectEntity extends BaseEntity {
    @CreateDateColumn()
    dateAssignment!: "date"

    @ManyToOne(() => MemberEntity, (member) => member.memberProject)
    @JoinColumn({name: "id_member"})
    member!: MemberEntity

    @ManyToOne(() => ProjectEntity, (project) => project.memberProject)
    @JoinColumn({name: "id_project"})
    project!: ProjectEntity
}