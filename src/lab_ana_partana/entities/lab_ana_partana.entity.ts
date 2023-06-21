import{Laboratory} from 'src/laboratory/entities/laboratory.entity';
import {AnaPartanalysis} from 'src/ana_partanalysis/entities/ana_partanalysis.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaType, SchemaTypes } from 'mongoose';
import internal from 'stream';
@Schema()
export class LabAnaPartana {
     
    @Prop(
        {
           type: SchemaTypes.ObjectId , ref:Laboratory.name
        
        })  
       id_Laboratory: Laboratory;
       @Prop(
        {
           type: SchemaTypes.ObjectId , ref:AnaPartanalysis.name
        
        })  
       id_AnaPartanalysis: AnaPartanalysis;
     
     
}


export const LabAnaPartanachema= SchemaFactory.createForClass(LabAnaPartana);

