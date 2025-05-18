import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageCreateWithoutSharesInput } from './exit-page-create-without-shares.input';
import { Type } from 'class-transformer';
import { ExitPageCreateOrConnectWithoutSharesInput } from './exit-page-create-or-connect-without-shares.input';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';

@InputType()
export class ExitPageCreateNestedOneWithoutSharesInput {

    @Field(() => ExitPageCreateWithoutSharesInput, {nullable:true})
    @Type(() => ExitPageCreateWithoutSharesInput)
    create?: ExitPageCreateWithoutSharesInput;

    @Field(() => ExitPageCreateOrConnectWithoutSharesInput, {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutSharesInput)
    connectOrCreate?: ExitPageCreateOrConnectWithoutSharesInput;

    @Field(() => ExitPageWhereUniqueInput, {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
}
