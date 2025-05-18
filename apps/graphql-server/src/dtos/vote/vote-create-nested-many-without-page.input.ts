import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoteCreateWithoutPageInput } from './vote-create-without-page.input';
import { Type } from 'class-transformer';
import { VoteCreateOrConnectWithoutPageInput } from './vote-create-or-connect-without-page.input';
import { VoteCreateManyPageInputEnvelope } from './vote-create-many-page-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VoteWhereUniqueInput } from './vote-where-unique.input';

@InputType()
export class VoteCreateNestedManyWithoutPageInput {

    @Field(() => [VoteCreateWithoutPageInput], {nullable:true})
    @Type(() => VoteCreateWithoutPageInput)
    create?: Array<VoteCreateWithoutPageInput>;

    @Field(() => [VoteCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => VoteCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<VoteCreateOrConnectWithoutPageInput>;

    @Field(() => VoteCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => VoteCreateManyPageInputEnvelope)
    createMany?: VoteCreateManyPageInputEnvelope;

    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>>;
}
