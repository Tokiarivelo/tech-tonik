import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PageViewCountOrderByAggregateInput } from './page-view-count-order-by-aggregate.input';
import { PageViewMaxOrderByAggregateInput } from './page-view-max-order-by-aggregate.input';
import { PageViewMinOrderByAggregateInput } from './page-view-min-order-by-aggregate.input';

@InputType()
export class PageViewOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    sessionId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => PageViewCountOrderByAggregateInput, {nullable:true})
    _count?: PageViewCountOrderByAggregateInput;

    @Field(() => PageViewMaxOrderByAggregateInput, {nullable:true})
    _max?: PageViewMaxOrderByAggregateInput;

    @Field(() => PageViewMinOrderByAggregateInput, {nullable:true})
    _min?: PageViewMinOrderByAggregateInput;
}
