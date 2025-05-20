import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ExitPageOrderByRelationAggregateInput } from '../exit-page/exit-page-order-by-relation-aggregate.input';
import { TemplateOrderByRelevanceInput } from './template-order-by-relevance.input';

@InputType()
export class TemplateOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    uniqueKey?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    authorId?: SortOrderInput;

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

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    author?: UserOrderByWithRelationInput;

    @Field(() => ExitPageOrderByRelationAggregateInput, {nullable:true})
    pages?: ExitPageOrderByRelationAggregateInput;

    @Field(() => TemplateOrderByRelevanceInput, {nullable:true})
    _relevance?: TemplateOrderByRelevanceInput;
}
