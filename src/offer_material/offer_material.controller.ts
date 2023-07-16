import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OfferMaterialService } from './offer_material.service';
import { CreateOfferMaterialDto } from './dto/create-offer_material.dto';
import { UpdateOfferMaterialDto } from './dto/update-offer_material.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('test')
@Controller('offer-material')
export class OfferMaterialController {
  constructor(private readonly offerMaterialService: OfferMaterialService) {}

  @Post()
  create(@Body() createOfferMaterialDto: CreateOfferMaterialDto) {
    return this.offerMaterialService.create(createOfferMaterialDto);
  }

  @Get()
  findAll() {
    return this.offerMaterialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.offerMaterialService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOfferMaterialDto: UpdateOfferMaterialDto) {
    return this.offerMaterialService.update(id, updateOfferMaterialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.offerMaterialService.remove(id);
  }
}
