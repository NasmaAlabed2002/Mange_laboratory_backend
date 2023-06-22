import { Injectable } from '@nestjs/common';
import { CreateLabAnaPartanaDto } from './dto/create-lab_ana_partana.dto';
import { UpdateLabAnaPartanaDto } from './dto/update-lab_ana_partana.dto';
import{LabAnaPartana} from './entities/lab_ana_partana.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class LabAnaPartanaService {
  constructor(@InjectModel(LabAnaPartana.name) private LabAnaPartanaModel: Model<LabAnaPartana>) {}
  async create(createLabAnaPartanaDto: CreateLabAnaPartanaDto): Promise<LabAnaPartana> {
    console.log(createLabAnaPartanaDto);
    const createdLabAnaPartana = new this.LabAnaPartanaModel(createLabAnaPartanaDto);
    return createdLabAnaPartana.save();
  }

  findAll() {
    return `This action returns all labAnaPartana`;
  }

  findOne(id: number) {
    return `This action returns a #${id} labAnaPartana`;
  }

 async update(id: string, updateLabAnaPartanaDto: UpdateLabAnaPartanaDto) {
  await this.LabAnaPartanaModel.findByIdAndUpdate(id, updateLabAnaPartanaDto, {new : true});
  }

 async remove(id: string) {
  await this.LabAnaPartanaModel.findByIdAndDelete(id);
  }
}

