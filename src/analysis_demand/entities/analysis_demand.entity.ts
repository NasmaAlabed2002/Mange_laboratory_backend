import{MedicalReferral} from 'src/medical_referral/entities/medical_referral.entity';
import {LabAnaPartana} from 'src/lab_ana_partana/entities/lab_ana_partana.entity';
import{Employee} from 'src/employee/entities/employee.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaType, SchemaTypes } from 'mongoose';
import internal from 'stream';
@Schema()
export class AnalysisDemand {
     
    @Prop(
        {
           type: SchemaTypes.ObjectId , ref:MedicalReferral.name
        
        })  
       id_MedicalReferral: MedicalReferral;
       @Prop(
        {
           type: SchemaTypes.ObjectId , ref:LabAnaPartana.name
        
        })  
       id_LabAnaPartana: LabAnaPartana;
       @Prop(
        {
           type: SchemaTypes.ObjectId , ref:Employee.name
        
        })  
       id_Employee: Employee;
       @Prop()
       result:string;
       @Prop()
       date_analays:Date;
     
}


export const AnalysisDemandchema= SchemaFactory.createForClass(AnalysisDemand);
