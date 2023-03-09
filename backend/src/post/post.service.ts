import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { Users } from 'src/users/users.entity';

@Injectable()
export class PostService {
  constructor(
   @InjectRepository(Post)
   private postRepository: Repository<Post>
  ){

  }
  create(createPostDto: CreatePostDto,user:Users): Promise<Post> {

    const {
      title,
      content,
  } = createPostDto

  const post = this.postRepository.create({
      title,
      content,
      user,
  })

  return this.postRepository.save(post);
  // try {
  //     await this.taskRepository.save(task)
  //     return task
  // } catch(e) {
  //     throw new ConflictException({
  //         message: ['Something\s wrong I can feel it.']
  //     })
  // }

  // try {
  //   const post = this.postRepository.create(createPostDto);
  //   return this.postRepository.save(post,user);
  // } catch (error) {
  //   throw new Error(error)
    
  // }
    

  }

  findAll() {
    return `This action returns all post`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
