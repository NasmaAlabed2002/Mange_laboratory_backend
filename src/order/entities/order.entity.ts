
import { Material } from 'src/material/entities/material.entity';
import { Laboratory } from 'src/laboratory/entities/laboratory.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { HydratedDocument } from 'mongoose';
import internal from 'stream';

export type OrderDocument = HydratedDocument<Order>;
@Schema()
export class Order {



    @Prop({
        type: SchemaTypes.ObjectId, ref: Laboratory.name
    })
    id_laboratory: Laboratory;

    @Prop({
        type: SchemaTypes.ObjectId, ref: Material.name
    })
    id_Material: Material;

    @Prop()
    Quantity: string;
    @Prop()
    price: string;
    @Prop()
    order_date: Date;

}
export const Orderechema = SchemaFactory.createForClass(Order);