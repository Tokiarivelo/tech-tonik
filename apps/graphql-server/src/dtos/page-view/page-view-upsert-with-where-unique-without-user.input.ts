import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PageViewWhereUniqueInput } from './page-view-where-unique.input';
import { Type } from 'class-transformer';
import { PageViewUpdateWithoutUserInput } from './page-view-update-without-user.input';
import { PageViewCreateWithoutUserInput } from './page-view-create-without-user.input';

@InputType()
export class PageViewUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => PageViewWhereUniqueInput, {nullable:false})
    @Type(() => PageViewWhereUniqueInput)
    where!: Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>;

    @Field(() => PageViewUpdateWithoutUserInput, {nullable:false})
    @Type(() => PageViewUpdateWithoutUserInput)
    update!: PageViewUpdateWithoutUserInput;

    @Field(() => PageViewCreateWithoutUserInput, {nullable:false})
    @Type(() => PageViewCreateWithoutUserInput)
    create!: PageViewCreateWithoutUserInput;
}
