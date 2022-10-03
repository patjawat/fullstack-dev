import { Entity, Column, PrimaryGeneratedColumn,UpdateDateColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  enailid: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  @UpdateDateColumn()
  updateAt: Date;


  @BeforeInsert()
  async hashPassword() {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }

  async validatePassword(password: string): Promise<boolean> {
    return await bcrypt.compareSync(password, this.password);
  }

  // constructor(userId: string, name: string, pass: string) {
  //   this.userId = userId;
  //   this.name = name;
  //   this.password = pass;
  // }

  // async validatePassword(password: string): Promise<boolean>{
  //   return await bcrypt.compare(password, this.password);
  // }
}