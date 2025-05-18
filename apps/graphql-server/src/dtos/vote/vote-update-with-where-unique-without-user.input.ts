import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VoteWhereUniqueInput } from './vote-where-unique.input';
import { Type } from 'class-transformer';
import { VoteUpdateWithoutUserInput } from './vote-update-without-user.input';

@InputType()
export class VoteUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>;

    @Field(() => VoteUpdateWithoutUserInput, {nullable:false})
    @Type(() => VoteUpdateWithoutUserInput)
    data!: VoteUpdateWithoutUserInput;
}
