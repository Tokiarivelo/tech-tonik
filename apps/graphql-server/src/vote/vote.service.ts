import { Injectable, NotFoundException } from '@nestjs/common';
import { DeleteOneVoteArgs } from 'src/dtos/vote/delete-one-vote.args';
import { FindManyVoteArgs } from 'src/dtos/vote/find-many-vote.args';
import { VoteCreateInput } from 'src/dtos/vote/vote-create.input';
import { Vote } from 'src/dtos/vote/vote.model';
import { PrismaService } from 'src/prisma-module/prisma.service';

@Injectable()
export class VoteService {
  constructor(private readonly prisma: PrismaService) {}

  async create(input: VoteCreateInput): Promise<Vote> {
    const vote = await this.prisma.vote.create({
      data: {
        page: input.page,
        user: input.user,
      },
    });
    return vote;
  }

  async updateVote(id: string, input: VoteCreateInput): Promise<Vote> {
    const vote = await this.prisma.vote.update({
      where: { id },
      data: {
        page: input.page,
        user: input.user,
      },
    });
    if (!vote) throw new NotFoundException(`vote ${id} not found`);
    return vote;
  }

  async findAll(params: FindManyVoteArgs): Promise<Vote[] | null> {
    const { skip, take, cursor, where, orderBy } = params;
    const vote = await this.prisma.vote.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
    return vote;
  }

  async findById(id: string): Promise<Vote> {
    const vote = await this.prisma.vote.findUnique({
      where: { id },
    });
    if (!vote) throw new NotFoundException(`vote ${id} not found`);
    return vote;
  }

  async deleteVote({ where }: DeleteOneVoteArgs): Promise<Vote> {
    const vote = await this.prisma.vote.delete({
      where,
    });

    if (!vote)
      throw new NotFoundException(`vote ${JSON.stringify(where)} not found`);
    return vote;
  }
}
