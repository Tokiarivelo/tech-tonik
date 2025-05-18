import { registerEnumType } from '@nestjs/graphql';

export enum TemplateScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    placeholders = "placeholders",
    content = "content",
    uniqueKey = "uniqueKey",
    createdAt = "createdAt"
}


registerEnumType(TemplateScalarFieldEnum, { name: 'TemplateScalarFieldEnum', description: undefined })
