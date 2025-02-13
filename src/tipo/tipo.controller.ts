import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TipoService } from './tipo.service';
import { CreateTipoDto } from './dto/create-tipo.dto';
import { UpdateTipoDto } from './dto/update-tipo.dto';

@Controller('tipo')
export class TipoController {
  constructor(private readonly tipoService: TipoService) {}

  @Post()
  create(@Body() createTipoDto: CreateTipoDto) {
    return this.tipoService.create(createTipoDto);
  }

  @Get()
  async findAll() {
    return await this.tipoService.findAll();
  }

  @Get(':id_tipo')
  async findOne(@Param('id_tipo', ParseIntPipe) id_tipo: number) {
    return this.tipoService.findOne(id_tipo);
  }
  
  @Patch(':id_tipo')
  async update(@Param('id_tipo', ParseIntPipe) id_tipo: number,
    @Body() UpdateTipoDto: UpdateTipoDto,
    ) {
      return this.tipoService.update(id_tipo, UpdateTipoDto);
  }

  @Delete(':id_tipo')
  async remove(@Param('id_tipo', ParseIntPipe) id_tipo: number) {
    return await this.tipoService.remove(id_tipo);
  }
}
