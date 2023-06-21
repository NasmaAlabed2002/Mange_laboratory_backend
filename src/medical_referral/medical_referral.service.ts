import { Injectable } from '@nestjs/common';
import { CreateMedicalReferralDto } from './dto/create-medical_referral.dto';
import { UpdateMedicalReferralDto } from './dto/update-medical_referral.dto';
import {MedicalReferral} from './entities/medical_referral.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class MedicalReferralService {
  constructor(@InjectModel(MedicalReferral.name) private MedicalReferralModel: Model<MedicalReferral>) {}
  create(createMedicalReferralDto: CreateMedicalReferralDto) {
    console.log(createMedicalReferralDto);
    
    const createdMedicalReferral= new this.MedicalReferralModel(createMedicalReferralDto);
    return createdMedicalReferral.save();
  }

  findAll() {
    return `This action returns all medicalReferral`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicalReferral`;
  }

  async update(id: string, updateMedicalReferralDto: UpdateMedicalReferralDto) {
    await this.MedicalReferralModel.findByIdAndUpdate(id, updateMedicalReferralDto, {new : true});
  }

  async remove(id: string) {
    await this.MedicalReferralModel.findByIdAndDelete(id);
  }
}
