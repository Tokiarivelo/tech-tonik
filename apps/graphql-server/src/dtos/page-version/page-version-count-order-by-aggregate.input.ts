import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PageVersionCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    version?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    data?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedById?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}
