import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import internal from 'stream';

export type DepartmentDocument = HydratedDocument<Department>;

@Schema()

export class Department {
   
   

      @Prop()
      name_Department: string;
 

    }
    
    export const Departmentchema = SchemaFactory.createForClass(Department);

