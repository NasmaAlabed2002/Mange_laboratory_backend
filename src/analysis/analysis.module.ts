import { Module } from '@nestjs/common';
import { AnalysisService } from './analysis.service';
import { AnalysisController } from './analysis.controller';
import { Analysis, Analysischema } from './entities/analysis.entity';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forFeature([{ name: Analysis.name, schema: Analysischema }])],
  controllers: [AnalysisController],
  providers: [AnalysisService]
})
export class AnalysisModule {}
