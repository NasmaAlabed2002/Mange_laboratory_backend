import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { MongooseModule } from '@nestjs/mongoose';

import { LaboratoryModule } from './laboratory/laboratory.module';
import { AnalysisModule } from './analysis/analysis.module';
import { PartialAnalysisModule } from './partial_analysis/partial_analysis.module';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import { MedicalReferralModule } from './medical_referral/medical_referral.module';
import { OrderModule } from './order/order.module';
import { DepartmentModule } from './department/department.module';
import { AnaPartanalysisModule } from './ana_partanalysis/ana_partanalysis.module';
import { MaterialModule } from './material/material.module';
import { AnalysisDemandModule } from './analysis_demand/analysis_demand.module';
import { LabAnaPartanaModule } from './lab_ana_partana/lab_ana_partana.module';
import { AnalysisResultsModule } from './analysis_results/analysis_results.module';
import { OfferModule } from './offer/offer.module';


@Module({
  imports: [
  MongooseModule.forRoot('mongodb+srv://Analy_labora:NA-SE-SH-MH@nasma.3c7xcva.mongodb.net/?retryWrites=true&w=majority '),
  EmployeeModule,
 
  LaboratoryModule,
 
  AnalysisModule,
 
  PartialAnalysisModule,
 
  DoctorModule,
 
  PatientModule,
 
  MedicalReferralModule,
 
  OrderModule,
 
  DepartmentModule,
 
  AnaPartanalysisModule,
 
  MaterialModule,
 
  AnalysisDemandModule,
 
  LabAnaPartanaModule,
 
  AnalysisResultsModule,
 
  OfferModule,
 
  ],

})
export class AppModule {}
