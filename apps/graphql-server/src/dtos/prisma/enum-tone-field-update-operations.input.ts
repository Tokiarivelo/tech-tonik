import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Tone } from './tone.enum';

@InputType()
export class EnumToneFieldUpdateOperationsInput {

    @Field(() => Tone, {nullable:true})
    set?: `${Tone}`;
}
