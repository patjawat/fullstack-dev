import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

enum Gender {
    Male,
    Female,
    Other
  }
  
@Entity()
export class Patient {

    @PrimaryGeneratedColumn()
    hn:string

    @Column({ comment: 'ชื่อ',nullable: true, default: null})
    fname:string

    @Column({comment: 'นามสกุล', nullable: true, default: null})
    lname:string

    @Column({ comment: 'เพศ',nullable: true, default: null})
    gender: string

    @Column({comment: 'วันเกิด', nullable: true, default: null})
    birthday:Date;

    @Column({comment: 'กรุ๊ปเลือด', nullable: true, default: null})
    dob:string

    @Column({ comment: 'ที่อยู่',nullable: true, default: null})
    address:string

    @Column({ comment: 'โทรศัพท์', nullable: true, default: null})
    phone:string

    @Column({ comment: 'บัตรประชาชน',nullable: true, default: null})
    cid:string

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
