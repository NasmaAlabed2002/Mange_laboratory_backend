import { ApiProperty } from "@nestjs/swagger";
export class CreateLaboratoryDto {

    name_laboratory:string;
    name_manager:string;
    address:string;
    address_details:string;
    number_phon:string;
    password:string;
    analysis_existing: string;
    @ApiProperty()
    imageUrl: any;

}
