import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Tone } from './tone.enum';

@InputType()
export class NestedEnumToneFilter {

    @Field(() => Tone, {nullable:true})
    equals?: `${Tone}`;

    @Field(() => [Tone], {nullable:true})
    in?: Array<`${Tone}`>;

    @Field(() => [Tone], {nullable:true})
    notIn?: Array<`${Tone}`>;

    @Field(() => NestedEnumToneFilter, {nullable:true})
    not?: NestedEnumToneFilter;
}
