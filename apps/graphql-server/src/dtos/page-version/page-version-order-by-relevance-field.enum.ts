import { registerEnumType } from '@nestjs/graphql';

export enum PageVersionOrderByRelevanceFieldEnum {
    id = "id",
    pageId = "pageId",
    updatedById = "updatedById"
}


registerEnumType(PageVersionOrderByRelevanceFieldEnum, { name: 'PageVersionOrderByRelevanceFieldEnum', description: undefined })
