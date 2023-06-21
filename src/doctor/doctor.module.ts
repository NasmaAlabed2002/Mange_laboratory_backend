import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { DoctorController } from './doctor.controller';
import {Doctor , Doctorchema } from './entities/doctor.entity';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forFeature([{ name: Doctor.name, schema: Doctorchema }])],
  controllers: [DoctorController],
  providers: [DoctorService]
})
export class DoctorModule {}
