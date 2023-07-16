import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import{Patient} from './entities/patient.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PatientService {
  constructor(@InjectModel( Patient.name) private  PatientModel: Model< Patient>) {}
  async  create(createPatientDto: CreatePatientDto) : Promise<Patient> {
    console.log(createPatientDto);
    
    const createdPatient= new this.PatientModel(createPatientDto);
    return createdPatient.save();
  }

  findAll() {
    return `This action returns all patient`;
  }

  async findOne(id) {
    return await this.PatientModel.findOne({_id:id});
  }

  async update(id: string, updatePatientDto: UpdatePatientDto) {
    await this.PatientModel.findByIdAndUpdate(id, updatePatientDto, {new : true});
  }

  async remove(id: string) {
    await this.PatientModel.findByIdAndDelete(id);
  }
}
