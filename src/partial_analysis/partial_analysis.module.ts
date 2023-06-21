import { Module } from '@nestjs/common';
import { PartialAnalysisService } from './partial_analysis.service';
import { PartialAnalysisController } from './partial_analysis.controller';
import {PartialAnalysis, PartialAnalysischema} from './entities/partial_analysis.entity'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: PartialAnalysis.name, schema: PartialAnalysischema }])],
  controllers: [PartialAnalysisController],
  providers: [PartialAnalysisService]
})
export class PartialAnalysisModule {}
