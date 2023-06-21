import { PartialType } from '@nestjs/swagger';
import { CreateAnalysisResultDto } from './create-analysis_result.dto';

export class UpdateAnalysisResultDto extends PartialType(CreateAnalysisResultDto) {}
