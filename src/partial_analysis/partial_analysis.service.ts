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

 
  async findOne(id) {
    // console.log(id);
      return await this.PartialAnalysisModel.findOne({_id:id});
   }
  
   async update(id: string, updatePartialAnalysisDto: UpdatePartialAnalysisDto) {
      await this.PartialAnalysisModel.findByIdAndUpdate(id, updatePartialAnalysisDto, {new : true});
    }
  
   async remove(id: string) {
    await this.PartialAnalysisModel.findByIdAndDelete(id);
    }
}
