import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ExitPageUpdateOneRequiredWithoutSharesNestedInput } from '../exit-page/exit-page-update-one-required-without-shares-nested.input';
import { UserUpdateOneWithoutSharesNestedInput } from '../user/user-update-one-without-shares-nested.input';

@InputType()
export class PageShareUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    platform?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ExitPageUpdateOneRequiredWithoutSharesNestedInput, {nullable:true})
    page?: ExitPageUpdateOneRequiredWithoutSharesNestedInput;

    @Field(() => UserUpdateOneWithoutSharesNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutSharesNestedInput;
}
