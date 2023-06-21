import { PartialType } from '@nestjs/swagger';
import { CreateAnalysisDemandDto } from './create-analysis_demand.dto';

export class UpdateAnalysisDemandDto extends PartialType(CreateAnalysisDemandDto) {}
