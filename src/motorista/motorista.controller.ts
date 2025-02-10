import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MotoristaService } from './motorista.service';
import { CreateMotoristaDto } from './dto/create-motorista.dto';
import { UpdateMotoristaDto } from './dto/update-motorista.dto';

@Controller('motorista')
export class MotoristaController {
  constructor(private readonly motoristaService: MotoristaService) {}

  @Post()
  create(@Body() createMotoristaDto: CreateMotoristaDto) {
    return this.motoristaService.create(createMotoristaDto);
  }

  @Get()
  async findAll() {
    return await this.motoristaService.findAll();
  }

  @Get(':cpf_motorista')
  async findOne(@Param('cpf_motorista') cpf_motorista: string) {
    return await this.motoristaService.findOne(cpf_motorista);
  }

  @Patch(':cpf_motorista')
  async update(
      @Param('cpf_motorista') cpf_motorista: string,
      @Body() UpdateMotoristaDto: UpdateMotoristaDto,
    ) {
      return this.motoristaService.update(cpf_motorista, UpdateMotoristaDto);
    }

  @Delete(':cpf_motorista')
  async remove(@Param('cpf_motorista') cpf_motorista: string) {
    return this.motoristaService.remove(cpf_motorista);
  }
}
