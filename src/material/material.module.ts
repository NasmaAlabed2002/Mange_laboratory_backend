import { Module } from '@nestjs/common';
import { MaterialService } from './material.service';
import { MaterialController } from './material.controller';
import { Material , Materialchema  }  from  './entities/material.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({

  imports: [MongooseModule.forFeature([{ name: Material.name, schema:  Materialchema  }])],
  controllers: [MaterialController],
  providers: [MaterialService]
})
export class MaterialModule {}
