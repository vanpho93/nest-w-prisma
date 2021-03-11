import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  imports: [PrismaModule],
})
export class UsersModule {}
