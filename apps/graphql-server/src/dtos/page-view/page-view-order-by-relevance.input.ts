import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageViewOrderByRelevanceFieldEnum } from './page-view-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PageViewOrderByRelevanceInput {

    @Field(() => [PageViewOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${PageViewOrderByRelevanceFieldEnum}`>;

    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;

    @Field(() => String, {nullable:false})
    search!: string;
}
