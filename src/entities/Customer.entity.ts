import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, BeforeInsert, BeforeUpdate } from "typeorm"
import Contact from "./Contact.entity";
import { getRounds, hashSync } from "bcryptjs";

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

    @OneToMany(() => Contact, (cont) => cont.customer)
    contacts: Array<Customer>;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        const hashRounds: number = getRounds(this.password);

        if (!hashRounds) {
            this.password = hashSync(this.password, 10);
        };
    };
};