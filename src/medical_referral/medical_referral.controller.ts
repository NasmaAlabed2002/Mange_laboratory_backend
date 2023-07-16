import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicalReferralService } from './medical_referral.service';
import { CreateMedicalReferralDto } from './dto/create-medical_referral.dto';
import { UpdateMedicalReferralDto } from './dto/update-medical_referral.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('test')
@Controller('medical-referral')
export class MedicalReferralController {
  constructor(private readonly medicalReferralService: MedicalReferralService) {}

  @Post()
  create(@Body() createMedicalReferralDto: CreateMedicalReferralDto) {
    return this.medicalReferralService.create(createMedicalReferralDto);
  }

  @Get()
  findAll() {
    return this.medicalReferralService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalReferralService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicalReferralDto: UpdateMedicalReferralDto) {
    return this.medicalReferralService.update(id, updateMedicalReferralDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalReferralService.remove(id);
  }
}
