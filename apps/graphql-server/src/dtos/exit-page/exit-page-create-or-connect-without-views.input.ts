import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';
import { Type } from 'class-transformer';
import { ExitPageCreateWithoutViewsInput } from './exit-page-create-without-views.input';

@InputType()
export class ExitPageCreateOrConnectWithoutViewsInput {

    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ExitPageCreateWithoutViewsInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutViewsInput)
    create!: ExitPageCreateWithoutViewsInput;
}
