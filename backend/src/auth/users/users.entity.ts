import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn } from 'typeorm';
import { UserRole } from './Roles';

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

    @Column({ type: "enum", enum: UserRole, default: UserRole.USER })
    role: UserRole;

}
