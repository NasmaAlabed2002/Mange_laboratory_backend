import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import internal from 'stream';

export type MaterialDocument = HydratedDocument<Material>;

@Schema()
export class Material {
    @Prop()
    name_Material: string;
    @Prop()
    Production_Date: Date;
    @Prop()
    Expiry_date:Date;
    @Prop()
    Quantity:string;
    @Prop()
    price:string;
    @Prop()
    price_offer:string

}
export const Materialchema = SchemaFactory.createForClass(Material);