import { IsArray,IsDateString, IsNumber, IsString } from 'class-validator';

export class CreateMotoristaDto {
    @IsString()
    cpf_motorista: string;

    @IsString()
    registro_cnh?: string;

    @IsString()
    nome?: string;

    @IsString()
    telefone?: string;

    @IsString()
    endereco?: string;

    @IsDateString()
    data_admissao?: Date;
}