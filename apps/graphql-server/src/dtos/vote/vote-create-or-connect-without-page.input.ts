import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VoteWhereUniqueInput } from './vote-where-unique.input';
import { Type } from 'class-transformer';
import { VoteCreateWithoutPageInput } from './vote-create-without-page.input';

@InputType()
export class VoteCreateOrConnectWithoutPageInput {

    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>;

    @Field(() => VoteCreateWithoutPageInput, {nullable:false})
    @Type(() => VoteCreateWithoutPageInput)
    create!: VoteCreateWithoutPageInput;
}
