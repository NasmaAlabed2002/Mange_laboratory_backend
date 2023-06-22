
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaType, SchemaTypes } from 'mongoose';
@Schema()
export class OfferMaterial {} {
   
//    @Prop(
//       {
//          type: SchemaTypes.ObjectId , ref:'Doctor'
      
//       })  
//      id_Doctor: Doctor; 
  
  


}
  export const OfferMaterialchema= SchemaFactory.createForClass(OfferMaterial);