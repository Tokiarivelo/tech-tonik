import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ExitPageUpdateOneRequiredWithoutCommentsNestedInput } from '../exit-page/exit-page-update-one-required-without-comments-nested.input';
import { UserUpdateOneWithoutCommentsNestedInput } from '../user/user-update-one-without-comments-nested.input';
import { CommentUpdateManyWithoutParentCommentNestedInput } from './comment-update-many-without-parent-comment-nested.input';

@InputType()
export class CommentUpdateWithoutParentCommentInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ExitPageUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    page?: ExitPageUpdateOneRequiredWithoutCommentsNestedInput;

    @Field(() => UserUpdateOneWithoutCommentsNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutCommentsNestedInput;

    @Field(() => CommentUpdateManyWithoutParentCommentNestedInput, {nullable:true})
    replies?: CommentUpdateManyWithoutParentCommentNestedInput;
}
