import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReactionCreateWithoutPageInput } from './reaction-create-without-page.input';
import { Type } from 'class-transformer';
import { ReactionCreateOrConnectWithoutPageInput } from './reaction-create-or-connect-without-page.input';
import { ReactionUpsertWithWhereUniqueWithoutPageInput } from './reaction-upsert-with-where-unique-without-page.input';
import { ReactionCreateManyPageInputEnvelope } from './reaction-create-many-page-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReactionWhereUniqueInput } from './reaction-where-unique.input';
import { ReactionUpdateWithWhereUniqueWithoutPageInput } from './reaction-update-with-where-unique-without-page.input';
import { ReactionUpdateManyWithWhereWithoutPageInput } from './reaction-update-many-with-where-without-page.input';
import { ReactionScalarWhereInput } from './reaction-scalar-where.input';

@InputType()
export class ReactionUncheckedUpdateManyWithoutPageNestedInput {

    @Field(() => [ReactionCreateWithoutPageInput], {nullable:true})
    @Type(() => ReactionCreateWithoutPageInput)
    create?: Array<ReactionCreateWithoutPageInput>;

    @Field(() => [ReactionCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => ReactionCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<ReactionCreateOrConnectWithoutPageInput>;

    @Field(() => [ReactionUpsertWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => ReactionUpsertWithWhereUniqueWithoutPageInput)
    upsert?: Array<ReactionUpsertWithWhereUniqueWithoutPageInput>;

    @Field(() => ReactionCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => ReactionCreateManyPageInputEnvelope)
    createMany?: ReactionCreateManyPageInputEnvelope;

    @Field(() => [ReactionWhereUniqueInput], {nullable:true})
    @Type(() => ReactionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>>;

    @Field(() => [ReactionWhereUniqueInput], {nullable:true})
    @Type(() => ReactionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>>;

    @Field(() => [ReactionWhereUniqueInput], {nullable:true})
    @Type(() => ReactionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>>;

    @Field(() => [ReactionWhereUniqueInput], {nullable:true})
    @Type(() => ReactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>>;

    @Field(() => [ReactionUpdateWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => ReactionUpdateWithWhereUniqueWithoutPageInput)
    update?: Array<ReactionUpdateWithWhereUniqueWithoutPageInput>;

    @Field(() => [ReactionUpdateManyWithWhereWithoutPageInput], {nullable:true})
    @Type(() => ReactionUpdateManyWithWhereWithoutPageInput)
    updateMany?: Array<ReactionUpdateManyWithWhereWithoutPageInput>;

    @Field(() => [ReactionScalarWhereInput], {nullable:true})
    @Type(() => ReactionScalarWhereInput)
    deleteMany?: Array<ReactionScalarWhereInput>;
}
