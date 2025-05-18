import { registerEnumType } from '@nestjs/graphql';

export enum ReactionOrderByRelevanceFieldEnum {
    id = "id",
    pageId = "pageId",
    userId = "userId"
}


registerEnumType(ReactionOrderByRelevanceFieldEnum, { name: 'ReactionOrderByRelevanceFieldEnum', description: undefined })
