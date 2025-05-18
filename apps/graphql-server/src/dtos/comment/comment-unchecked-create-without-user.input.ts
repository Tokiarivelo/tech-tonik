import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentUncheckedCreateNestedManyWithoutParentCommentInput } from './comment-unchecked-create-nested-many-without-parent-comment.input';

@InputType()
export class CommentUncheckedCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    pageId!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:true})
    parentCommentId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => CommentUncheckedCreateNestedManyWithoutParentCommentInput, {nullable:true})
    replies?: CommentUncheckedCreateNestedManyWithoutParentCommentInput;
}
