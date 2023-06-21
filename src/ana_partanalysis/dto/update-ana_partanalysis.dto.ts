import { PartialType } from '@nestjs/swagger';
import { CreateAnaPartanalysisDto } from './create-ana_partanalysis.dto';

export class UpdateAnaPartanalysisDto extends PartialType(CreateAnaPartanalysisDto) {}
