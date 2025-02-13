import { Injectable } from '@nestjs/common';
import { CreateTipoDto } from './dto/create-tipo.dto';
import { UpdateTipoDto } from './dto/update-tipo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TipoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTipoDto: CreateTipoDto) {
      return this.prisma.tipo.create({
        data: createTipoDto,
      });
    }
  
  async findAll() {
    return this.prisma.tipo.findMany();
  }

  async findOne(id_tipo: number) {
    return await this.prisma.tipo.findUnique({
      where: { id_tipo : id_tipo },
    });
  }

  async update(id_tipo: number, updateTipoDto: UpdateTipoDto) {
    return this.prisma.tipo.update({
      where: { id_tipo },
      data: updateTipoDto,
    });
  }

  async remove(id_tipo: number) {
    return await this.prisma.tipo.delete({
      where: { id_tipo },
    });
  }
}
