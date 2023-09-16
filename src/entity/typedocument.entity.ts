import { BaseEntity } from '../config/base.entity'
import { Column, Entity, OneToMany } from "typeorm"
import { CustomerEntity } from './customer.entity'
import { StaffEntity } from './staff.entity'

@Entity({name: 'typedocument'})
export class TypeDocumentEntity extends BaseEntity {
    @Column({
        type: "varchar",
        length: 50,
        unique: true
    })
    name!: string

    @Column({
        type: "varchar",
        length: 12,
        unique: true
    })
    abbreviation!: string

    @Column({
        type: "int"
    })
    length!: number

    @Column({
        default: false
    })
    person!: boolean

    @Column({
        default: false
    })
    company!: boolean

    @Column({
        default: true
    })
    state!: boolean

    @OneToMany(() => CustomerEntity, (customer) => customer.typeDocument)
    customers!: CustomerEntity[]

    @OneToMany(() => StaffEntity, (staff) => staff.typeDocument)
    staffs!: StaffEntity[]
}