import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VoteWhereUniqueInput } from './vote-where-unique.input';
import { Type } from 'class-transformer';
import { VoteUpdateWithoutPageInput } from './vote-update-without-page.input';

@InputType()
export class VoteUpdateWithWhereUniqueWithoutPageInput {

    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>;

    @Field(() => VoteUpdateWithoutPageInput, {nullable:false})
    @Type(() => VoteUpdateWithoutPageInput)
    data!: VoteUpdateWithoutPageInput;
}
