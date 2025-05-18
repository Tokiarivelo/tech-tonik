import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PageViewWhereUniqueInput } from './page-view-where-unique.input';
import { Type } from 'class-transformer';
import { PageViewCreateInput } from './page-view-create.input';
import { PageViewUpdateInput } from './page-view-update.input';

@ArgsType()
export class UpsertOnePageViewArgs {

    @Field(() => PageViewWhereUniqueInput, {nullable:false})
    @Type(() => PageViewWhereUniqueInput)
    where!: Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>;

    @Field(() => PageViewCreateInput, {nullable:false})
    @Type(() => PageViewCreateInput)
    create!: PageViewCreateInput;

    @Field(() => PageViewUpdateInput, {nullable:false})
    @Type(() => PageViewUpdateInput)
    update!: PageViewUpdateInput;
}
