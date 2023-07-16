import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnalysisDemandService } from './analysis_demand.service';
import { CreateAnalysisDemandDto } from './dto/create-analysis_demand.dto';
import { UpdateAnalysisDemandDto } from './dto/update-analysis_demand.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('test')
@Controller('analysis-demand')
export class AnalysisDemandController {
  constructor(private readonly analysisDemandService: AnalysisDemandService) {}

  @Post()
  create(@Body() createAnalysisDemandDto: CreateAnalysisDemandDto) {
    return this.analysisDemandService.create(createAnalysisDemandDto);
  }

  @Get()
  findAll() {
    return this.analysisDemandService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.analysisDemandService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnalysisDemandDto: UpdateAnalysisDemandDto) {
    return this.analysisDemandService.update(id, updateAnalysisDemandDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.analysisDemandService.remove(id);
  }
}
