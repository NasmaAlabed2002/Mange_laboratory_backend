import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LabAnaPartanaService } from './lab_ana_partana.service';
import { CreateLabAnaPartanaDto } from './dto/create-lab_ana_partana.dto';
import { UpdateLabAnaPartanaDto } from './dto/update-lab_ana_partana.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('test')
@Controller('lab-ana-partana')
export class LabAnaPartanaController {
  constructor(private readonly labAnaPartanaService: LabAnaPartanaService) {}

  @Post()
  create(@Body() createLabAnaPartanaDto: CreateLabAnaPartanaDto) {
    return this.labAnaPartanaService.create(createLabAnaPartanaDto);
  }

  @Get()
  findAll() {
    return this.labAnaPartanaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.labAnaPartanaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLabAnaPartanaDto: UpdateLabAnaPartanaDto) {
    return this.labAnaPartanaService.update(id, updateLabAnaPartanaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.labAnaPartanaService.remove(id);
  }
}
