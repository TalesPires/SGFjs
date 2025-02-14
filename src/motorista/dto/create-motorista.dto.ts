import {IsDateString,IsString, Matches } from 'class-validator';
import { IsCPF,IsCNH } from 'validator-br-nestjs';


export class CreateMotoristaDto {
    @IsCPF()
    cpf_motorista: string;

    @IsCNH()
    registro_cnh?: string;

    @IsString()
    nome?: string;

    @IsString()
    @Matches(/^\d+$/, { message: 'Telefone deve conter apenas dígitos' })
    telefone?: string;

    @IsString()
    endereco?: string;

    @IsDateString()
    data_admissao?: Date;
}