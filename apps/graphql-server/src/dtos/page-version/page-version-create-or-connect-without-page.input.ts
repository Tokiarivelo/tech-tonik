import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PageVersionWhereUniqueInput } from './page-version-where-unique.input';
import { Type } from 'class-transformer';
import { PageVersionCreateWithoutPageInput } from './page-version-create-without-page.input';

@InputType()
export class PageVersionCreateOrConnectWithoutPageInput {

    @Field(() => PageVersionWhereUniqueInput, {nullable:false})
    @Type(() => PageVersionWhereUniqueInput)
    where!: Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>;

    @Field(() => PageVersionCreateWithoutPageInput, {nullable:false})
    @Type(() => PageVersionCreateWithoutPageInput)
    create!: PageVersionCreateWithoutPageInput;
}
