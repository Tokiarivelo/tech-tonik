import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReactionCreateWithoutUserInput } from './reaction-create-without-user.input';
import { Type } from 'class-transformer';
import { ReactionCreateOrConnectWithoutUserInput } from './reaction-create-or-connect-without-user.input';
import { ReactionUpsertWithWhereUniqueWithoutUserInput } from './reaction-upsert-with-where-unique-without-user.input';
import { ReactionCreateManyUserInputEnvelope } from './reaction-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReactionWhereUniqueInput } from './reaction-where-unique.input';
import { ReactionUpdateWithWhereUniqueWithoutUserInput } from './reaction-update-with-where-unique-without-user.input';
import { ReactionUpdateManyWithWhereWithoutUserInput } from './reaction-update-many-with-where-without-user.input';
import { ReactionScalarWhereInput } from './reaction-scalar-where.input';

@InputType()
export class ReactionUpdateManyWithoutUserNestedInput {

    @Field(() => [ReactionCreateWithoutUserInput], {nullable:true})
    @Type(() => ReactionCreateWithoutUserInput)
    create?: Array<ReactionCreateWithoutUserInput>;

    @Field(() => [ReactionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReactionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ReactionCreateOrConnectWithoutUserInput>;

    @Field(() => [ReactionUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReactionUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ReactionUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ReactionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReactionCreateManyUserInputEnvelope)
    createMany?: ReactionCreateManyUserInputEnvelope;

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

    @Field(() => [ReactionUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReactionUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ReactionUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ReactionUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ReactionUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ReactionUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ReactionScalarWhereInput], {nullable:true})
    @Type(() => ReactionScalarWhereInput)
    deleteMany?: Array<ReactionScalarWhereInput>;
}
