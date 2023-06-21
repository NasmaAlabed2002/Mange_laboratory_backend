import{Doctor} from 'src/doctor/entities/doctor.entity';
import{Patient} from 'src/patient/entities/patient.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaType, SchemaTypes } from 'mongoose';
@Schema()
export class MedicalReferral {
   

    @Prop(
        {
           type: SchemaTypes.ObjectId , ref:'Patient'
        
        })  
       id_Patient: Patient;
     @Prop(
        {
           type: SchemaTypes.ObjectId , ref:'Doctor'
        
        })  
       id_Doctor: Doctor;  


}
  export const MedicalReferralchema= SchemaFactory.createForClass(MedicalReferral);
