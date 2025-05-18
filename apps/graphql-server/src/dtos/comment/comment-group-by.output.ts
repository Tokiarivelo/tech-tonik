import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CommentCountAggregate } from './comment-count-aggregate.output';
import { CommentMinAggregate } from './comment-min-aggregate.output';
import { CommentMaxAggregate } from './comment-max-aggregate.output';

@ObjectType()
export class CommentGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    pageId!: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:true})
    parentCommentId?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => CommentCountAggregate, {nullable:true})
    _count?: CommentCountAggregate;

    @Field(() => CommentMinAggregate, {nullable:true})
    _min?: CommentMinAggregate;

    @Field(() => CommentMaxAggregate, {nullable:true})
    _max?: CommentMaxAggregate;
}
