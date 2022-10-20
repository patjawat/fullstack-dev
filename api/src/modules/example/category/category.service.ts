import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../product/entities/product.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(Category)
    @InjectRepository(Product)
    private categoryRepository:Repository<Category>
    ){}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = await this.categoryRepository.create(createCategoryDto)
    await this.categoryRepository.save(category);
    return await category;
  }

  async findAll():Promise<Category[]> {
    return this.categoryRepository.find({
      relations: ['product'],
      withDeleted: true
    });
    
  }

  async findOne(id:string) {
    return await this.categoryRepository.find({where: {id: id}});
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return await this.categoryRepository.update(id,updateCategoryDto)
  }

  async remove(id: string) {
      return await this.categoryRepository.delete(id)
  }
}
