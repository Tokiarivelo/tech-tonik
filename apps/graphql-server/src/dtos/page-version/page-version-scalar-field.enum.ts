import { registerEnumType } from '@nestjs/graphql';

export enum PageVersionScalarFieldEnum {
    id = "id",
    pageId = "pageId",
    version = "version",
    data = "data",
    updatedById = "updatedById",
    createdAt = "createdAt"
}


registerEnumType(PageVersionScalarFieldEnum, { name: 'PageVersionScalarFieldEnum', description: undefined })
