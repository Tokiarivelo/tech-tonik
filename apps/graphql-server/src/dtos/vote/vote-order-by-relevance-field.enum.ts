import { registerEnumType } from '@nestjs/graphql';

export enum VoteOrderByRelevanceFieldEnum {
    id = "id",
    pageId = "pageId",
    userId = "userId"
}


registerEnumType(VoteOrderByRelevanceFieldEnum, { name: 'VoteOrderByRelevanceFieldEnum', description: undefined })
