import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoteOrderByRelevanceFieldEnum } from './vote-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class VoteOrderByRelevanceInput {

    @Field(() => [VoteOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${VoteOrderByRelevanceFieldEnum}`>;

    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;

    @Field(() => String, {nullable:false})
    search!: string;
}
