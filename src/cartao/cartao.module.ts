import { Module } from '@nestjs/common';
import { CartaoService } from './cartao.service';
import { CartaoController } from './cartao.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [CartaoController],
  providers: [CartaoService, PrismaService]
})
export class CartaoModule {}
