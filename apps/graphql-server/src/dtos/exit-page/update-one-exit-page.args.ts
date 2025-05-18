import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExitPageUpdateInput } from './exit-page-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';

@ArgsType()
export class UpdateOneExitPageArgs {

    @Field(() => ExitPageUpdateInput, {nullable:false})
    @Type(() => ExitPageUpdateInput)
    data!: ExitPageUpdateInput;

    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
}
