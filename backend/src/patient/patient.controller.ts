import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { v4 as uuidv4 } from 'uuid';
import { diskStorage } from 'multer';
import path, { extname } from 'path';
import { Observable } from 'rxjs';


export const storage = {
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
  })

}


@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}


  @Post()
  @UseInterceptors(FileInterceptor('file', storage))
  create(@Body() createPatientDto: CreatePatientDto,@UploadedFile() file,) {
    
    return this.patientService.create(createPatientDto,file.filename);
  }

  @Get()
  findAll() {
    return this.patientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientService.update(+id, updatePatientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientService.remove(+id);
  }
}
