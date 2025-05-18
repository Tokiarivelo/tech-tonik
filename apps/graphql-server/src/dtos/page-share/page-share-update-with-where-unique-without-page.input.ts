import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PageShareWhereUniqueInput } from './page-share-where-unique.input';
import { Type } from 'class-transformer';
import { PageShareUpdateWithoutPageInput } from './page-share-update-without-page.input';

@InputType()
export class PageShareUpdateWithWhereUniqueWithoutPageInput {

    @Field(() => PageShareWhereUniqueInput, {nullable:false})
    @Type(() => PageShareWhereUniqueInput)
    where!: Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>;

    @Field(() => PageShareUpdateWithoutPageInput, {nullable:false})
    @Type(() => PageShareUpdateWithoutPageInput)
    data!: PageShareUpdateWithoutPageInput;
}
