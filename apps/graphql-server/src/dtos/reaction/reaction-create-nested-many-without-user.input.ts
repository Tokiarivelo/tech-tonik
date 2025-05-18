import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReactionCreateWithoutUserInput } from './reaction-create-without-user.input';
import { Type } from 'class-transformer';
import { ReactionCreateOrConnectWithoutUserInput } from './reaction-create-or-connect-without-user.input';
import { ReactionCreateManyUserInputEnvelope } from './reaction-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReactionWhereUniqueInput } from './reaction-where-unique.input';

@InputType()
export class ReactionCreateNestedManyWithoutUserInput {

    @Field(() => [ReactionCreateWithoutUserInput], {nullable:true})
    @Type(() => ReactionCreateWithoutUserInput)
    create?: Array<ReactionCreateWithoutUserInput>;

    @Field(() => [ReactionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReactionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ReactionCreateOrConnectWithoutUserInput>;

    @Field(() => ReactionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReactionCreateManyUserInputEnvelope)
    createMany?: ReactionCreateManyUserInputEnvelope;

    @Field(() => [ReactionWhereUniqueInput], {nullable:true})
    @Type(() => ReactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>>;
}
