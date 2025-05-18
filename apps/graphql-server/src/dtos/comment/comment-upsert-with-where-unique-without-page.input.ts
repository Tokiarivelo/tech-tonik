import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentUpdateWithoutPageInput } from './comment-update-without-page.input';
import { CommentCreateWithoutPageInput } from './comment-create-without-page.input';

@InputType()
export class CommentUpsertWithWhereUniqueWithoutPageInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentUpdateWithoutPageInput, {nullable:false})
    @Type(() => CommentUpdateWithoutPageInput)
    update!: CommentUpdateWithoutPageInput;

    @Field(() => CommentCreateWithoutPageInput, {nullable:false})
    @Type(() => CommentCreateWithoutPageInput)
    create!: CommentCreateWithoutPageInput;
}
