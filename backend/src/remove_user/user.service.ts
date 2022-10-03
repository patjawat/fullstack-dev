import { Injectable, NotFoundException,HttpException,HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()

export class UserService {


  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }



  async create(userData: CreateUserDto) {
    try {
    const newUser = await this.userRepository.create(userData);
    await this.userRepository.save(newUser);
    return newUser;
        } catch (error) {
      throw new NotFoundException({
        massage: "Create user Error"
      });
    }
  }

  async getByEmail(email: string) {
    const user = await this.userRepository.findOne({where: {email: email}});
    if (user) {
      return user;
    }
    throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
  }
  // async create(createUserDto: CreateUserDto): Promise<User> {
  //   try {
  //     const user = await this.userRepository.save(createUserDto)
  //     // delete user.password
  //     return user;
  //   } catch (error) {
  //     throw new NotFoundException({
  //       massage: "Create user Error"
  //     });
  //   }
  // }


  findAll() {
    return `This action returns all userxx`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
