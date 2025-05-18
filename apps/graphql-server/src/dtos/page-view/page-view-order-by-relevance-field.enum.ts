import { registerEnumType } from '@nestjs/graphql';

export enum PageViewOrderByRelevanceFieldEnum {
    id = "id",
    pageId = "pageId",
    userId = "userId",
    sessionId = "sessionId"
}


registerEnumType(PageViewOrderByRelevanceFieldEnum, { name: 'PageViewOrderByRelevanceFieldEnum', description: undefined })
