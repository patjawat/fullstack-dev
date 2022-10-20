import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Employee {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true })
    username: string
}
