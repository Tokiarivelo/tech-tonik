import { registerEnumType } from '@nestjs/graphql';

export enum ExitPageScalarFieldEnum {
    id = "id",
    authorId = "authorId",
    tone = "tone",
    templateId = "templateId",
    data = "data",
    slug = "slug",
    isHallOfFame = "isHallOfFame",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ExitPageScalarFieldEnum, { name: 'ExitPageScalarFieldEnum', description: undefined })
