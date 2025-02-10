import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartaoService } from './cartao.service';
import { CreateCartaoDto } from './dto/create-cartao.dto';
import { UpdateCartaoDto } from './dto/update-cartao.dto';

@Controller('cartao')
export class CartaoController {
  constructor(private readonly cartaoService: CartaoService) {}

  @Post()
  create(@Body() createCartaoDto: CreateCartaoDto) {
    return this.cartaoService.create(createCartaoDto);
  }

  @Get()
  async findAll() {
    return await this.cartaoService.findAll();
  }

  @Get(':numero_conta')
  async findOne(@Param('numero_conta') numero_conta: string) {
    return await this.cartaoService.findOne(numero_conta);
}

  @Patch(':numero_conta')
  async update(
    @Param('numero_conta') numero_conta: string,
    @Body() updateCartaoDto: UpdateCartaoDto,
  ) {
    return this.cartaoService.update(numero_conta, updateCartaoDto);
  }

  @Delete(':numero_conta')
  async remove(@Param('numero_conta') numero_conta: string) {
    return this.cartaoService.remove(numero_conta);
  }
}

