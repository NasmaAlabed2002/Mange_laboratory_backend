import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PartialAnalysisService } from './partial_analysis.service';
import { CreatePartialAnalysisDto } from './dto/create-partial_analysis.dto';
import { UpdatePartialAnalysisDto } from './dto/update-partial_analysis.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('test')
@Controller('partial-analysis')

export class PartialAnalysisController {
  constructor(private readonly partialAnalysisService: PartialAnalysisService) {}

  @Post()
  create(@Body() createPartialAnalysisDto: CreatePartialAnalysisDto) {
    return this.partialAnalysisService.create(createPartialAnalysisDto);
  }

  @Get()
  findAll() {
    return this.partialAnalysisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partialAnalysisService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePartialAnalysisDto: UpdatePartialAnalysisDto) {
    return this.partialAnalysisService.update(id, updatePartialAnalysisDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partialAnalysisService.remove(id);
  }
}
