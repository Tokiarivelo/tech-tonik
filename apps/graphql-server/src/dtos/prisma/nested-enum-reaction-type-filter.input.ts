import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReactionType } from './reaction-type.enum';

@InputType()
export class NestedEnumReactionTypeFilter {

    @Field(() => ReactionType, {nullable:true})
    equals?: `${ReactionType}`;

    @Field(() => [ReactionType], {nullable:true})
    in?: Array<`${ReactionType}`>;

    @Field(() => [ReactionType], {nullable:true})
    notIn?: Array<`${ReactionType}`>;

    @Field(() => NestedEnumReactionTypeFilter, {nullable:true})
    not?: NestedEnumReactionTypeFilter;
}
