import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ExitPageOrderByWithRelationInput } from '../exit-page/exit-page-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { PageVersionOrderByRelevanceInput } from './page-version-order-by-relevance.input';

@InputType()
export class PageVersionOrderByWithRelationInput {

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

    @Field(() => ExitPageOrderByWithRelationInput, {nullable:true})
    page?: ExitPageOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    updatedBy?: UserOrderByWithRelationInput;

    @Field(() => PageVersionOrderByRelevanceInput, {nullable:true})
    _relevance?: PageVersionOrderByRelevanceInput;
}
