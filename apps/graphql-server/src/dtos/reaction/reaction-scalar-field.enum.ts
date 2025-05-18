import { registerEnumType } from '@nestjs/graphql';

export enum ReactionScalarFieldEnum {
    id = "id",
    pageId = "pageId",
    userId = "userId",
    type = "type",
    createdAt = "createdAt"
}


registerEnumType(ReactionScalarFieldEnum, { name: 'ReactionScalarFieldEnum', description: undefined })
