import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PageViewUpdateInput } from './page-view-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PageViewWhereUniqueInput } from './page-view-where-unique.input';

@ArgsType()
export class UpdateOnePageViewArgs {

    @Field(() => PageViewUpdateInput, {nullable:false})
    @Type(() => PageViewUpdateInput)
    data!: PageViewUpdateInput;

    @Field(() => PageViewWhereUniqueInput, {nullable:false})
    @Type(() => PageViewWhereUniqueInput)
    where!: Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>;
}
