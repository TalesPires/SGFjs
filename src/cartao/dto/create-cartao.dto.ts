import { IsString, IsDateString } from 'class-validator';

export class CreateCartaoDto {
  @IsString()
  agencia: string;

  @IsString()
  cpf_motorista: string;

  @IsString()
  numero_conta: string;

  @IsDateString()
  validade: string;
}
