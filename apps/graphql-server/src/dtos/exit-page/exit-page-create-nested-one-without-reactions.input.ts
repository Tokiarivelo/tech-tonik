import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageCreateWithoutReactionsInput } from './exit-page-create-without-reactions.input';
import { Type } from 'class-transformer';
import { ExitPageCreateOrConnectWithoutReactionsInput } from './exit-page-create-or-connect-without-reactions.input';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';

@InputType()
export class ExitPageCreateNestedOneWithoutReactionsInput {

    @Field(() => ExitPageCreateWithoutReactionsInput, {nullable:true})
    @Type(() => ExitPageCreateWithoutReactionsInput)
    create?: ExitPageCreateWithoutReactionsInput;

    @Field(() => ExitPageCreateOrConnectWithoutReactionsInput, {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutReactionsInput)
    connectOrCreate?: ExitPageCreateOrConnectWithoutReactionsInput;

    @Field(() => ExitPageWhereUniqueInput, {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
}
