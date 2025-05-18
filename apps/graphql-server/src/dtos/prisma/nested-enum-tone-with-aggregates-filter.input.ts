import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Tone } from './tone.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumToneFilter } from './nested-enum-tone-filter.input';

@InputType()
export class NestedEnumToneWithAggregatesFilter {

    @Field(() => Tone, {nullable:true})
    equals?: `${Tone}`;

    @Field(() => [Tone], {nullable:true})
    in?: Array<`${Tone}`>;

    @Field(() => [Tone], {nullable:true})
    notIn?: Array<`${Tone}`>;

    @Field(() => NestedEnumToneWithAggregatesFilter, {nullable:true})
    not?: NestedEnumToneWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumToneFilter, {nullable:true})
    _min?: NestedEnumToneFilter;

    @Field(() => NestedEnumToneFilter, {nullable:true})
    _max?: NestedEnumToneFilter;
}
