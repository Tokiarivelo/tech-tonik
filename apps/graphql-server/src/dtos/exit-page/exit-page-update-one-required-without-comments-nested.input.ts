import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageCreateWithoutCommentsInput } from './exit-page-create-without-comments.input';
import { Type } from 'class-transformer';
import { ExitPageCreateOrConnectWithoutCommentsInput } from './exit-page-create-or-connect-without-comments.input';
import { ExitPageUpsertWithoutCommentsInput } from './exit-page-upsert-without-comments.input';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';
import { ExitPageUpdateToOneWithWhereWithoutCommentsInput } from './exit-page-update-to-one-with-where-without-comments.input';

@InputType()
export class ExitPageUpdateOneRequiredWithoutCommentsNestedInput {

    @Field(() => ExitPageCreateWithoutCommentsInput, {nullable:true})
    @Type(() => ExitPageCreateWithoutCommentsInput)
    create?: ExitPageCreateWithoutCommentsInput;

    @Field(() => ExitPageCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: ExitPageCreateOrConnectWithoutCommentsInput;

    @Field(() => ExitPageUpsertWithoutCommentsInput, {nullable:true})
    @Type(() => ExitPageUpsertWithoutCommentsInput)
    upsert?: ExitPageUpsertWithoutCommentsInput;

    @Field(() => ExitPageWhereUniqueInput, {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ExitPageUpdateToOneWithWhereWithoutCommentsInput, {nullable:true})
    @Type(() => ExitPageUpdateToOneWithWhereWithoutCommentsInput)
    update?: ExitPageUpdateToOneWithWhereWithoutCommentsInput;
}
