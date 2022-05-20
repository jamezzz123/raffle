import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { RaffleService } from './rafflecode.service';
// import { User as UserModel, Post as PostModel } from '@prisma/client';
import { User as UserModel } from '@prisma/client';
import { CreateUserDto, raffleAssignDto, UpdateUserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly raffleService: RaffleService,
  ) {}

  @Post('create')
  async signupUser(
    @Body()
    userData: CreateUserDto,
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Get('')
  getUser() {
    return this.userService.users({});
  }

  @Put('update/:id')
  async updateUser(
    @Param('id') id: string,
    @Body()
    userData: UpdateUserDto,
  ): Promise<UserModel> {
    return this.userService.updateUser({
      where: { id: Number(id) },
      data: userData,
    });
  }

  @Put('assign-code/:id')
  async updateUsers(
    @Param('id') id: string,
    @Body() userData: raffleAssignDto,
  ): Promise<UserModel> {
    const user = await this.userService.user({
      id: Number(id),
    });
    if (!user) {
      throw new NotFoundException('User does not exist');
    }
    const reffle = await this.raffleService.raffle({
      code: userData.code,
    });
    if (!reffle) {
      throw new NotFoundException('Raffle Code does not exist');
    }
    if (reffle) {
      return this.userService.updateUser({
        where: { id: Number(id) },
        data: {
          raffle_code: {
            connect: {
              id: reffle.id,
            },
          },
        },
      });
    }
  }

  @Get('a-special-route-you-must-never-know')
  async getAllRafflecode() {
    return this.raffleService.raffles({});
  }
}
