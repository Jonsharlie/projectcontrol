import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
export abstract class BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string

    @CreateDateColumn({
        name: "created_at",
        type: "timestamp"
    })
    created_at!: Date

    @DeleteDateColumn({
        name: "deleted_at",
        type: "timestamp",
        nullable: true
    })
    deleted_at!: Date

    @UpdateDateColumn({
        name: "updated_at",
        type: "timestamp",
        nullable: true
    })
    updated_at!: Date
}