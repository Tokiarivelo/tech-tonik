import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ExitPage } from '../exit-page/exit-page.model';
import { User } from '../user/user.model';
import { CommentCount } from './comment-count.output';

@ObjectType()
export class Comment {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    pageId!: string;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:true})
    parentCommentId!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => ExitPage, {nullable:false})
    page?: ExitPage;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => Comment, {nullable:true})
    parentComment?: Comment | null;

    @Field(() => [Comment], {nullable:true})
    replies?: Array<Comment>;

    @Field(() => CommentCount, {nullable:false})
    _count?: CommentCount;
}
