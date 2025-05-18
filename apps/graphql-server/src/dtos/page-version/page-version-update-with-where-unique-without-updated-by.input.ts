import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PageVersionWhereUniqueInput } from './page-version-where-unique.input';
import { Type } from 'class-transformer';
import { PageVersionUpdateWithoutUpdatedByInput } from './page-version-update-without-updated-by.input';

@InputType()
export class PageVersionUpdateWithWhereUniqueWithoutUpdatedByInput {

    @Field(() => PageVersionWhereUniqueInput, {nullable:false})
    @Type(() => PageVersionWhereUniqueInput)
    where!: Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>;

    @Field(() => PageVersionUpdateWithoutUpdatedByInput, {nullable:false})
    @Type(() => PageVersionUpdateWithoutUpdatedByInput)
    data!: PageVersionUpdateWithoutUpdatedByInput;
}
