
import {Department} from 'src/department/entities/department.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import internal from 'stream';

export type EmployeeDocument = HydratedDocument<Employee>;

@Schema()
export class Employee {
  @Prop(
    {
       type: SchemaTypes.ObjectId , ref:Department.name
    
    })  
   id_Department:Department;
  @Prop()
  name: string;
  @Prop()
  last_name_emp: string;
  @Prop()
  Academic_achievement:string;
  @Prop()
  date_birth:Date;
  @Prop()
  address:string;
  @Prop()
  number_phon:string;
  @Prop()
  marital_status:string;
  @Prop()
  date_employment:Date;
}

export const Employeechema = SchemaFactory.createForClass(Employee);