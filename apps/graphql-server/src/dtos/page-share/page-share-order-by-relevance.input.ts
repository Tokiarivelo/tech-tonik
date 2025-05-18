import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageShareOrderByRelevanceFieldEnum } from './page-share-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PageShareOrderByRelevanceInput {

    @Field(() => [PageShareOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${PageShareOrderByRelevanceFieldEnum}`>;

    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;

    @Field(() => String, {nullable:false})
    search!: string;
}
