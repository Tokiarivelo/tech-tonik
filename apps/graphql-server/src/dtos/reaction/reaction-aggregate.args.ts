import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReactionWhereInput } from './reaction-where.input';
import { Type } from 'class-transformer';
import { ReactionOrderByWithRelationInput } from './reaction-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ReactionWhereUniqueInput } from './reaction-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReactionCountAggregateInput } from './reaction-count-aggregate.input';
import { ReactionMinAggregateInput } from './reaction-min-aggregate.input';
import { ReactionMaxAggregateInput } from './reaction-max-aggregate.input';

@ArgsType()
export class ReactionAggregateArgs {

    @Field(() => ReactionWhereInput, {nullable:true})
    @Type(() => ReactionWhereInput)
    where?: ReactionWhereInput;

    @Field(() => [ReactionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReactionOrderByWithRelationInput>;

    @Field(() => ReactionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReactionCountAggregateInput, {nullable:true})
    _count?: ReactionCountAggregateInput;

    @Field(() => ReactionMinAggregateInput, {nullable:true})
    _min?: ReactionMinAggregateInput;

    @Field(() => ReactionMaxAggregateInput, {nullable:true})
    _max?: ReactionMaxAggregateInput;
}
