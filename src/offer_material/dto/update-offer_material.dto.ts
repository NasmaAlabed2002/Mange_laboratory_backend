import { PartialType } from '@nestjs/swagger';
import { CreateOfferMaterialDto } from './create-offer_material.dto';

export class UpdateOfferMaterialDto extends PartialType(CreateOfferMaterialDto) {}
