import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PageVersionWhereUniqueInput } from './page-version-where-unique.input';
import { Type } from 'class-transformer';
import { PageVersionUpdateWithoutPageInput } from './page-version-update-without-page.input';
import { PageVersionCreateWithoutPageInput } from './page-version-create-without-page.input';

@InputType()
export class PageVersionUpsertWithWhereUniqueWithoutPageInput {

    @Field(() => PageVersionWhereUniqueInput, {nullable:false})
    @Type(() => PageVersionWhereUniqueInput)
    where!: Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>;

    @Field(() => PageVersionUpdateWithoutPageInput, {nullable:false})
    @Type(() => PageVersionUpdateWithoutPageInput)
    update!: PageVersionUpdateWithoutPageInput;

    @Field(() => PageVersionCreateWithoutPageInput, {nullable:false})
    @Type(() => PageVersionCreateWithoutPageInput)
    create!: PageVersionCreateWithoutPageInput;
}
