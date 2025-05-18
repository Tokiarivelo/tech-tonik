import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';
import { Type } from 'class-transformer';
import { ExitPageUpdateWithoutAuthorInput } from './exit-page-update-without-author.input';
import { ExitPageCreateWithoutAuthorInput } from './exit-page-create-without-author.input';

@InputType()
export class ExitPageUpsertWithWhereUniqueWithoutAuthorInput {

    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ExitPageUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutAuthorInput)
    update!: ExitPageUpdateWithoutAuthorInput;

    @Field(() => ExitPageCreateWithoutAuthorInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutAuthorInput)
    create!: ExitPageCreateWithoutAuthorInput;
}
