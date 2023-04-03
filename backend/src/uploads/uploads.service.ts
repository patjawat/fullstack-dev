import { Injectable } from '@nestjs/common';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { Upload } from './entities/upload.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UploadsService {

  constructor(
    @InjectRepository(Upload)
    private uploadRepository:Repository<Upload>
  ){

  }
  async create(files,patient):Promise<Upload> {
    const fileUpload = {
      filename:files?.filename,
      originalname: files?.originalname,
      size: files?.size,
      type: files?.mimetype,
      path: files?.path,
      patient
    }
    
    const upload = this.uploadRepository.create(fileUpload);
    const result =  await this.uploadRepository.save(upload);
    // console.log(result);
    return result;
    
    // return await files
  }

  findAll() {
    return `This action returns all uploads`;
  }

  findOne(id: number) {
    return `This action returns a #${id} upload`;
  }

  update(id: number, updateUploadDto: UpdateUploadDto) {
    return `This action updates a #${id} upload`;
  }

  remove(id: number) {
    return `This action removes a #${id} upload`;
  }
}
