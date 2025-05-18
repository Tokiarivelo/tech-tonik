import { registerEnumType } from '@nestjs/graphql';

export enum PageViewScalarFieldEnum {
    id = "id",
    pageId = "pageId",
    userId = "userId",
    sessionId = "sessionId",
    createdAt = "createdAt"
}


registerEnumType(PageViewScalarFieldEnum, { name: 'PageViewScalarFieldEnum', description: undefined })
