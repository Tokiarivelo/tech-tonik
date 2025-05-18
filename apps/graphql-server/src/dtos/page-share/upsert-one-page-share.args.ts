import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PageShareWhereUniqueInput } from './page-share-where-unique.input';
import { Type } from 'class-transformer';
import { PageShareCreateInput } from './page-share-create.input';
import { PageShareUpdateInput } from './page-share-update.input';

@ArgsType()
export class UpsertOnePageShareArgs {

    @Field(() => PageShareWhereUniqueInput, {nullable:false})
    @Type(() => PageShareWhereUniqueInput)
    where!: Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>;

    @Field(() => PageShareCreateInput, {nullable:false})
    @Type(() => PageShareCreateInput)
    create!: PageShareCreateInput;

    @Field(() => PageShareUpdateInput, {nullable:false})
    @Type(() => PageShareUpdateInput)
    update!: PageShareUpdateInput;
}
