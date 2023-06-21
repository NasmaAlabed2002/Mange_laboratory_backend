import { PartialType } from '@nestjs/swagger';
import { CreateLabAnaPartanaDto } from './create-lab_ana_partana.dto';

export class UpdateLabAnaPartanaDto extends PartialType(CreateLabAnaPartanaDto) {}
