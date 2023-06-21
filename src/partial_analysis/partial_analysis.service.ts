import { Injectable } from '@nestjs/common';
import { CreatePartialAnalysisDto } from './dto/create-partial_analysis.dto';
import { UpdatePartialAnalysisDto } from './dto/update-partial_analysis.dto';
import { PartialAnalysis} from './entities/partial_analysis.entity'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class PartialAnalysisService {
  constructor(@InjectModel(PartialAnalysis.name) private PartialAnalysisModel: Model<PartialAnalysis>) {}
  create(createPartialAnalysisDto: CreatePartialAnalysisDto) :Promise<PartialAnalysis> {
    console.log(createPartialAnalysisDto);
    
    const createdPartialAnalysis = new this.PartialAnalysisModel(createPartialAnalysisDto);
    return createdPartialAnalysis.save();
  }

  findAll() {
    return `This action returns all partialAnalysis`;
  }

  findOne(id: number) {
    return `This action returns a #${id} partialAnalysis`;
  }

  update(id: number, updatePartialAnalysisDto: UpdatePartialAnalysisDto) {
    return `This action updates a #${id} partialAnalysis`;
  }

  remove(id: number) {
    return `This action removes a #${id} partialAnalysis`;
  }
}
