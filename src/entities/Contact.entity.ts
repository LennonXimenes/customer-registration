import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from "typeorm"
import Customer from "./Customer.entity";

@Entity("contacts")
export default class Contact {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 60, unique: true })
    fullName: string;

    @Column({ length: 45, unique: true })
    email: string;

    @Column({ length: 11, unique: true })
    phone: string;

    @CreateDateColumn({ type: "date" })
    createdAt: Date;

    @ManyToOne(() => Customer, (cust) => cust.contacts)
    customer: Customer;
};