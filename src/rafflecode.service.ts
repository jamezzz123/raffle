import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { RaffleDraw, Prisma } from '@prisma/client';

@Injectable()
export class RaffleService {
  constructor(private prisma: PrismaService) {}

  async raffle(
    userWhereUniqueInput: Prisma.RaffleDrawWhereUniqueInput,
  ): Promise<RaffleDraw | null> {
    return this.prisma.raffleDraw.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async raffles(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<RaffleDraw[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.raffleDraw.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createRaffle(): Promise<RaffleDraw> {
    return this.prisma.raffleDraw.create({
      data: {
        code: (Math.random() + 1).toString(36).substring(5),
      },
    });
  }

  async updateUser(params: {
    where: Prisma.RaffleDrawWhereUniqueInput;
    data: Prisma.RaffleDrawUpdateInput;
  }): Promise<RaffleDraw> {
    const { where, data } = params;
    return this.prisma.raffleDraw.update({
      data,
      where,
    });
  }

  async deleteUser(
    where: Prisma.RaffleDrawWhereUniqueInput,
  ): Promise<RaffleDraw> {
    return this.prisma.raffleDraw.delete({
      where,
    });
  }
}
