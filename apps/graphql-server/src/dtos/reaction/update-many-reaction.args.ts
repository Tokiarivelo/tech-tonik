import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReactionUpdateManyMutationInput } from './reaction-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ReactionWhereInput } from './reaction-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyReactionArgs {

    @Field(() => ReactionUpdateManyMutationInput, {nullable:false})
    @Type(() => ReactionUpdateManyMutationInput)
    data!: ReactionUpdateManyMutationInput;

    @Field(() => ReactionWhereInput, {nullable:true})
    @Type(() => ReactionWhereInput)
    where?: ReactionWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
