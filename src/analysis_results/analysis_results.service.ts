import { Injectable } from '@nestjs/common';
import { CreateAnalysisResultDto } from './dto/create-analysis_result.dto';
import { UpdateAnalysisResultDto } from './dto/update-analysis_result.dto';
import { AnalysisResult } from './entities/analysis_result.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AnalysisResultsService {
  constructor(@InjectModel(AnalysisResult.name) private AnalysisResultModel: Model<AnalysisResult>) {}
  async create(createAnalysisResultDto: CreateAnalysisResultDto): Promise<AnalysisResult> {
    console.log(createAnalysisResultDto);
    const createdAnalysisResult = new this.AnalysisResultModel(createAnalysisResultDto);
    return createdAnalysisResult.save();
  }

  findAll() {
    return `This action returns all analysisResults`;
  }

  findOne(id: number) {
    return `This action returns a #${id} analysisResult`;
  }

 async update(id: string, updateAnalysisResultDto: UpdateAnalysisResultDto) {
  await this.AnalysisResultModel.findByIdAndUpdate(id, updateAnalysisResultDto, {new : true});
  }

  async remove(id: string) {
  await this.AnalysisResultModel.findByIdAndDelete(id);
  }
}