import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PageVersionCountOrderByAggregateInput } from './page-version-count-order-by-aggregate.input';
import { PageVersionAvgOrderByAggregateInput } from './page-version-avg-order-by-aggregate.input';
import { PageVersionMaxOrderByAggregateInput } from './page-version-max-order-by-aggregate.input';
import { PageVersionMinOrderByAggregateInput } from './page-version-min-order-by-aggregate.input';
import { PageVersionSumOrderByAggregateInput } from './page-version-sum-order-by-aggregate.input';

@InputType()
export class PageVersionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    version?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    data?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    updatedById?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => PageVersionCountOrderByAggregateInput, {nullable:true})
    _count?: PageVersionCountOrderByAggregateInput;

    @Field(() => PageVersionAvgOrderByAggregateInput, {nullable:true})
    _avg?: PageVersionAvgOrderByAggregateInput;

    @Field(() => PageVersionMaxOrderByAggregateInput, {nullable:true})
    _max?: PageVersionMaxOrderByAggregateInput;

    @Field(() => PageVersionMinOrderByAggregateInput, {nullable:true})
    _min?: PageVersionMinOrderByAggregateInput;

    @Field(() => PageVersionSumOrderByAggregateInput, {nullable:true})
    _sum?: PageVersionSumOrderByAggregateInput;
}
