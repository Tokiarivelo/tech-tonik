import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReactionCreateWithoutPageInput } from './reaction-create-without-page.input';
import { Type } from 'class-transformer';
import { ReactionCreateOrConnectWithoutPageInput } from './reaction-create-or-connect-without-page.input';
import { ReactionCreateManyPageInputEnvelope } from './reaction-create-many-page-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReactionWhereUniqueInput } from './reaction-where-unique.input';

@InputType()
export class ReactionUncheckedCreateNestedManyWithoutPageInput {

    @Field(() => [ReactionCreateWithoutPageInput], {nullable:true})
    @Type(() => ReactionCreateWithoutPageInput)
    create?: Array<ReactionCreateWithoutPageInput>;

    @Field(() => [ReactionCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => ReactionCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<ReactionCreateOrConnectWithoutPageInput>;

    @Field(() => ReactionCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => ReactionCreateManyPageInputEnvelope)
    createMany?: ReactionCreateManyPageInputEnvelope;

    @Field(() => [ReactionWhereUniqueInput], {nullable:true})
    @Type(() => ReactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>>;
}
