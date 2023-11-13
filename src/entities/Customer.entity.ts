import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm"

@Entity("customers")
export default class Customer {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 60, unique: true })
    fullName: string;

    @Column({ length: 45, unique: true })
    email: string;

    @Column({ length: 120 })
    password: string;

    @Column({ length: 11, unique: true })
    phone: string;

    @CreateDateColumn({ type: "date" })
    createdAt: Date;
}