
import {Material} from 'src/material/entities/material.entity';
import{Laboratory} from 'src/laboratory/entities/laboratory.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { HydratedDocument } from 'mongoose';
import internal from 'stream';

export type OrderDocument = HydratedDocument<Order>;
@Schema()
export class Order {

    @Prop()
    name: string;
    @Prop({
        type: SchemaTypes.ObjectId, ref:Material.name
        })
        id_Material: Material;
   @Prop({
         type: SchemaTypes.ObjectId, ref:Laboratory.name
        })
        id_Laboratory: Laboratory;
}
export const Orderechema = SchemaFactory.createForClass(Order);