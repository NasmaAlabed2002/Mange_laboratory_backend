import { Module } from '@nestjs/common';
import { AnaPartanalysisService } from './ana_partanalysis.service';
import { AnaPartanalysisController } from './ana_partanalysis.controller';
import {AnaPartanalysis , AnaPartanalysischema} from './entities/ana_partanalysis.entity'
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forFeature([{ name: AnaPartanalysis.name, schema: AnaPartanalysischema }])],
  controllers: [AnaPartanalysisController],
  providers: [AnaPartanalysisService]
})
export class AnaPartanalysisModule {}
