import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReactionWhereInput } from './reaction-where.input';

@InputType()
export class ReactionListRelationFilter {

    @Field(() => ReactionWhereInput, {nullable:true})
    every?: ReactionWhereInput;

    @Field(() => ReactionWhereInput, {nullable:true})
    some?: ReactionWhereInput;

    @Field(() => ReactionWhereInput, {nullable:true})
    none?: ReactionWhereInput;
}
