import { registerEnumType } from '@nestjs/graphql';

export enum PageShareOrderByRelevanceFieldEnum {
    id = "id",
    pageId = "pageId",
    platform = "platform",
    userId = "userId"
}


registerEnumType(PageShareOrderByRelevanceFieldEnum, { name: 'PageShareOrderByRelevanceFieldEnum', description: undefined })
