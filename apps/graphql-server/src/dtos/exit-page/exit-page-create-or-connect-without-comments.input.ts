import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';
import { Type } from 'class-transformer';
import { ExitPageCreateWithoutCommentsInput } from './exit-page-create-without-comments.input';

@InputType()
export class ExitPageCreateOrConnectWithoutCommentsInput {

    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ExitPageCreateWithoutCommentsInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutCommentsInput)
    create!: ExitPageCreateWithoutCommentsInput;
}
