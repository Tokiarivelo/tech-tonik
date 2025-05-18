import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ExitPageUpdateManyWithoutTagsNestedInput } from '../exit-page/exit-page-update-many-without-tags-nested.input';

@InputType()
export class TagUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: StringFieldUpdateOperationsInput;

    @Field(() => ExitPageUpdateManyWithoutTagsNestedInput, {nullable:true})
    ExitPage?: ExitPageUpdateManyWithoutTagsNestedInput;
}
