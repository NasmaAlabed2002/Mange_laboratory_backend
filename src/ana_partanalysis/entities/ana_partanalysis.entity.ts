import{Analysis} from 'src/analysis/entities/analysis.entity';
import {PartialAnalysis} from 'src/partial_analysis/entities/partial_analysis.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import internal from 'stream';
export type AnaPartanalysisDocument = HydratedDocument<AnaPartanalysis>;
@Schema()
export class AnaPartanalysis {
   
    @Prop({
        type: SchemaTypes.ObjectId, ref:Analysis.name
        })
        id_anaylsis:Analysis; 

    @Prop({
        type: SchemaTypes.ObjectId, ref:PartialAnalysis.name
    })
    id_partial_analysis:PartialAnalysis;
 
 

}
    export const AnaPartanalysischema= SchemaFactory.createForClass(AnaPartanalysis);
    
