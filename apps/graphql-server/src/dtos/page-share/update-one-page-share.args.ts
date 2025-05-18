import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PageShareUpdateInput } from './page-share-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PageShareWhereUniqueInput } from './page-share-where-unique.input';

@ArgsType()
export class UpdateOnePageShareArgs {

    @Field(() => PageShareUpdateInput, {nullable:false})
    @Type(() => PageShareUpdateInput)
    data!: PageShareUpdateInput;

    @Field(() => PageShareWhereUniqueInput, {nullable:false})
    @Type(() => PageShareWhereUniqueInput)
    where!: Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>;
}
