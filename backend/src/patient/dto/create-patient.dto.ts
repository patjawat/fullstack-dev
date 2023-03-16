import { IsNotEmpty } from "class-validator"

export class CreatePatientDto {
    
    @IsNotEmpty()
    fname: string

    @IsNotEmpty()
    lname: string

    @IsNotEmpty()
    gender: string

    @IsNotEmpty()
    dob: string

    @IsNotEmpty()
    address: string

    @IsNotEmpty()
    birthday: Date
    
}
