import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PageVersionWhereUniqueInput } from './page-version-where-unique.input';
import { Type } from 'class-transformer';
import { PageVersionCreateInput } from './page-version-create.input';
import { PageVersionUpdateInput } from './page-version-update.input';

@ArgsType()
export class UpsertOnePageVersionArgs {

    @Field(() => PageVersionWhereUniqueInput, {nullable:false})
    @Type(() => PageVersionWhereUniqueInput)
    where!: Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>;

    @Field(() => PageVersionCreateInput, {nullable:false})
    @Type(() => PageVersionCreateInput)
    create!: PageVersionCreateInput;

    @Field(() => PageVersionUpdateInput, {nullable:false})
    @Type(() => PageVersionUpdateInput)
    update!: PageVersionUpdateInput;
}
