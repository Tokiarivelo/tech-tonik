import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PageShareWhereUniqueInput } from './page-share-where-unique.input';
import { Type } from 'class-transformer';
import { PageShareUpdateWithoutUserInput } from './page-share-update-without-user.input';

@InputType()
export class PageShareUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => PageShareWhereUniqueInput, {nullable:false})
    @Type(() => PageShareWhereUniqueInput)
    where!: Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>;

    @Field(() => PageShareUpdateWithoutUserInput, {nullable:false})
    @Type(() => PageShareUpdateWithoutUserInput)
    data!: PageShareUpdateWithoutUserInput;
}
