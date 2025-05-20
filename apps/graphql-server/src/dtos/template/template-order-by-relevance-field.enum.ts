import { registerEnumType } from '@nestjs/graphql';

export enum TemplateOrderByRelevanceFieldEnum {
    id = "id",
    uniqueKey = "uniqueKey",
    authorId = "authorId",
    name = "name",
    description = "description",
    content = "content"
}


registerEnumType(TemplateOrderByRelevanceFieldEnum, { name: 'TemplateOrderByRelevanceFieldEnum', description: undefined })
