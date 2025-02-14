import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VeiculoService } from './veiculo.service';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';

@Controller('veiculo')
export class VeiculoController {
  constructor(private readonly veiculoService: VeiculoService) {}

  @Post()
  create(@Body() createVeiculoDto: CreateVeiculoDto) {
    return this.veiculoService.create(createVeiculoDto);
  }

  @Get()
  async findAll() {
    return await this.veiculoService.findAll();
  }

  @Get(':renavam')
  async findOne(@Param('renavam') renavam: string) {
    return await this.veiculoService.findOne(renavam);
  }

  @Patch(':renavam')
  async update(@Param('renavam') renavam: string, 
  @Body() updateVeiculoDto: UpdateVeiculoDto) {
    return this.veiculoService.update(renavam, updateVeiculoDto);
  }

  @Delete(':renavam')
  remove(@Param('renavam') renavam: string) {
    return this.veiculoService.remove(renavam);
  }
}
