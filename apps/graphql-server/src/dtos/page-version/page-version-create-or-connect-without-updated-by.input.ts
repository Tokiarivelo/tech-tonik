import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PageVersionWhereUniqueInput } from './page-version-where-unique.input';
import { Type } from 'class-transformer';
import { PageVersionCreateWithoutUpdatedByInput } from './page-version-create-without-updated-by.input';

@InputType()
export class PageVersionCreateOrConnectWithoutUpdatedByInput {

    @Field(() => PageVersionWhereUniqueInput, {nullable:false})
    @Type(() => PageVersionWhereUniqueInput)
    where!: Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>;

    @Field(() => PageVersionCreateWithoutUpdatedByInput, {nullable:false})
    @Type(() => PageVersionCreateWithoutUpdatedByInput)
    create!: PageVersionCreateWithoutUpdatedByInput;
}
