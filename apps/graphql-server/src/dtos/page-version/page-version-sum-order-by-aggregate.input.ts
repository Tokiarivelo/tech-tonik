import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PageVersionSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    version?: `${SortOrder}`;
}
