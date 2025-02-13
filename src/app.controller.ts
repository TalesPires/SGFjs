import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('layouts/index')
  root() {
    return {};
  }

  @Get('cartao/cadastrar')  
  @Render('cartao/cadastrarc')
  cadastrarc() {
    return {};
  }

  @Get('cartao/editar')  
  @Render('cartao/editarc')
  editarc() {
    return {};
  }

  @Get('cartao/pesquisar')  
  @Render('cartao/pesquisarc')
  pesquisarc() {
    return {};
  }

  @Get('cartao/editar/:numero_conta')  
  @Render('cartao/formeditarc')
  formeditarc() {
    return {};
  }

  @Get('cartao/excluir')  
  @Render('cartao/excluirc')
  excluirc() {
    return {};
  }

  @Get('motorista/cadastrar')  
  @Render('motorista/cadastrarm')
  cadastrarm() {
    return {};
  }

  @Get('motorista/editar')  
  @Render('motorista/editarm')
  editarm() {
    return {};
  }

  @Get('motorista/pesquisar')  
  @Render('motorista/pesquisarm')
  pesquisarm() {
    return {};
  }

  @Get('motorista/editar/:cpf_motorista')  
  @Render('motorista/formeditarm')
  formeditarm() {
    return {};
  }

  @Get('motorista/excluir')  
  @Render('motorista/excluirm')
  excluirm() {
    return {};
  }

  @Get('tipo/cadastrar')  
  @Render('tipo/cadastrart')
  cadastrart() {
    return {};
  }

  @Get('tipo/editar')  
  @Render('tipo/editart')
  editart() {
    return {};
  }

  @Get('tipo/pesquisar')  
  @Render('tipo/pesquisart')
  pesquisart() {
    return {};
  }

  @Get('tipo/editar/:id_tipo')  
  @Render('tipo/formeditart')
  formeditart() {
    return {};
  }

  @Get('tipo/excluir')  
  @Render('tipo/excluirt')
  excluirt() {
    return {};
  }
}
