import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ExitPageUpdateOneRequiredWithoutViewsNestedInput } from '../exit-page/exit-page-update-one-required-without-views-nested.input';
import { UserUpdateOneWithoutViewsNestedInput } from '../user/user-update-one-without-views-nested.input';

@InputType()
export class PageViewUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    sessionId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ExitPageUpdateOneRequiredWithoutViewsNestedInput, {nullable:true})
    page?: ExitPageUpdateOneRequiredWithoutViewsNestedInput;

    @Field(() => UserUpdateOneWithoutViewsNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutViewsNestedInput;
}
