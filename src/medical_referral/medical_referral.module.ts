import { Module } from '@nestjs/common';
import { MedicalReferralService } from './medical_referral.service';
import { MedicalReferralController } from './medical_referral.controller';
import{MedicalReferral , MedicalReferralchema} from './entities/medical_referral.entity';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forFeature([{ name: MedicalReferral.name, schema: MedicalReferralchema }])],
  controllers: [MedicalReferralController],
  providers: [MedicalReferralService]
})
export class MedicalReferralModule {}
