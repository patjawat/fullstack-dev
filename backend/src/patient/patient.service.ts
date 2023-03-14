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

  async create(createPatientDto: CreatePatientDto): Promise<Patient> {
    const patient = await this.patientRepository.create(createPatientDto);
    // return await this.patientRepository.save(patient);
    console.log(patient)
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
