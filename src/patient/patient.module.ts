import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import {Patient   , Patientchema  } from './entities/patient.entity';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forFeature([{ name: Patient.name, schema: Patientchema }])],
  controllers: [PatientController],
  providers: [PatientService]
})
export class PatientModule {}
