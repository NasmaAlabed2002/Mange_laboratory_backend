
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import internal from 'stream';
import { Document } from 'mongoose';
// export type laboratoryDocument = HydratedDocument<Laboratory>;

@Schema()
export class Laboratory extends Document {
@Prop()
name_laboratory: string;
@Prop()
name_manager:string;
@Prop()
address:string;
@Prop()
address_details:string;
@Prop()
number_phon:string;
@Prop()
password:string;
@Prop()
analysis_existing: string;

@Prop({ required: true })
imageUrl: string;
}

export const laboratorychema = SchemaFactory.createForClass(Laboratory);