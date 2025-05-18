import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReactionWhereInput } from './reaction-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyReactionArgs {

    @Field(() => ReactionWhereInput, {nullable:true})
    @Type(() => ReactionWhereInput)
    where?: ReactionWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
