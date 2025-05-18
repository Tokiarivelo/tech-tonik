import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReactionType } from './reaction-type.enum';

@InputType()
export class EnumReactionTypeFieldUpdateOperationsInput {

    @Field(() => ReactionType, {nullable:true})
    set?: `${ReactionType}`;
}
