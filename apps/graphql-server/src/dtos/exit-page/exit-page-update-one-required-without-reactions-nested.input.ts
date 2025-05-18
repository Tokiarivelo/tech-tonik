import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageCreateWithoutReactionsInput } from './exit-page-create-without-reactions.input';
import { Type } from 'class-transformer';
import { ExitPageCreateOrConnectWithoutReactionsInput } from './exit-page-create-or-connect-without-reactions.input';
import { ExitPageUpsertWithoutReactionsInput } from './exit-page-upsert-without-reactions.input';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';
import { ExitPageUpdateToOneWithWhereWithoutReactionsInput } from './exit-page-update-to-one-with-where-without-reactions.input';

@InputType()
export class ExitPageUpdateOneRequiredWithoutReactionsNestedInput {

    @Field(() => ExitPageCreateWithoutReactionsInput, {nullable:true})
    @Type(() => ExitPageCreateWithoutReactionsInput)
    create?: ExitPageCreateWithoutReactionsInput;

    @Field(() => ExitPageCreateOrConnectWithoutReactionsInput, {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutReactionsInput)
    connectOrCreate?: ExitPageCreateOrConnectWithoutReactionsInput;

    @Field(() => ExitPageUpsertWithoutReactionsInput, {nullable:true})
    @Type(() => ExitPageUpsertWithoutReactionsInput)
    upsert?: ExitPageUpsertWithoutReactionsInput;

    @Field(() => ExitPageWhereUniqueInput, {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ExitPageUpdateToOneWithWhereWithoutReactionsInput, {nullable:true})
    @Type(() => ExitPageUpdateToOneWithWhereWithoutReactionsInput)
    update?: ExitPageUpdateToOneWithWhereWithoutReactionsInput;
}
