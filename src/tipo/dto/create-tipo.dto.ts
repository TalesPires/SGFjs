import { IsString, IsInt, IsDecimal, Min } from 'class-validator';

export class CreateTipoDto {
    @IsString()
    nome_tipo?: string;

    @IsInt()
    capacidade_peso?: number;

    @IsInt()
    quantidade_eixos?: number;
}