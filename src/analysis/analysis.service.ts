import { Injectable } from '@nestjs/common';
import { CreateAnalysisDto } from './dto/create-analysis.dto';
import { UpdateAnalysisDto } from './dto/update-analysis.dto';
import { Analysis } from './entities/analysis.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AnalysisService {
   constructor(@InjectModel(Analysis.name) private AnalysisModel: Model<Analysis>) {}
   async create(createAnalysisDto: CreateAnalysisDto):Promise<Analysis> {
    console.log(createAnalysisDto);
    const createdAnalysis = new this.AnalysisModel(createAnalysisDto);
    return createdAnalysis.save(); 
  }

  async findAll() {
    return await this.AnalysisModel.find();
  }

  async findOne(id) {
    return await this.AnalysisModel.findOne({_id:id});
  }

  async update(id: string, updateAnalysisDto: UpdateAnalysisDto) {
    await this.AnalysisModel.findByIdAndUpdate(id, updateAnalysisDto, {new : true});
  }

  async remove(id: string) {
   await this.AnalysisModel.findByIdAndDelete(id);
  }
}
