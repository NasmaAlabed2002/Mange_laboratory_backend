import { Injectable } from '@nestjs/common';
import { CreateAnaPartanalysisDto } from './dto/create-ana_partanalysis.dto';
import { UpdateAnaPartanalysisDto } from './dto/update-ana_partanalysis.dto';
import { AnaPartanalysis } from './entities/ana_partanalysis.entity'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class AnaPartanalysisService {
  constructor(@InjectModel(AnaPartanalysis.name) private AnaPartanalysisModel: Model<AnaPartanalysis>) {}
  async create(createAnaPartanalysisDto: CreateAnaPartanalysisDto) : Promise<AnaPartanalysis> {
    console.log(createAnaPartanalysisDto);
    
    const createdAnaPartanalysis = new this.AnaPartanalysisModel(createAnaPartanalysisDto);
    return createdAnaPartanalysis.save();
  }

  async findAll() {
    return await this.AnaPartanalysisModel.find();
  }

  async findOne(id) {
    return await this.AnaPartanalysisModel.findOne({_id:id});
  }
 
  async update(id: string, updateAnaPartanalysisDto: UpdateAnaPartanalysisDto) {
  await this.AnaPartanalysisModel.findByIdAndUpdate(id, updateAnaPartanalysisDto, {new : true});
  }


  async remove(id: string) {
     await this.AnaPartanalysisModel.findByIdAndDelete(id);
  }
}
