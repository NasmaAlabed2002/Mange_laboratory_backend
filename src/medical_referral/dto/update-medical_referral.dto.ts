import { PartialType } from '@nestjs/swagger';
import { CreateMedicalReferralDto } from './create-medical_referral.dto';

export class UpdateMedicalReferralDto extends PartialType(CreateMedicalReferralDto) {}
