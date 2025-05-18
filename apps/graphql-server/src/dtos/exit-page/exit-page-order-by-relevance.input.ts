import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageOrderByRelevanceFieldEnum } from './exit-page-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ExitPageOrderByRelevanceInput {

    @Field(() => [ExitPageOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${ExitPageOrderByRelevanceFieldEnum}`>;

    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;

    @Field(() => String, {nullable:false})
    search!: string;
}
