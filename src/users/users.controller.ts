import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private prismaService: PrismaService) {}

  @Get()
  findAll(): Promise<UserDto[]> {
    return this.prismaService.user.findMany({
      include: {
        country: true,
      },
    });
  }

  @Post()
  create(@Body() { name, email }: UserDto): Promise<UserDto> {
    return this.prismaService.user.create({
      data: { name, email },
    });
  }
}
