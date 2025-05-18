import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReactionType } from './reaction-type.enum';
import { NestedEnumReactionTypeWithAggregatesFilter } from './nested-enum-reaction-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumReactionTypeFilter } from './nested-enum-reaction-type-filter.input';

@InputType()
export class EnumReactionTypeWithAggregatesFilter {

    @Field(() => ReactionType, {nullable:true})
    equals?: `${ReactionType}`;

    @Field(() => [ReactionType], {nullable:true})
    in?: Array<`${ReactionType}`>;

    @Field(() => [ReactionType], {nullable:true})
    notIn?: Array<`${ReactionType}`>;

    @Field(() => NestedEnumReactionTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumReactionTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumReactionTypeFilter, {nullable:true})
    _min?: NestedEnumReactionTypeFilter;

    @Field(() => NestedEnumReactionTypeFilter, {nullable:true})
    _max?: NestedEnumReactionTypeFilter;
}
