import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ExitPageOrderByRelationAggregateInput } from '../exit-page/exit-page-order-by-relation-aggregate.input';
import { TagOrderByRelevanceInput } from './tag-order-by-relevance.input';

@InputType()
export class TagOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;

    @Field(() => ExitPageOrderByRelationAggregateInput, {nullable:true})
    ExitPage?: ExitPageOrderByRelationAggregateInput;

    @Field(() => TagOrderByRelevanceInput, {nullable:true})
    _relevance?: TagOrderByRelevanceInput;
}
