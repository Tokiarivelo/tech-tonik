import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Reaction } from 'src/dtos/reaction/reaction.model';
import { ReactionService } from './reaction.service';
import { FindManyReactionArgs } from 'src/dtos/reaction/find-many-reaction.args';
import { ReactionCreateInput } from 'src/dtos/reaction/reaction-create.input';

@Resolver(() => Reaction)
export class ReactionResolver {
  constructor(private readonly reactionService: ReactionService) {}

  @Query(() => Reaction, { name: 'reaction' })
  async getOne(@Args('id') id: string): Promise<Reaction> {
    return this.reactionService.findById(id);
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
