import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReactionWhereInput } from './reaction-where.input';
import { Type } from 'class-transformer';
import { ReactionOrderByWithAggregationInput } from './reaction-order-by-with-aggregation.input';
import { ReactionScalarFieldEnum } from './reaction-scalar-field.enum';
import { ReactionScalarWhereWithAggregatesInput } from './reaction-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ReactionCountAggregateInput } from './reaction-count-aggregate.input';
import { ReactionMinAggregateInput } from './reaction-min-aggregate.input';
import { ReactionMaxAggregateInput } from './reaction-max-aggregate.input';

@ArgsType()
export class ReactionGroupByArgs {

    @Field(() => ReactionWhereInput, {nullable:true})
    @Type(() => ReactionWhereInput)
    where?: ReactionWhereInput;

    @Field(() => [ReactionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ReactionOrderByWithAggregationInput>;

    @Field(() => [ReactionScalarFieldEnum], {nullable:false})
    by!: Array<`${ReactionScalarFieldEnum}`>;

    @Field(() => ReactionScalarWhereWithAggregatesInput, {nullable:true})
    having?: ReactionScalarWhereWithAggregatesInput;

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
