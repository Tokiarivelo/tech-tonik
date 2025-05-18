import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PageViewWhereUniqueInput } from './page-view-where-unique.input';
import { Type } from 'class-transformer';
import { PageViewCreateWithoutUserInput } from './page-view-create-without-user.input';

@InputType()
export class PageViewCreateOrConnectWithoutUserInput {

    @Field(() => PageViewWhereUniqueInput, {nullable:false})
    @Type(() => PageViewWhereUniqueInput)
    where!: Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>;

    @Field(() => PageViewCreateWithoutUserInput, {nullable:false})
    @Type(() => PageViewCreateWithoutUserInput)
    create!: PageViewCreateWithoutUserInput;
}
