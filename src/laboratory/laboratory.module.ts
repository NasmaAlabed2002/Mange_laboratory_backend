import { Module } from '@nestjs/common';
import { LaboratoryService } from './laboratory.service';
import { LaboratoryController } from './laboratory.controller';
import { Laboratory, laboratorychema } from './entities/laboratory.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Laboratory.name, schema: laboratorychema }])],
  controllers: [LaboratoryController],
  providers: [LaboratoryService]
})
export class LaboratoryModule {}