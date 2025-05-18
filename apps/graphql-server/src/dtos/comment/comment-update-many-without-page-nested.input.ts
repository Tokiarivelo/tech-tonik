import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutPageInput } from './comment-create-without-page.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutPageInput } from './comment-create-or-connect-without-page.input';
import { CommentUpsertWithWhereUniqueWithoutPageInput } from './comment-upsert-with-where-unique-without-page.input';
import { CommentCreateManyPageInputEnvelope } from './comment-create-many-page-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutPageInput } from './comment-update-with-where-unique-without-page.input';
import { CommentUpdateManyWithWhereWithoutPageInput } from './comment-update-many-with-where-without-page.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';

@InputType()
export class CommentUpdateManyWithoutPageNestedInput {

    @Field(() => [CommentCreateWithoutPageInput], {nullable:true})
    @Type(() => CommentCreateWithoutPageInput)
    create?: Array<CommentCreateWithoutPageInput>;

    @Field(() => [CommentCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutPageInput>;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutPageInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutPageInput>;

    @Field(() => CommentCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyPageInputEnvelope)
    createMany?: CommentCreateManyPageInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentUpdateWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutPageInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutPageInput>;

    @Field(() => [CommentUpdateManyWithWhereWithoutPageInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutPageInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutPageInput>;

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}
