

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import internal from 'stream';

export type EmployeeDocument = HydratedDocument<Doctor>;

@Schema()
export class Doctor {
    @Prop()
    name: string;



}

export const Doctorchema = SchemaFactory.createForClass(Doctor);