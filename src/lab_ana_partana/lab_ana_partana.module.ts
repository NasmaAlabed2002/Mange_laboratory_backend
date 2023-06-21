import { Module } from '@nestjs/common';
import { LabAnaPartanaService } from './lab_ana_partana.service';
import { LabAnaPartanaController } from './lab_ana_partana.controller';
import {LabAnaPartana , LabAnaPartanachema} from './entities/lab_ana_partana.entity';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forFeature([{ name: LabAnaPartana.name, schema: LabAnaPartanachema }])],
  controllers: [LabAnaPartanaController],
  providers: [LabAnaPartanaService]
})
export class LabAnaPartanaModule {}