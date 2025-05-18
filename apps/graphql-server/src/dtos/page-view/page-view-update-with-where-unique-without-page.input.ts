import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PageViewWhereUniqueInput } from './page-view-where-unique.input';
import { Type } from 'class-transformer';
import { PageViewUpdateWithoutPageInput } from './page-view-update-without-page.input';

@InputType()
export class PageViewUpdateWithWhereUniqueWithoutPageInput {

    @Field(() => PageViewWhereUniqueInput, {nullable:false})
    @Type(() => PageViewWhereUniqueInput)
    where!: Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>;

    @Field(() => PageViewUpdateWithoutPageInput, {nullable:false})
    @Type(() => PageViewUpdateWithoutPageInput)
    data!: PageViewUpdateWithoutPageInput;
}
