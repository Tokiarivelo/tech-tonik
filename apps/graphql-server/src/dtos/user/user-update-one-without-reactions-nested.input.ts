import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReactionsInput } from './user-create-without-reactions.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReactionsInput } from './user-create-or-connect-without-reactions.input';
import { UserUpsertWithoutReactionsInput } from './user-upsert-without-reactions.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutReactionsInput } from './user-update-to-one-with-where-without-reactions.input';

@InputType()
export class UserUpdateOneWithoutReactionsNestedInput {

    @Field(() => UserCreateWithoutReactionsInput, {nullable:true})
    @Type(() => UserCreateWithoutReactionsInput)
    create?: UserCreateWithoutReactionsInput;

    @Field(() => UserCreateOrConnectWithoutReactionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReactionsInput)
    connectOrCreate?: UserCreateOrConnectWithoutReactionsInput;

    @Field(() => UserUpsertWithoutReactionsInput, {nullable:true})
    @Type(() => UserUpsertWithoutReactionsInput)
    upsert?: UserUpsertWithoutReactionsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserUpdateToOneWithWhereWithoutReactionsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutReactionsInput)
    update?: UserUpdateToOneWithWhereWithoutReactionsInput;
}
