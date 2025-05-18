import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReactionOrderByRelevanceFieldEnum } from './reaction-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ReactionOrderByRelevanceInput {

    @Field(() => [ReactionOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${ReactionOrderByRelevanceFieldEnum}`>;

    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;

    @Field(() => String, {nullable:false})
    search!: string;
}
