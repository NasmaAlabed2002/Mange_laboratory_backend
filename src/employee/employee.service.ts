import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EmployeeService {
  constructor(@InjectModel(Employee.name) private employeeModel: Model<Employee>) {}
  async create(createemployeeDto: CreateEmployeeDto): Promise<Employee> {
    console.log(createemployeeDto);
    
    const createdemployee = new this.employeeModel(createemployeeDto);
    return createdemployee.save();
  }
<<<<<<< HEAD
 async findAll() {
    return await this.employeeModel.find();
  }
=======
>>>>>>> 024d784 (first commttt)

  async findAll() {
    return await this.employeeModel.find();
  }
  async findOne(id) {
    return await this.employeeModel.findOne({_id:id});
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    await this.employeeModel.findByIdAndUpdate(id, updateEmployeeDto, {new : true});
  }

  async remove(id: string) {
    await this.employeeModel.findByIdAndDelete(id);
  }
}
