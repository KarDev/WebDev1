import {Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn} from "typeorm";
import { Person } from "./utils/Person";

@Entity('banker')
export class Banker extends Person {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    first_name: string;
        
    @Column()
    last_name: string


    @Column({
        unique: true
    })
    email: string

    @Column({
        unique: true,
        length: 10
    })
    card_number: string

    @Column({
        unique: true,
        length: 10
    })
    employee_number: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

}