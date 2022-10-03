import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn } from 'typeorm';
// import { Roles } from 'src/auth/Roles';

@Entity()
export class Users {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true })
    username: string

    @Column()
    password: string

    @CreateDateColumn()
    created: Date

    @UpdateDateColumn()
    updated: Date
    // @Column({ default: Roles.USER })
    // role: number;
}
