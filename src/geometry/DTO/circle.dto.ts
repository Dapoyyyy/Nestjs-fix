import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, isNumber, Min } from "class-validator";

export class CircleDTO {
    @IsNotEmpty()
    @IsNumber()
    @Type (() => Number)
    @Min(1)
    radius!: number

}




