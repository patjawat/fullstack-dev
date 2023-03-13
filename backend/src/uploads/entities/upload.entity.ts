import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('uploads')
export class Upload {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    rail_name:string

    @Column()
    url:string

    @Column()
    size:number

    @Column()
    type:string

    @Column({ nullable: true, default: null})
    status:string

    @CreateDateColumn()
    created!: Date;
  
    @UpdateDateColumn()
    updated!: Date;
  
    @DeleteDateColumn()
    deletedAt?: Date;
    
    @Column({ nullable: true, default: null})
    createdBy:string

    @Column({ nullable: true, default: null})
    updatedBy:string


}
