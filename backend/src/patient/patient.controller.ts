import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Inject, forwardRef } from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { FileInterceptor } from '@nestjs/platform-express';

import { Observable } from 'rxjs';
import { UploadsService } from 'src/uploads/uploads.service';
import { CreateUploadDto } from 'src/uploads/dto/create-upload.dto';
import { storage } from 'src/config/storage.config';
import { PatientInterceptor } from './interceptor/patient.Interceptor';
import { ApiResponse } from '@nestjs/swagger';



@Controller('patient')
export class PatientController {
  constructor(
    // private readonly uploadService:UploadsService,
    private readonly patientService: PatientService,
  ) { }


  @Post()
  @UseInterceptors(FileInterceptor('file', storage))
  create(@Body() createPatientDto: CreatePatientDto, createUploadDto: CreateUploadDto, @UploadedFile() file) {
    return this.patientService.create(createPatientDto, file);

  }
  // create(@Body() createPatientDto: CreatePatientDto,createUploadDto:CreateUploadDto,@UploadedFile() file) {
  // // return file;
  // console.log(file);

  // }
  
  @Get()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  // @UseInterceptors(PatientInterceptor)
  findAll() {
    return this.patientService.findAll()


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



