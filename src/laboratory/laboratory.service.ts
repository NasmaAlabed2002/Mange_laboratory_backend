import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLaboratoryDto } from './dto/create-laboratory.dto';
import { UpdateLaboratoryDto } from './dto/update-laboratory.dto';
import { Laboratory } from './entities/laboratory.entity';
import { InjectModel } from '@nestjs/mongoose';''
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'mongoose';
import { Query  } from 'express-serve-static-core';
import { v4 as uuidv4 } from 'uuid';
import { createWriteStream } from 'fs';
@Injectable()
export class LaboratoryService {
  constructor(@InjectModel(Laboratory.name) private LaboratoryModel: Model<Laboratory>) {}

  async createLab(name_laboratory :string, name_manager:string ,address: string ,address_details: string ,number_phon:string, password:string, analysis_existing:string, imagePath:string) : Promise<Laboratory> {
    const createdLaboratory = new this.LaboratoryModel({ name_laboratory, name_manager ,address,address_details,number_phon, password, analysis_existing , imageUrl:imagePath});
    console.log(createdLaboratory);
    return createdLaboratory.save();
  }

  async getLaboratoryImage(id: string): Promise<Buffer> {
    const Laboratory = await this.LaboratoryModel.findById(id).exec();
    if (!Laboratory) throw new NotFoundException('Hotel not found');
    return Buffer.from(Laboratory.imageUrl, 'base64');
  }

  async saveImage(file: Express.Multer.File): Promise<string> {
    const fileName = uuidv4(); // Generate a unique filename
    const filePath = `New folder/${fileName}`;// Specify the desired file path

    return new Promise((resolve, reject) => {
      const writeStream = createWriteStream(filePath);

      writeStream.on('finish', () => {
        resolve(filePath);
      });

      writeStream.on('error', (error) => {
        reject(error);
      });

      writeStream.write(file.buffer);
      writeStream.end();
    });
  }
  

  async create(createLaboratoryDto: CreateLaboratoryDto) : Promise<Laboratory> {
    console.log(createLaboratoryDto);
    const createdLaboratory = new this.LaboratoryModel(createLaboratoryDto);
    return createdLaboratory.save();
  }
 async findAll() {
   return await this.LaboratoryModel.find();
  }


  async findById(id) {
    return await this.LaboratoryModel.findById({_id:id});
  }
  async findOne(id) {
    return await this.LaboratoryModel.findOne({_id:id});
 }
//  async getHotelById(id: string): Promise<Laboratory> {
//   return this.LaboratoryModel.findById(id).exec();
// }

// async addImageToHotel(id: string, imageUrl: string): Promise<Laboratory> {
//   return this.LaboratoryModel.findByIdAndUpdate(
//     id,
//     { $push: { images: imageUrl } },
//     { new: true },
//   );
// }

 async update(id: string, updateLaboratoryDto: UpdateLaboratoryDto) {
    await this.LaboratoryModel.findByIdAndUpdate(id, updateLaboratoryDto, {new : true});
  }

 async remove(id: string) {
  await this.LaboratoryModel.findByIdAndDelete(id);
  }
}

