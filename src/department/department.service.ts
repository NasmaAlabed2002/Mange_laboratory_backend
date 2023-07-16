import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DepartmentService {
   constructor(@InjectModel(Department.name) private departmentModel: Model<Department>) {}
   async create(createdepartmentDto: CreateDepartmentDto): Promise<Department> {
    console.log(createdepartmentDto);
    
    const createddepartment = new this.departmentModel(createdepartmentDto);
    return createddepartment.save();
  }

  findAll() {
    return `This action returns all department`;
  }

  async findOne(id) {
    return await this.departmentModel.findOne({_id:id});
  }

  async update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    await this.departmentModel.findByIdAndUpdate(id, updateDepartmentDto, {new : true});
  }

  async remove(id: string) {
    await this.departmentModel.findByIdAndDelete(id);
  }
}
