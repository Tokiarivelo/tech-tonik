import { registerEnumType } from '@nestjs/graphql';

export enum VoteScalarFieldEnum {
    id = "id",
    pageId = "pageId",
    userId = "userId",
    createdAt = "createdAt"
}


registerEnumType(VoteScalarFieldEnum, { name: 'VoteScalarFieldEnum', description: undefined })
