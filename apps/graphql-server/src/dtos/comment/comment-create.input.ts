import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageCreateNestedOneWithoutCommentsInput } from '../exit-page/exit-page-create-nested-one-without-comments.input';
import { UserCreateNestedOneWithoutCommentsInput } from '../user/user-create-nested-one-without-comments.input';
import { CommentCreateNestedOneWithoutRepliesInput } from './comment-create-nested-one-without-replies.input';
import { CommentCreateNestedManyWithoutParentCommentInput } from './comment-create-nested-many-without-parent-comment.input';

@InputType()
export class CommentCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ExitPageCreateNestedOneWithoutCommentsInput, {nullable:false})
    page!: ExitPageCreateNestedOneWithoutCommentsInput;

    @Field(() => UserCreateNestedOneWithoutCommentsInput, {nullable:true})
    user?: UserCreateNestedOneWithoutCommentsInput;

    @Field(() => CommentCreateNestedOneWithoutRepliesInput, {nullable:true})
    parentComment?: CommentCreateNestedOneWithoutRepliesInput;

    @Field(() => CommentCreateNestedManyWithoutParentCommentInput, {nullable:true})
    replies?: CommentCreateNestedManyWithoutParentCommentInput;
}
