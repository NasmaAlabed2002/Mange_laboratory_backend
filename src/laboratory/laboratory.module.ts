import { Module } from '@nestjs/common';
import { LaboratoryService } from './laboratory.service';
import { LaboratoryController } from './laboratory.controller';
import { Laboratory, laboratorychema } from './entities/laboratory.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [MongooseModule.forFeature([{ name: Laboratory.name, schema: laboratorychema }]),
  MulterModule.register(),
],
  controllers: [LaboratoryController],
  providers: [LaboratoryService]
})
export class LaboratoryModule {}