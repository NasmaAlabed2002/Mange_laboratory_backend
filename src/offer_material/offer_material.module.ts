import { Module } from '@nestjs/common';
import { OfferMaterialService } from './offer_material.service';
import { OfferMaterialController } from './offer_material.controller';
import { OfferMaterial,OfferMaterialchema} from  './entities/offer_material.entity';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forFeature([{ name: OfferMaterial.name, schema: OfferMaterialchema }])],
  controllers: [OfferMaterialController],
  providers: [OfferMaterialService]
})
export class OfferMaterialModule {}
