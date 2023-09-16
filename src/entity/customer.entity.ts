import { BaseEntity } from "../config/base.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm"
import { ProjectEntity } from "./project.entity"
import { TypeDocumentEntity } from "./typedocument.entity"

@Entity({name: "customer"})
export class CustomerEntity extends BaseEntity {
    @Column({
        type: "varchar",
        length: 13
    })
    documentNumber!: string

    @Column({
        type: "varchar",
        length: 60
    })
    name!: string

    @Column({
        default: true
    })
    state!: boolean

    @OneToMany(() => ProjectEntity, (project) => project.customer)
    projects!: ProjectEntity[]

    @ManyToOne(() => TypeDocumentEntity, (typeDocument) => typeDocument.customers)
    @JoinColumn({name: "id_typedocument", "referencedColumnName": "id"})
    typeDocument!: TypeDocumentEntity
}