import { registerEnumType } from '@nestjs/graphql';

export enum TemplateScalarFieldEnum {
    id = "id",
    uniqueKey = "uniqueKey",
    authorId = "authorId",
    name = "name",
    description = "description",
    placeholders = "placeholders",
    content = "content",
    createdAt = "createdAt"
}


registerEnumType(TemplateScalarFieldEnum, { name: 'TemplateScalarFieldEnum', description: undefined })
