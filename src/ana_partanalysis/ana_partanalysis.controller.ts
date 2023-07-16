import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnaPartanalysisService } from './ana_partanalysis.service';
import { CreateAnaPartanalysisDto } from './dto/create-ana_partanalysis.dto';
import { UpdateAnaPartanalysisDto } from './dto/update-ana_partanalysis.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('test')
@Controller('ana-partanalysis')
export class AnaPartanalysisController {
  constructor(private readonly anaPartanalysisService: AnaPartanalysisService) {}

  @Post()
  create(@Body() createAnaPartanalysisDto: CreateAnaPartanalysisDto) {
    return this.anaPartanalysisService.create(createAnaPartanalysisDto);
  }

  @Get()
  findAll() {
    return this.anaPartanalysisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.anaPartanalysisService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnaPartanalysisDto: UpdateAnaPartanalysisDto) {
    return this.anaPartanalysisService.update(id, updateAnaPartanalysisDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.anaPartanalysisService.remove(id);
  }
}
