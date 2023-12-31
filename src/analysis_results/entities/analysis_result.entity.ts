import {AnalysisDemand} from 'src/analysis_demand/entities/analysis_demand.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import internal from 'stream';

export type AnalysisResultDocument = HydratedDocument<AnalysisResult>;

@Schema()
export class AnalysisResult {
    @Prop()
    id_group: Array<100>;
      //   {
      //      type:  SchemaTypes.ObjectId , ref:AnalysisDemand.name
        
      //   })  
      //  id_AnalysisDemand: AnalysisDemand;
  
}

export const AnalysisResultchema= SchemaFactory.createForClass(AnalysisResult);
