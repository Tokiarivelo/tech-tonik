import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Vote } from 'src/dtos/vote/vote.model';
import { VoteService } from './vote.service';
import { VoteCreateInput } from 'src/dtos/vote/vote-create.input';

@Resolver(() => Vote)
export class VoteResolver {
  constructor(private readonly voteService: VoteService) {}

  @Query(() => Vote, { name: 'vote' })
  async getOne(@Args('id') id: string): Promise<Vote> {
    return this.voteService.findById(id);
  }

  @Mutation(() => Vote, { name: 'createVote' })
  async create(@Args('input') input: VoteCreateInput): Promise<Vote> {
    return this.voteService.create(input);
  }

  @Mutation(() => Vote, { name: 'updateVote' })
  async update(
    @Args('id') id: string,
    @Args('input') input: VoteCreateInput,
  ): Promise<Vote> {
    return this.voteService.updateVote(id, input);
  }
}
