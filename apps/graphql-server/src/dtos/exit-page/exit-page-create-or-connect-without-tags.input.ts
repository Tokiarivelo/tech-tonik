import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';
import { Type } from 'class-transformer';
import { ExitPageCreateWithoutTagsInput } from './exit-page-create-without-tags.input';

@InputType()
export class ExitPageCreateOrConnectWithoutTagsInput {

    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ExitPageCreateWithoutTagsInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutTagsInput)
    create!: ExitPageCreateWithoutTagsInput;
}
