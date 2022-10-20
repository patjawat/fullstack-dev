import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../../product/entities/product.entity";

@Entity()
export class Category {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;
    
    @OneToMany(() => Product, (product) => product.category)
    product: Product[]

}
