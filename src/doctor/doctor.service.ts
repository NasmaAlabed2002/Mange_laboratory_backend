import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import {Doctor  } from './entities/doctor.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class DoctorService {
  constructor(@InjectModel(Doctor.name) private DoctorModel: Model<Doctor>) {}
  async  create(createDoctorDto: CreateDoctorDto): Promise<Doctor> {
    console.log(createDoctorDto);
    
    const createdDoctor = new this.DoctorModel(createDoctorDto);
    return createdDoctor.save();
  }

  findAll() {
    return `This action returns all doctor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} doctor`;
  }

  async update(id: string, updateDoctorDto: UpdateDoctorDto) {
    await this.DoctorModel.findByIdAndUpdate(id, updateDoctorDto, {new : true});
  }

  async remove(id: string) {
    await this.DoctorModel.findByIdAndDelete(id);
  }
}
