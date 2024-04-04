
import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { Document } from 'mongoose';
import { ObjectId } from 'typeorm';
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
@Prop()
image: string;
@Prop(
    {
       type: SchemaTypes.ObjectId 
    
    })  
    imageId

}


export const laboratorychema = SchemaFactory.createForClass(Laboratory);