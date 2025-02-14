import { IsString, IsInt, Min, Max, ValidateIf } from 'class-validator';
import { IsRenavam } from 'validator-br-nestjs';

export class CreateVeiculoDto {
    @IsRenavam()
    renavam: string;

    @IsInt()
    id_tipo?: number;

    @IsString()
    placa?: string;

    @IsString()
    marca?: string;

    @IsString()
    modelo?: string;

    @IsString()
    cor?: string;

    @ValidateIf(o => o.ano !== undefined)
    @IsInt({ message: 'O ano deve ser um número.' })
    @Min(1970, { message: 'O ano não pode ser menor que 1970.' })
    @Max(new Date().getFullYear() + 1, { message: `O ano não pode ser maior que o ano atual (${new Date().getFullYear() + 1}).` })
    ano?: number;

    @IsString()
    rntrc?: string;

    
    tipo?: any;
}