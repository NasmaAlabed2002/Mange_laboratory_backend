import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import internal from 'stream';

export type OfferDocument = HydratedDocument<Offer>;
export class Offer {
 
       
}
export const Offerchema = SchemaFactory.createForClass(Offer);