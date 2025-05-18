import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageVersionOrderByRelevanceFieldEnum } from './page-version-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PageVersionOrderByRelevanceInput {

    @Field(() => [PageVersionOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${PageVersionOrderByRelevanceFieldEnum}`>;

    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;

    @Field(() => String, {nullable:false})
    search!: string;
}
