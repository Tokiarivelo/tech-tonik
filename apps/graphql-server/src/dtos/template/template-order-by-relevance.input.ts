import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TemplateOrderByRelevanceFieldEnum } from './template-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TemplateOrderByRelevanceInput {

    @Field(() => [TemplateOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${TemplateOrderByRelevanceFieldEnum}`>;

    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;

    @Field(() => String, {nullable:false})
    search!: string;
}
