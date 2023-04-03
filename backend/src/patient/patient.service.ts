import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  UseInterceptors,
  forwardRef,
} from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Repository } from 'typeorm';
import { Patient } from './entities/patient.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UploadsService } from 'src/uploads/uploads.service';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';


@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    @Inject(forwardRef(() => UploadsService))
    private patientRepository: Repository<Patient>,
    private uploadService: UploadsService,
  ) { }


  async paginate(options: IPaginationOptions): Promise<Pagination<Patient>> {
    return paginate<Patient>(this.patientRepository, options,{relations:['uploads']});
  }

  async create(files, createPatientDto: CreatePatientDto): Promise<Patient> {
    const { fname, lname, gender, birthday, address } = createPatientDto;

    try {
     
      const newPatient = await this.patientRepository.create({
        fname,
        lname,
        gender,
        birthday,
        address,
        // upload,
      });

      const patient = await this.patientRepository.save(newPatient);
      
        await Promise.all(files.map(async file => {
          // console.log(file);
          
          await this.uploadService.create(file, patient);
 
        }))
    
      return patient;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'เกิดข้อผิดพลาด',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }


  async findAll(): Promise<Patient[]> {
    return await this.patientRepository.find({
      order: { created: "DESC" },
      relations: ['uploads'],
    });
  }

  async findOne(id: string): Promise<Patient> {
    try {
      return await this.patientRepository.findOne({ where: { id: id },relations: ['uploads']});
    } catch (error) {
      return null;
    }
  }

  async update(id: any, updatePatientDto: UpdatePatientDto) {
    // return `This action updates a #${id} patient`;
    // return updatePatientDto;
    return await this.patientRepository.update(id,updatePatientDto);
  }

  async remove(id: any) {
    const deletedPatient = await this.patientRepository.delete(id);
    if (!deletedPatient.affected) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
  }
}
