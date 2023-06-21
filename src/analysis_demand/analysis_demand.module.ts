import { Module } from '@nestjs/common';
import { AnalysisDemandService } from './analysis_demand.service';
import { AnalysisDemandController } from './analysis_demand.controller';
import{AnalysisDemand , AnalysisDemandchema} from './entities/analysis_demand.entity';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forFeature([{ name: AnalysisDemand.name, schema: AnalysisDemandchema }])],
  controllers: [AnalysisDemandController],
  providers: [AnalysisDemandService]
})
export class AnalysisDemandModule {}

