import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Tone } from './tone.enum';
import { NestedEnumToneFilter } from './nested-enum-tone-filter.input';

@InputType()
export class EnumToneFilter {

    @Field(() => Tone, {nullable:true})
    equals?: `${Tone}`;

    @Field(() => [Tone], {nullable:true})
    in?: Array<`${Tone}`>;

    @Field(() => [Tone], {nullable:true})
    notIn?: Array<`${Tone}`>;

    @Field(() => NestedEnumToneFilter, {nullable:true})
    not?: NestedEnumToneFilter;
}
