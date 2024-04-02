import { ApiProperty } from "@nestjs/swagger";
import { IsString } from 'class-validator';
export class CreateLaboratoryDto {
    @ApiProperty()
    @IsString()
    name_laboratory:string;

    @ApiProperty()
    @IsString()
    name_manager:string;

    @ApiProperty()
    @IsString()
    address:string;

    @ApiProperty()
    @IsString()
    address_details:string;

    @ApiProperty()
    @IsString()
    number_phon:string;

    @ApiProperty()
    @IsString()
    password:string;

    @ApiProperty()
    @IsString()
    analysis_existing: string;

    @ApiProperty()
    @IsString()
    imageUrl: string;
    
}
