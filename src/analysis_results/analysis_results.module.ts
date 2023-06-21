import { Module } from '@nestjs/common';
import { AnalysisResultsService } from './analysis_results.service';
import { AnalysisResultsController } from './analysis_results.controller';
import { AnalysisResult , AnalysisResultchema  } from './entities/analysis_result.entity';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forFeature([{ name: AnalysisResult.name, schema: AnalysisResultchema }])],
  controllers: [AnalysisResultsController],
  providers: [AnalysisResultsService]
})
export class AnalysisResultsModule {}
