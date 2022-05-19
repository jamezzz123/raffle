import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
// import { PostService } from './post.service';
// import { User as UserModel, Post as PostModel } from '@prisma/client';
import { User as UserModel } from '@prisma/client';
import { get } from 'http';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService, // private readonly postService: PostService,
  ) {}

  @Post('create')
  async signupUser(
    @Body()
    userData: {
      full_name: string;
      email: string;
      phone_number: string;
    },
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
    userData: {
      full_name?: string;
      email?: string;
      phone_number?: string;
      type_of_school?: string;
      state_name?: string;
    },
  ): Promise<UserModel> {
    return this.userService.updateUser({
      where: { id: Number(id) },
      data: userData,
    });
  }
}
