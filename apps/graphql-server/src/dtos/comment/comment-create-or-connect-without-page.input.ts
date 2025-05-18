import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentCreateWithoutPageInput } from './comment-create-without-page.input';

@InputType()
export class CommentCreateOrConnectWithoutPageInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentCreateWithoutPageInput, {nullable:false})
    @Type(() => CommentCreateWithoutPageInput)
    create!: CommentCreateWithoutPageInput;
}
