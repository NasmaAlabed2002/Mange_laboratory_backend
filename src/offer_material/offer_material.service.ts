import { Injectable } from '@nestjs/common';
import { CreateOfferMaterialDto } from './dto/create-offer_material.dto';
import { UpdateOfferMaterialDto } from './dto/update-offer_material.dto';
import { OfferMaterial} from './entities/offer_material.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class OfferMaterialService {
  constructor(@InjectModel(OfferMaterial.name) private OfferMaterialModel: Model<OfferMaterial>) {}
  async create(createOfferMaterialDto: CreateOfferMaterialDto)  :Promise<OfferMaterial> {
    console.log(createOfferMaterialDto);
    
    const createdOfferMaterial= new this.OfferMaterialModel(createOfferMaterialDto);
    return createdOfferMaterial.save();
  }

  findAll() {
    return `This action returns all offerMaterial`;
  }

  async findOne(id) {
    return await this.OfferMaterialModel.findOne({_id:id});
  }

 async update(id: string, updateOfferMaterialDto: UpdateOfferMaterialDto) {
    await this.OfferMaterialModel.findByIdAndUpdate(id, updateOfferMaterialDto, {new : true});
  }

 async remove(id: string) {
    await this.OfferMaterialModel.findByIdAndDelete(id);
}
}
