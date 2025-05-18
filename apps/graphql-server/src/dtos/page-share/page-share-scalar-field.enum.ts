import { registerEnumType } from '@nestjs/graphql';

export enum PageShareScalarFieldEnum {
    id = "id",
    pageId = "pageId",
    platform = "platform",
    userId = "userId",
    createdAt = "createdAt"
}


registerEnumType(PageShareScalarFieldEnum, { name: 'PageShareScalarFieldEnum', description: undefined })
