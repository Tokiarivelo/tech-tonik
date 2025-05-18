import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumReactionTypeFieldUpdateOperationsInput } from '../prisma/enum-reaction-type-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ExitPageUpdateOneRequiredWithoutReactionsNestedInput } from '../exit-page/exit-page-update-one-required-without-reactions-nested.input';
import { UserUpdateOneWithoutReactionsNestedInput } from '../user/user-update-one-without-reactions-nested.input';

@InputType()
export class ReactionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumReactionTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumReactionTypeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ExitPageUpdateOneRequiredWithoutReactionsNestedInput, {nullable:true})
    page?: ExitPageUpdateOneRequiredWithoutReactionsNestedInput;

    @Field(() => UserUpdateOneWithoutReactionsNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutReactionsNestedInput;
}
