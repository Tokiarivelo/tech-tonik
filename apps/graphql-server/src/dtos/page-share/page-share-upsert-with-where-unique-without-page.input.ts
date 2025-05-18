import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PageShareWhereUniqueInput } from './page-share-where-unique.input';
import { Type } from 'class-transformer';
import { PageShareUpdateWithoutPageInput } from './page-share-update-without-page.input';
import { PageShareCreateWithoutPageInput } from './page-share-create-without-page.input';

@InputType()
export class PageShareUpsertWithWhereUniqueWithoutPageInput {

    @Field(() => PageShareWhereUniqueInput, {nullable:false})
    @Type(() => PageShareWhereUniqueInput)
    where!: Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>;

    @Field(() => PageShareUpdateWithoutPageInput, {nullable:false})
    @Type(() => PageShareUpdateWithoutPageInput)
    update!: PageShareUpdateWithoutPageInput;

    @Field(() => PageShareCreateWithoutPageInput, {nullable:false})
    @Type(() => PageShareCreateWithoutPageInput)
    create!: PageShareCreateWithoutPageInput;
}
