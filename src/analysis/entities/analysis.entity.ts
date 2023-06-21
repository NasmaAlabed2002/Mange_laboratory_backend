

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import internal from 'stream';

export type AnalysisDocument = HydratedDocument<Analysis>;

@Schema()
export class Analysis {
@Prop()
name_analysis:string;
@Prop()
condition:string;

}
export const Analysischema= SchemaFactory.createForClass(Analysis);
