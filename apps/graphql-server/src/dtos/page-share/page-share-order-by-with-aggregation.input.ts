import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PageShareCountOrderByAggregateInput } from './page-share-count-order-by-aggregate.input';
import { PageShareMaxOrderByAggregateInput } from './page-share-max-order-by-aggregate.input';
import { PageShareMinOrderByAggregateInput } from './page-share-min-order-by-aggregate.input';

@InputType()
export class PageShareOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    platform?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => PageShareCountOrderByAggregateInput, {nullable:true})
    _count?: PageShareCountOrderByAggregateInput;

    @Field(() => PageShareMaxOrderByAggregateInput, {nullable:true})
    _max?: PageShareMaxOrderByAggregateInput;

    @Field(() => PageShareMinOrderByAggregateInput, {nullable:true})
    _min?: PageShareMinOrderByAggregateInput;
}
