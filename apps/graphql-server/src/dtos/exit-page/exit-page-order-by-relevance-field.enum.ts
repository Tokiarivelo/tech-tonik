import { registerEnumType } from '@nestjs/graphql';

export enum ExitPageOrderByRelevanceFieldEnum {
    id = "id",
    authorId = "authorId",
    templateId = "templateId",
    slug = "slug"
}


registerEnumType(ExitPageOrderByRelevanceFieldEnum, { name: 'ExitPageOrderByRelevanceFieldEnum', description: undefined })
