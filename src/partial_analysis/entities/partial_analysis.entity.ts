
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import internal from 'stream';

export type AnalysisDocument = HydratedDocument<PartialAnalysis>;
@Schema()
export class PartialAnalysis {
 @Prop()
    name_part_ana:string;
 @Prop()
    normal_level:string;
 @Prop()
    biopsy:string;
}
export const PartialAnalysischema= SchemaFactory.createForClass(PartialAnalysis);