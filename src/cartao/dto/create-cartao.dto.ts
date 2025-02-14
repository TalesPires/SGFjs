import { IsString, IsDateString, Matches } from 'class-validator';

export class CreateCartaoDto {
  @IsString()
  @Matches(/^\d+$/, { message: 'Agência deve conter apenas dígitos' })
  agencia: string;

  @IsString()
  cpf_motorista: string;

  @IsString()
  @Matches(/^\d+$/, { message: 'Numero da conta deve conter apenas dígitos' })
  numero_conta: string;

  @IsDateString()
  validade: string;
}
