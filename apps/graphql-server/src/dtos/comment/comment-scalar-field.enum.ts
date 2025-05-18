import { registerEnumType } from '@nestjs/graphql';

export enum CommentScalarFieldEnum {
    id = "id",
    pageId = "pageId",
    userId = "userId",
    content = "content",
    parentCommentId = "parentCommentId",
    createdAt = "createdAt"
}


registerEnumType(CommentScalarFieldEnum, { name: 'CommentScalarFieldEnum', description: undefined })
