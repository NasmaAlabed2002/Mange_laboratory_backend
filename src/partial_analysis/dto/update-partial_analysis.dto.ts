import { PartialType } from '@nestjs/swagger';
import { CreatePartialAnalysisDto } from './create-partial_analysis.dto';

export class UpdatePartialAnalysisDto extends PartialType(CreatePartialAnalysisDto) {}
