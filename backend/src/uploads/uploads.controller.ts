import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { UploadsService } from './uploads.service';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import path, { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { storage } from 'src/config/storage.config';

export const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(new Error('Only image files are allowed!'), false);
  }
  callback(null, true);
};

export const editFileName = (req, file, callback) => {
  const name = file.originalname.split('.')[0];
  // const fileExtName = extname(file.originalname);

  const uniqueSuffix =
    Date.now() + '-' + Math.round(Math.random() * 1e9);
  const ext = extname(file.originalname);
  const filename = `${uniqueSuffix}${ext}`;
  callback(null, filename);

  // const randomName = Array(4)
  //   .fill(null)
  //   .map(() => Math.round(Math.random() * 16).toString(16))
  //   .join('');
  // callback(null, `${name}-${randomName}${fileExtName}`);
};



@Controller('uploads')
export class UploadsController {
  constructor(private readonly uploadsService: UploadsService) { }


  @Post('patient')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public/files',
        filename: (req, file, callback) => {
        const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${uniqueSuffix}${ext}`;
          console.log(filename);
          callback(null, filename);
        },
      }),
    }),
  )
  // uploadFile(@UploadedFile() file: Express.Multer.File) {
  //   // console.log(file);
  // }



  @Post()
  @UseInterceptors(FilesInterceptor('files', 20, storage))
  create(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() createUploadDto: CreateUploadDto
    ) {
    return this.uploadsService.create(files,null);
    
  }

  @Get()
  findAll() {
    return this.uploadsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.uploadsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUploadDto: UpdateUploadDto) {
    return this.uploadsService.update(+id, updateUploadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uploadsService.remove(+id);
  }
}
