import { Controller, Get, Post, Body, Patch, Param, Delete,  UseInterceptors, UploadedFile } from '@nestjs/common';
import { LaboratoryService } from './laboratory.service';
import { CreateLaboratoryDto } from './dto/create-laboratory.dto';
import { UpdateLaboratoryDto } from './dto/update-laboratory.dto';
import { FileInterceptor } from '@nestjs/platform-express';

//@ApiTags('test')
@Controller('laboratory')
export class LaboratoryController {
  constructor(private readonly laboratoryService: LaboratoryService) {}
  
  @Post()
  create(@Body() createLaboratoryDto: CreateLaboratoryDto) {
    return this.laboratoryService.create(createLaboratoryDto);
  }

  @Post(':id/upload')
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(
    @Param('id') id: string,
    @UploadedFile() image: Express.Multer.File,
  ){
    const imageUrl = `photo/Screenshot (50).png`;
    const hotel = await this.laboratoryService.findById(id);
    hotel.imageUrl = imageUrl;
     return this.laboratoryService.update(id, hotel);
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
