import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TitularModule } from './app/titular/titular.module'
import { DependenteModule } from './app/dependente/dependente.module'


@Module({
  imports: [DependenteModule, TitularModule, ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ['.env', 'variaveis.ini'],
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

