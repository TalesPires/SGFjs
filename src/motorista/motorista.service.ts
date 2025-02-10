import { Injectable } from '@nestjs/common';
import { CreateMotoristaDto } from './dto/create-motorista.dto';
import { UpdateMotoristaDto } from './dto/update-motorista.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MotoristaService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createMotoristaDto: CreateMotoristaDto) {
    return this.prisma.motorista.create({
      data: createMotoristaDto,
    });
  }

  async findAll() {
    return this.prisma.motorista.findMany();
  }

  async findOne(cpf_motorista: string) {
    return await this.prisma.motorista.findUnique({
      where: { cpf_motorista: cpf_motorista },
    });
  }

  async update(cpf_motorista: string, UpdateMotoristaDto: UpdateMotoristaDto) {
      return this.prisma.motorista.update({
        where: { cpf_motorista },
        data: UpdateMotoristaDto,
      });
    }

  async remove(cpf_motorista: string)  {
    return await this.prisma.motorista.delete({
      where: { cpf_motorista },
    });
  }
  }
