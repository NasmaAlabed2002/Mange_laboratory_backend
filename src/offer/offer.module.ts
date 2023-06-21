import { Module } from '@nestjs/common';
import { OfferService } from './offer.service';
import { OfferController } from './offer.controller';
import{Offer,Offerchema} from './entities/offer.entity';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forFeature([{ name: Offer.name, schema: Offerchema }])],
  controllers: [OfferController],
  providers: [OfferService]
})
export class OfferModule {}

