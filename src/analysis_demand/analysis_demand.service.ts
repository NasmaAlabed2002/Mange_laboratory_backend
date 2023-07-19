import { Injectable } from '@nestjs/common';
import { CreateAnalysisDemandDto } from './dto/create-analysis_demand.dto';
import { UpdateAnalysisDemandDto } from './dto/update-analysis_demand.dto';
import {AnalysisDemand} from './entities/analysis_demand.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AnalysisDemandService {
  constructor(@InjectModel(AnalysisDemand.name) private AnalysisDemandModel: Model<AnalysisDemand>) {}
 async create(createAnalysisDemandDto: CreateAnalysisDemandDto) :  Promise<AnalysisDemand> {
    console.log(createAnalysisDemandDto);
    const createdAnalysisDemand = new this.AnalysisDemandModel(createAnalysisDemandDto);
    return createdAnalysisDemand.save(); 
  }

  async findAll() {
    return await this.AnalysisDemandModel.find();
  }

  async findOne(id) {
    return await this.AnalysisDemandModel.findOne({_id:id});
  }

 async  update(id: string, updateAnalysisDemandDto: UpdateAnalysisDemandDto) {
  await this.AnalysisDemandModel.findByIdAndUpdate(id, updateAnalysisDemandDto, {new : true});
  }

 async remove(id: string) {
await this.AnalysisDemandModel.findByIdAndDelete(id);
  }
}