import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueExitPageArgs {

    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
}
