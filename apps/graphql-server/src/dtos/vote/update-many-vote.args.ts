import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VoteUpdateManyMutationInput } from './vote-update-many-mutation.input';
import { Type } from 'class-transformer';
import { VoteWhereInput } from './vote-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyVoteArgs {

    @Field(() => VoteUpdateManyMutationInput, {nullable:false})
    @Type(() => VoteUpdateManyMutationInput)
    data!: VoteUpdateManyMutationInput;

    @Field(() => VoteWhereInput, {nullable:true})
    @Type(() => VoteWhereInput)
    where?: VoteWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
