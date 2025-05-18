import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PageViewWhereUniqueInput } from './page-view-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnePageViewArgs {

    @Field(() => PageViewWhereUniqueInput, {nullable:false})
    @Type(() => PageViewWhereUniqueInput)
    where!: Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>;
}
