import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ExitPageCountOrderByAggregateInput } from './exit-page-count-order-by-aggregate.input';
import { ExitPageMaxOrderByAggregateInput } from './exit-page-max-order-by-aggregate.input';
import { ExitPageMinOrderByAggregateInput } from './exit-page-min-order-by-aggregate.input';

@InputType()
export class ExitPageOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    authorId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    tone?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    templateId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    data?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    slug?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    isHallOfFame?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => ExitPageCountOrderByAggregateInput, {nullable:true})
    _count?: ExitPageCountOrderByAggregateInput;

    @Field(() => ExitPageMaxOrderByAggregateInput, {nullable:true})
    _max?: ExitPageMaxOrderByAggregateInput;

    @Field(() => ExitPageMinOrderByAggregateInput, {nullable:true})
    _min?: ExitPageMinOrderByAggregateInput;
}
