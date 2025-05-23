import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VoteWhereUniqueInput } from './vote-where-unique.input';
import { Type } from 'class-transformer';
import { VoteCreateWithoutUserInput } from './vote-create-without-user.input';

@InputType()
export class VoteCreateOrConnectWithoutUserInput {

    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>;

    @Field(() => VoteCreateWithoutUserInput, {nullable:false})
    @Type(() => VoteCreateWithoutUserInput)
    create!: VoteCreateWithoutUserInput;
}
