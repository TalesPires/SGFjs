import { Injectable } from '@nestjs/common';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VeiculoService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createVeiculoDto: CreateVeiculoDto) {
    return this.prisma.veiculo.create({
      data: createVeiculoDto,
    });
  }

  async findAll() {
    return this.prisma.veiculo.findMany();
  }

  async findOne(renavam: string) {
    return await this.prisma.veiculo.findUnique({
      where: { renavam: renavam },
    });
  }

  async update(renavam: string, updateVeiculoDto: UpdateVeiculoDto) {
    return this.prisma.veiculo.update({
      where: { renavam },
      data: updateVeiculoDto,
    });
  }

  async remove(renavam: string) {
    return await this.prisma.veiculo.delete({
      where: { renavam },
    });
  }
}
