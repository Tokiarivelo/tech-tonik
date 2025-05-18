import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutPageInput } from './comment-create-without-page.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutPageInput } from './comment-create-or-connect-without-page.input';
import { CommentCreateManyPageInputEnvelope } from './comment-create-many-page-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentUncheckedCreateNestedManyWithoutPageInput {

    @Field(() => [CommentCreateWithoutPageInput], {nullable:true})
    @Type(() => CommentCreateWithoutPageInput)
    create?: Array<CommentCreateWithoutPageInput>;

    @Field(() => [CommentCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutPageInput>;

    @Field(() => CommentCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyPageInputEnvelope)
    createMany?: CommentCreateManyPageInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}
