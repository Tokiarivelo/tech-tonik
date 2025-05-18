import { registerEnumType } from '@nestjs/graphql';

export enum TemplateOrderByRelevanceFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    content = "content",
    uniqueKey = "uniqueKey"
}


registerEnumType(TemplateOrderByRelevanceFieldEnum, { name: 'TemplateOrderByRelevanceFieldEnum', description: undefined })
