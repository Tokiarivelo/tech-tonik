import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ExitPageUpdateOneRequiredWithoutVersionsNestedInput } from '../exit-page/exit-page-update-one-required-without-versions-nested.input';
import { UserUpdateOneWithoutVersionsNestedInput } from '../user/user-update-one-without-versions-nested.input';

@InputType()
export class PageVersionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    version?: IntFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ExitPageUpdateOneRequiredWithoutVersionsNestedInput, {nullable:true})
    page?: ExitPageUpdateOneRequiredWithoutVersionsNestedInput;

    @Field(() => UserUpdateOneWithoutVersionsNestedInput, {nullable:true})
    updatedBy?: UserUpdateOneWithoutVersionsNestedInput;
}
