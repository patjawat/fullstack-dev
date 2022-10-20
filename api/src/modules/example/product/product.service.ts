import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../category/entities/category.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ){}
  async create(createProductDto: CreateProductDto) {

    const newProduct = await {
      ...createProductDto,
      category: createProductDto.category_id,
    };

    const product = await this.productRepository.create(newProduct)
    return await this.productRepository.save(product);
    
  }

  async findAll():Promise<Product[]> {
    // return `This action returns all product`;
    return this.productRepository.find({ relations: ['category'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
