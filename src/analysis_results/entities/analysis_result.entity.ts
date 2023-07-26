import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import internal from 'stream';

export type AnalysisResultDocument = HydratedDocument<AnalysisResult>;

@Schema()
export class AnalysisResult {}

export const AnalysisResultchema= SchemaFactory.createForClass(AnalysisResult);
