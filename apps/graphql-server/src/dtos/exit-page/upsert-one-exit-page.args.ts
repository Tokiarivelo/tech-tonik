import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';
import { Type } from 'class-transformer';
import { ExitPageCreateInput } from './exit-page-create.input';
import { ExitPageUpdateInput } from './exit-page-update.input';

@ArgsType()
export class UpsertOneExitPageArgs {

    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ExitPageCreateInput, {nullable:false})
    @Type(() => ExitPageCreateInput)
    create!: ExitPageCreateInput;

    @Field(() => ExitPageUpdateInput, {nullable:false})
    @Type(() => ExitPageUpdateInput)
    update!: ExitPageUpdateInput;
}
