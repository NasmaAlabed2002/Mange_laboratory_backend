import { Injectable } from '@nestjs/common';
import { CreateMedicalReferralDto } from './dto/create-medical_referral.dto';
import { UpdateMedicalReferralDto } from './dto/update-medical_referral.dto';
import { MedicalReferral} from './entities/medical_referral.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { promises } from 'dns';
@Injectable()
export class MedicalReferralService {
  constructor(@InjectModel(MedicalReferral.name) private MedicalReferralModel: Model<MedicalReferral>) {}
  async create(createMedicalReferralDto: CreateMedicalReferralDto) :  Promise<MedicalReferral> {
    console.log(createMedicalReferralDto);
    
    const createdMedicalReferral= new this.MedicalReferralModel(createMedicalReferralDto);
    return createdMedicalReferral.save();
  }

  async findAll() {
    return await this.MedicalReferralModel.find();
  }

  async findOne(id) {
    return await this.MedicalReferralModel.findOne({_id:id});
  }

  async update(id: string, updateMedicalReferralDto: UpdateMedicalReferralDto) {
    await this.MedicalReferralModel.findByIdAndUpdate(id, updateMedicalReferralDto, {new : true});
  }

  async remove(id: string) {
    await this.MedicalReferralModel.findByIdAndDelete(id);
  }
}
