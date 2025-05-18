import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReactionsInput } from './user-create-without-reactions.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReactionsInput } from './user-create-or-connect-without-reactions.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutReactionsInput {

    @Field(() => UserCreateWithoutReactionsInput, {nullable:true})
    @Type(() => UserCreateWithoutReactionsInput)
    create?: UserCreateWithoutReactionsInput;

    @Field(() => UserCreateOrConnectWithoutReactionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReactionsInput)
    connectOrCreate?: UserCreateOrConnectWithoutReactionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}
