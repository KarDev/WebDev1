import "reflect-metadata"
import { DataSource } from "typeorm"
// import { Photo } from "./entity/Photo"
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
import { Client } from "./entities/Client"
import { Banker } from "./entities/Banker"

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    name: string

    @Column("text")
    description: string

    @Column()
    filename: string

    @Column()
    views: number

    @Column()
    isPublished: boolean
}

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "photo",
    entities: [Photo, Client, Banker],
    synchronize: true,
    logging: false,
})

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        console.log("DB Connected.")
    })
    .catch((error) => console.log(error))




// import {  createConnection  } from "typeorm"



// const main = async () => {
//     try {
//         await createConnection({
//             type: "postgres",
//             host: "localhost",
//             port: 5432,
//             username: 'abc',
//             password: '123',
//             database: 'typeorm'
//         })
//         console.log('Connected to Postgres')
//     } catch (error) {
//         console.error(error);
//     }
// }