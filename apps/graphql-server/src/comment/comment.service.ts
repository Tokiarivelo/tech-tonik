import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma-module/prisma.service';
import { CommentCreateInput } from 'src/dtos/comment/comment-create.input';
import { Comment } from 'src/dtos/comment/comment.model';
import { FindManyCommentArgs } from 'src/dtos/comment/find-many-comment.args';
import { DeleteOneCommentArgs } from 'src/dtos/comment/delete-one-comment.args';

@Injectable()
export class CommentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(input: CommentCreateInput): Promise<Comment> {
    const comment = await this.prisma.comment.create({
      data: {
        content: input.content,
        page: input.page,
        parentComment: input.parentComment,
        replies: input.replies,
        user: input.user,
      },
    });
    return comment;
  }

  async updateComment(id: string, input: CommentCreateInput): Promise<Comment> {
    const comment = await this.prisma.comment.update({
      where: { id },
      data: {
        content: input.content,
        page: input.page,
        parentComment: input.parentComment,
        replies: input.replies,
        user: input.user,
      },
    });
    if (!comment) throw new NotFoundException(`Comment ${id} not found`);
    return comment;
  }

  async findAll(params: FindManyCommentArgs): Promise<Comment[] | null> {
    const { skip, take, cursor, where, orderBy } = params;
    const comment = await this.prisma.comment.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
    return comment;
  }

  async findById(id: string): Promise<Comment> {
    const comment = await this.prisma.comment.findUnique({
      where: { id },
    });
    if (!comment) throw new NotFoundException(`Comment ${id} not found`);
    return comment;
  }

  async deleteComment({ where }: DeleteOneCommentArgs): Promise<Comment> {
    const comment = await this.prisma.comment.delete({
      where,
    });

    if (!comment)
      throw new NotFoundException(`Comment ${JSON.stringify(where)} not found`);
    return comment;
  }

  async deleteManyCommentArgs(ids: string[]): Promise<Comment[]> {
    const comments = await this.prisma.comment.findMany({
      where: {
        id: { in: ids },
      },
    });

    if (!comments || comments.length === 0)
      throw new NotFoundException(`Comments ${JSON.stringify(ids)} not found`);

    await this.prisma.comment.deleteMany({
      where: {
        id: { in: ids },
      },
    });

    return comments;
  }
}
