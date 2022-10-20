import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../../category/entities/category.entity";

@Entity()
export class Product {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;
  
    @Column()
    description: string;
  
    @Column()
    price: string;

    // @ManyToOne(() => Category, (category) => category.product)
    // category: Category
    // @Column({ type: "int", nullable: true })
    //  categoryId: number;


    // @ManyToOne(() => Category, category => category.product)
    // @JoinColumn({name:'category_id'})
    // category: Category;

    @ManyToOne(() => Category, category => category.product)
    category: Category;
}
