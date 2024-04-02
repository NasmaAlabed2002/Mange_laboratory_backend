import { Controller, Get, Post, Body, Patch, Param, Delete,  UseInterceptors, UploadedFile } from '@nestjs/common';
import { LaboratoryService } from './laboratory.service';
import { CreateLaboratoryDto } from './dto/create-laboratory.dto';
import { UpdateLaboratoryDto } from './dto/update-laboratory.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import {ApiBody, ApiConsumes, ApiResponse, ApiCreatedResponse, ApiOkResponse, ApiParam } from '@nestjs/swagger';
import { Laboratory } from './entities/laboratory.entity';
//@ApiTags('test')
@Controller('laboratory')
export class LaboratoryController {
  constructor(private readonly laboratoryService: LaboratoryService) {}
  
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        
        name_laboratory: { type: 'string' },
        name_manager: { type: 'string' },
        address: { type: 'string' },
        address_details: { type: 'string' },
        number_phon: { type: 'string' },
        password: { type: 'string' },
        analysis_existing: { type: 'string' },
        imageUrl: { type: 'string', format: 'binary' },
      },
    },
  })
  @ApiResponse({ status: 201, description: 'Hotel and image uploaded successfully!' })
  async createLaboratory(
    @UploadedFile() file: Express.Multer.File,
    @Body() createLaboratoryDto: CreateLaboratoryDto,
  ){
    const { name_laboratory, name_manager , address, address_details, number_phon, password, analysis_existing } = createLaboratoryDto;
    const imagePath = await this.laboratoryService.saveImage(file);
    return this.laboratoryService.createLab( name_laboratory, name_manager ,address,address_details,number_phon, password, analysis_existing , imagePath);
  
  }
 
  @Get()
  async findAll() {
    return await this.laboratoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.laboratoryService.findOne(id);

  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLaboratoryDto: UpdateLaboratoryDto) {
    return this.laboratoryService.update(id, updateLaboratoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.laboratoryService.remove(id);
  }
}
 // @Post(':id/images')
  // @UseInterceptors(FileInterceptor('image'))
  // @ApiCreatedResponse({ type: Laboratory })
  // @ApiParam({ name: 'id', type: String })
  // async uploadImage(
  //   @Param('id') id: string,
  //   @UploadedFile() image: Express.Multer.File,
  // ) {
  //   const imageUrl = `photo/Screenshot (50).png`;
  //   return this.laboratoryService.addImageToHotel(id, imageUrl);
  // }
  // @Post(':id/upload')
  // @UseInterceptors(FileInterceptor('image'))
  // async uploadImage(
  //   @Param('id') id: string,
  //   @UploadedFile() image: Express.Multer.File,
  // ){
  //   const imageUrl = `photo/Screenshot (50).png`;
  //   const hotel = await this.laboratoryService.findById(id);
  //   hotel.imageUrl = imageUrl;
  //    return this.laboratoryService.update(id, hotel);
  // }
