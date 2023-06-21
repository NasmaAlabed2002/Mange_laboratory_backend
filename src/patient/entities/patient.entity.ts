
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import internal from 'stream';

export type EmployeeDocument = HydratedDocument<Patient>;

@Schema()


export class Patient {
    @Prop()
    name: string;

  }
  
  export const Patientchema = SchemaFactory.createForClass(Patient);
