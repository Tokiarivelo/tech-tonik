import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';
import { Type } from 'class-transformer';
import { ExitPageUpdateWithoutTagsInput } from './exit-page-update-without-tags.input';
import { ExitPageCreateWithoutTagsInput } from './exit-page-create-without-tags.input';

@InputType()
export class ExitPageUpsertWithWhereUniqueWithoutTagsInput {

    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ExitPageUpdateWithoutTagsInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutTagsInput)
    update!: ExitPageUpdateWithoutTagsInput;

    @Field(() => ExitPageCreateWithoutTagsInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutTagsInput)
    create!: ExitPageCreateWithoutTagsInput;
}
