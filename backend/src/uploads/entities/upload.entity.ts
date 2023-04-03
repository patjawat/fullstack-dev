import { Patient } from "src/patient/entities/patient.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn,BeforeRemove, BeforeInsert,AfterRemove } from "typeorm";
import * as fs from 'fs';
@Entity('uploads')
export class Upload {

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({ nullable: true, default: null})
    ref:string

    @Column({ nullable: true, default: null})
    originalname:string

    @Column({ nullable: true, default: null})
    filename:string

    @Column({ nullable: true, default: null})
    path:string

    @Column({ nullable: true, default: null})
    size:number

    @Column({ nullable: true, default: null})
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

    @BeforeInsert()
    insertStatus() {
    //    console.log(this.filename);
       
    }

    @AfterRemove()
    removeFile() {
       console.log(this.filename);
    //    fs.unlink('public/files/'+this.filename, callback)
       fs.unlink('public/files/'+this.filename, function (err) {
        if (err) console.error(err);
    });
       
    }


    

    @ManyToOne(() => Patient, (patient) => patient.uploads,{
        cascade: true,
        onDelete: 'CASCADE',
      })
    patient: Patient

}
