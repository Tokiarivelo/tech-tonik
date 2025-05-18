import { Injectable, NotFoundException } from '@nestjs/common';
import { DeleteOneReactionArgs } from 'src/dtos/reaction/delete-one-reaction.args';
import { FindManyReactionArgs } from 'src/dtos/reaction/find-many-reaction.args';
import { ReactionCreateInput } from 'src/dtos/reaction/reaction-create.input';
import { Reaction } from 'src/dtos/reaction/reaction.model';
import { PrismaService } from 'src/prisma-module/prisma.service';

@Injectable()
export class ReactionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(input: ReactionCreateInput): Promise<Reaction> {
    const reaction = await this.prisma.reaction.create({
      data: {
        type: input.type,
        page: input.page,
        user: input.user,
      },
    });
    return reaction;
  }

  async updateReaction(
    id: string,
    input: ReactionCreateInput,
  ): Promise<Reaction> {
    const reaction = await this.prisma.reaction.update({
      where: { id },
      data: {
        type: input.type,
        page: input.page,
        user: input.user,
      },
    });
    if (!reaction) throw new NotFoundException(`reaction ${id} not found`);
    return reaction;
  }

  async findAll(params: FindManyReactionArgs): Promise<Reaction[] | null> {
    const { skip, take, cursor, where, orderBy } = params;
    const reaction = await this.prisma.reaction.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
    return reaction;
  }

  async findById(id: string): Promise<Reaction> {
    const reaction = await this.prisma.reaction.findUnique({
      where: { id },
    });
    if (!reaction) throw new NotFoundException(`reaction ${id} not found`);
    return reaction;
  }

  async deleteReaction({ where }: DeleteOneReactionArgs): Promise<Reaction> {
    const reaction = await this.prisma.reaction.delete({
      where,
    });

    if (!reaction)
      throw new NotFoundException(
        `reaction ${JSON.stringify(where)} not found`,
      );
    return reaction;
  }
}
