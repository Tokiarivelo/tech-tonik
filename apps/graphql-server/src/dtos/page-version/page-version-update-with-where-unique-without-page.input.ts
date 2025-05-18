import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PageVersionWhereUniqueInput } from './page-version-where-unique.input';
import { Type } from 'class-transformer';
import { PageVersionUpdateWithoutPageInput } from './page-version-update-without-page.input';

@InputType()
export class PageVersionUpdateWithWhereUniqueWithoutPageInput {

    @Field(() => PageVersionWhereUniqueInput, {nullable:false})
    @Type(() => PageVersionWhereUniqueInput)
    where!: Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>;

    @Field(() => PageVersionUpdateWithoutPageInput, {nullable:false})
    @Type(() => PageVersionUpdateWithoutPageInput)
    data!: PageVersionUpdateWithoutPageInput;
}
