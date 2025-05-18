import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageCreateWithoutCommentsInput } from './exit-page-create-without-comments.input';
import { Type } from 'class-transformer';
import { ExitPageCreateOrConnectWithoutCommentsInput } from './exit-page-create-or-connect-without-comments.input';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';

@InputType()
export class ExitPageCreateNestedOneWithoutCommentsInput {

    @Field(() => ExitPageCreateWithoutCommentsInput, {nullable:true})
    @Type(() => ExitPageCreateWithoutCommentsInput)
    create?: ExitPageCreateWithoutCommentsInput;

    @Field(() => ExitPageCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: ExitPageCreateOrConnectWithoutCommentsInput;

    @Field(() => ExitPageWhereUniqueInput, {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
}
