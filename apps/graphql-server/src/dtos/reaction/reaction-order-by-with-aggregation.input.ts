import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ReactionCountOrderByAggregateInput } from './reaction-count-order-by-aggregate.input';
import { ReactionMaxOrderByAggregateInput } from './reaction-max-order-by-aggregate.input';
import { ReactionMinOrderByAggregateInput } from './reaction-min-order-by-aggregate.input';

@InputType()
export class ReactionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => ReactionCountOrderByAggregateInput, {nullable:true})
    _count?: ReactionCountOrderByAggregateInput;

    @Field(() => ReactionMaxOrderByAggregateInput, {nullable:true})
    _max?: ReactionMaxOrderByAggregateInput;

    @Field(() => ReactionMinOrderByAggregateInput, {nullable:true})
    _min?: ReactionMinOrderByAggregateInput;
}
