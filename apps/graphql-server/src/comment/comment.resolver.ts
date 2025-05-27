import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { Comment } from 'src/dtos/@generated';
import { FindManyCommentArgs } from 'src/dtos/@generated';
import { CommentCreateInput } from 'src/dtos/@generated';

@Resolver(() => Comment)
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  @Query(() => [Comment], { name: 'comments' })
  async getAll(
    @Args() manyCommentArgs: FindManyCommentArgs,
  ): Promise<Comment[] | null> {
    return this.commentService.findAll(manyCommentArgs);
  }

  @Query(() => Comment, { name: 'comment' })
  async getOne(@Args('id') id: string): Promise<Comment> {
    return this.commentService.findById(id);
  }

  @Mutation(() => Comment, { name: 'createComment' })
  async create(@Args('input') input: CommentCreateInput): Promise<Comment> {
    return this.commentService.create(input);
  }

  @Mutation(() => Comment, { name: 'updateComment' })
  async update(
    @Args('id') id: string,
    @Args('input') input: CommentCreateInput,
  ): Promise<Comment> {
    return this.commentService.updateComment(id, input);
  }
}
