import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PageVersionUpdateInput } from './page-version-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PageVersionWhereUniqueInput } from './page-version-where-unique.input';

@ArgsType()
export class UpdateOnePageVersionArgs {

    @Field(() => PageVersionUpdateInput, {nullable:false})
    @Type(() => PageVersionUpdateInput)
    data!: PageVersionUpdateInput;

    @Field(() => PageVersionWhereUniqueInput, {nullable:false})
    @Type(() => PageVersionWhereUniqueInput)
    where!: Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>;
}
