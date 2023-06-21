import { Injectable } from '@nestjs/common';
import { CreateLaboratoryDto } from './dto/create-laboratory.dto';
import { UpdateLaboratoryDto } from './dto/update-laboratory.dto';
import { Laboratory } from './entities/laboratory.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class LaboratoryService {
  [x: string]: any;
  constructor(@InjectModel(Laboratory.name) private LaboratoryModel: Model<Laboratory>) {}
  async create(createLaboratoryDto: CreateLaboratoryDto) : Promise<Laboratory> {
    console.log(createLaboratoryDto);
    
    const createdLaboratory = new this.LaboratoryModel(createLaboratoryDto);
    return createdLaboratory.save();
  }

  findAll() {
    return `This action returns all laboratory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} laboratory`;
  }

 async update(id: string, updateLaboratoryDto: UpdateLaboratoryDto) {
    await this.LaboratoryModel.findByIdAndUpdate(id, updateLaboratoryDto, {new : true});
  }

 async remove(id: string) {
  await this.LaboratoryModel.findByIdAndDelete(id);
  }
}

