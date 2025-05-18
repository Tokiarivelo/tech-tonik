import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { VoteCountOrderByAggregateInput } from './vote-count-order-by-aggregate.input';
import { VoteMaxOrderByAggregateInput } from './vote-max-order-by-aggregate.input';
import { VoteMinOrderByAggregateInput } from './vote-min-order-by-aggregate.input';

@InputType()
export class VoteOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => VoteCountOrderByAggregateInput, {nullable:true})
    _count?: VoteCountOrderByAggregateInput;

    @Field(() => VoteMaxOrderByAggregateInput, {nullable:true})
    _max?: VoteMaxOrderByAggregateInput;

    @Field(() => VoteMinOrderByAggregateInput, {nullable:true})
    _min?: VoteMinOrderByAggregateInput;
}
