import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { Employee, Employeechema } from './entities/employee.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Employee.name, schema: Employeechema }])],
  controllers: [EmployeeController],
  providers: [EmployeeService]
})
export class EmployeeModule {}
