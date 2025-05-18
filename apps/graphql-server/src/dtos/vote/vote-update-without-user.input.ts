import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ExitPageUpdateOneRequiredWithoutVotesNestedInput } from '../exit-page/exit-page-update-one-required-without-votes-nested.input';

@InputType()
export class VoteUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ExitPageUpdateOneRequiredWithoutVotesNestedInput, {nullable:true})
    page?: ExitPageUpdateOneRequiredWithoutVotesNestedInput;
}
