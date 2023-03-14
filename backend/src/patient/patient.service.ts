import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Repository } from 'typeorm';
import { Patient } from './entities/patient.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private patientRepository: Repository<Patient>) {
  }

  async create(createPatientDto: CreatePatientDto,file): Promise<Patient> {
    const newPatient  = {
      fname:createPatientDto.fname,
      lname:createPatientDto.lname,
      gender:createPatientDto.gender,
      birthday:createPatientDto.birthday,
      dob:createPatientDto.dob,
      address:createPatientDto.address,
      photo:file
    }
 
    const patient = await this.patientRepository.create(newPatient);
    return await this.patientRepository.save(patient);
    console.log(file)
    return await patient

  }

  async findAll():Promise<Patient[]> {
    return await this.patientRepository.find();
  }

  async findOne(cid: string):Promise<Patient> {
    try {
      return  await this.patientRepository.findOne({where: {cid: cid}});
     } catch (error) {
       return null;
     }
  }

  update(id: number, updatePatientDto: UpdatePatientDto) {
    return `This action updates a #${id} patient`;
  }

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }
}
