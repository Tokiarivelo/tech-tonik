import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PageViewWhereUniqueInput } from './page-view-where-unique.input';
import { Type } from 'class-transformer';
import { PageViewUpdateWithoutUserInput } from './page-view-update-without-user.input';

@InputType()
export class PageViewUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => PageViewWhereUniqueInput, {nullable:false})
    @Type(() => PageViewWhereUniqueInput)
    where!: Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>;

    @Field(() => PageViewUpdateWithoutUserInput, {nullable:false})
    @Type(() => PageViewUpdateWithoutUserInput)
    data!: PageViewUpdateWithoutUserInput;
}
