import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReactionType } from './reaction-type.enum';
import { NestedEnumReactionTypeFilter } from './nested-enum-reaction-type-filter.input';

@InputType()
export class EnumReactionTypeFilter {

    @Field(() => ReactionType, {nullable:true})
    equals?: `${ReactionType}`;

    @Field(() => [ReactionType], {nullable:true})
    in?: Array<`${ReactionType}`>;

    @Field(() => [ReactionType], {nullable:true})
    notIn?: Array<`${ReactionType}`>;

    @Field(() => NestedEnumReactionTypeFilter, {nullable:true})
    not?: NestedEnumReactionTypeFilter;
}
