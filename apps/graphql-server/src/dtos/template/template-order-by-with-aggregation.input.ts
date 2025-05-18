import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TemplateCountOrderByAggregateInput } from './template-count-order-by-aggregate.input';
import { TemplateMaxOrderByAggregateInput } from './template-max-order-by-aggregate.input';
import { TemplateMinOrderByAggregateInput } from './template-min-order-by-aggregate.input';

@InputType()
export class TemplateOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    placeholders?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => TemplateCountOrderByAggregateInput, {nullable:true})
    _count?: TemplateCountOrderByAggregateInput;

    @Field(() => TemplateMaxOrderByAggregateInput, {nullable:true})
    _max?: TemplateMaxOrderByAggregateInput;

    @Field(() => TemplateMinOrderByAggregateInput, {nullable:true})
    _min?: TemplateMinOrderByAggregateInput;
}
