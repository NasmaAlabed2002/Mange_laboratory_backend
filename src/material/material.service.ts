import { Injectable } from '@nestjs/common';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';
import { Material } from './entities/material.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class MaterialService {
  constructor(@InjectModel(Material.name) private MaterialModel: Model<Material>) {}
  async create(createMaterialDto: CreateMaterialDto) : Promise<Material>{
    console.log(createMaterialDto);
    
    const createdMaterial= new this.MaterialModel(createMaterialDto);
    return createdMaterial.save();
  }


  findAll() {
    return `This action returns all material`;
  }

  async findOne(id) {
    return await this.MaterialModel.findOne({_id:id});
  }

  async update(id: string, updateMaterialDto: UpdateMaterialDto) {
    await this.MaterialModel.findByIdAndUpdate(id, updateMaterialDto, {new : true});
  }

  async remove(id: string) {
    await this.MaterialModel.findByIdAndDelete(id);
  }
}
