import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from './prisma.service';
import { RaffleService } from './rafflecode.service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, PrismaService, RaffleService],
})
export class AppModule {}
