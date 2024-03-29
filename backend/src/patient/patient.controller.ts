import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Inject, forwardRef, Query, DefaultValuePipe, ParseIntPipe, UploadedFiles } from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { FilesInterceptor } from '@nestjs/platform-express';

import { Observable } from 'rxjs';
import { UploadsService } from 'src/uploads/uploads.service';
import { CreateUploadDto } from 'src/uploads/dto/create-upload.dto';
import { storage } from 'src/config/storage.config';
import { PatientInterceptor } from './interceptor/patient.Interceptor';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Patient } from './entities/patient.entity';
import { XX,DB_HOST } from '../config/constants';
import configuration from 'src/config/configuration';


@Controller('patient')
export class PatientController {
  constructor(
    // private readonly uploadService:UploadsService,
    private readonly patientService: PatientService,
  ) { }


  @Post()
  @Post()
  @UseInterceptors(FilesInterceptor('files', 20, storage))
  create(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() createPatientDto: CreatePatientDto, createUploadDto: CreateUploadDto,
    ) {
    return this.patientService.create(files,createPatientDto);
    
  }

  // create(@Body() createPatientDto: CreatePatientDto,createUploadDto:CreateUploadDto,@UploadedFile() file) {
  // // return file;
  // console.log(file);

  // }
  
  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ): Promise<Pagination<Patient>> {

    const serverUrl = <string>process.env.SERVER_HOST+'patient/'
    
    limit = limit > 100 ? 100 : limit;
    return this.patientService.paginate({
      page,
      limit,
      route:serverUrl,
    },
    );
    
  }


  

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: any, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientService.update(id, updatePatientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.patientService.remove(id);
  }
}



