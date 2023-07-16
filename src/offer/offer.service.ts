import { Injectable } from '@nestjs/common';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import{Offer} from './entities/offer.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()

export class OfferService {
  constructor(@InjectModel(Offer.name) private OfferModel: Model<Offer>) {}
  async create(createOfferDto: CreateOfferDto) : Promise<Offer>  {
    console.log(createOfferDto);
    
    const createdOffer= new this.OfferModel(createOfferDto);
    return createdOffer.save();
  }

  findAll() {
    return `This action returns all offer`;
  }

  async findOne(id) {
    return await this.OfferModel.findOne({_id:id});
  }

  async update(id: string, updateOfferDto: UpdateOfferDto) {
    await this.OfferModel.findByIdAndUpdate(id, updateOfferDto, {new : true});
  }

  async remove(id: string) {
    await this.OfferModel.findByIdAndDelete(id);
  }
}

