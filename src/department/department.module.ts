import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import {Department , Departmentchema } from './entities/department.entity'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name:Department.name, schema: Departmentchema}])],
  controllers: [DepartmentController],
  providers: [DepartmentService]
})
export class DepartmentModule {}
