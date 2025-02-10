import { Body, Injectable, Post } from '@nestjs/common';
import { CreateCartaoDto } from './dto/create-cartao.dto';
import { UpdateCartaoDto } from './dto/update-cartao.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CartaoService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createCartaoDto: CreateCartaoDto) {
    return this.prisma.cartao.create({
      data: createCartaoDto, 
    });
  }
  
  async findAll() {
    return this.prisma.cartao.findMany();
  }

  async findOne(numero_conta: string) {
    return await this.prisma.cartao.findUnique({
      where: { numero_conta: numero_conta },
    });
  }

  async update(numero_conta: string, updateCartaoDto: UpdateCartaoDto) {
    return this.prisma.cartao.update({
      where: { numero_conta },
      data: updateCartaoDto,
    });
  }

  async remove(numero_conta: string) {
    return await this.prisma.cartao.delete({
      where: { numero_conta },
    });
  }
  }