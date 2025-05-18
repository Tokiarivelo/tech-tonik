import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ExitPageUpdateOneRequiredWithoutCommentsNestedInput } from '../exit-page/exit-page-update-one-required-without-comments-nested.input';
import { CommentUpdateOneWithoutRepliesNestedInput } from './comment-update-one-without-replies-nested.input';
import { CommentUpdateManyWithoutParentCommentNestedInput } from './comment-update-many-without-parent-comment-nested.input';

@InputType()
export class CommentUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ExitPageUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    page?: ExitPageUpdateOneRequiredWithoutCommentsNestedInput;

    @Field(() => CommentUpdateOneWithoutRepliesNestedInput, {nullable:true})
    parentComment?: CommentUpdateOneWithoutRepliesNestedInput;

    @Field(() => CommentUpdateManyWithoutParentCommentNestedInput, {nullable:true})
    replies?: CommentUpdateManyWithoutParentCommentNestedInput;
}
