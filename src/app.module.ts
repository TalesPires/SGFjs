import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CartaoModule } from './cartao/cartao.module';
import { MotoristaModule } from './motorista/motorista.module';
import { TipoModule } from './tipo/tipo.module';

@Module({
  imports: [PrismaModule,CartaoModule, MotoristaModule, TipoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
