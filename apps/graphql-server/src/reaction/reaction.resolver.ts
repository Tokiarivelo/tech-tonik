import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Reaction } from 'src/dtos/@generated';
import { ReactionService } from './reaction.service';
import { ReactionCreateInput } from 'src/dtos/@generated';

@Resolver(() => Reaction)
export class ReactionResolver {
  constructor(private readonly reactionService: ReactionService) {}

  @Query(() => Reaction, { name: 'reaction' })
  async getOne(@Args('id') id: string): Promise<Reaction> {
    return this.reactionService.findById(id);
  }

  @Query(() => Reaction, { name: 'reactions' })
  async getMany(@Args('pageId') pageId: string): Promise<Reaction[]> {
    return this.reactionService.findByPageId(pageId);
  }

  @Mutation(() => Reaction, { name: 'createReaction' })
  async create(@Args('input') input: ReactionCreateInput): Promise<Reaction> {
    return this.reactionService.create(input);
  }

  @Mutation(() => Reaction, { name: 'updateReaction' })
  async update(
    @Args('id') id: string,
    @Args('input') input: ReactionCreateInput,
  ): Promise<Reaction> {
    return this.reactionService.updateReaction(id, input);
  }
}
