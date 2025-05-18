import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ExitPageOrderByWithRelationInput } from '../exit-page/exit-page-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { PageShareOrderByRelevanceInput } from './page-share-order-by-relevance.input';

@InputType()
export class PageShareOrderByWithRelationInput {

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

    @Field(() => ExitPageOrderByWithRelationInput, {nullable:true})
    page?: ExitPageOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => PageShareOrderByRelevanceInput, {nullable:true})
    _relevance?: PageShareOrderByRelevanceInput;
}
