import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSharesInput } from './user-create-without-shares.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSharesInput } from './user-create-or-connect-without-shares.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutSharesInput {

    @Field(() => UserCreateWithoutSharesInput, {nullable:true})
    @Type(() => UserCreateWithoutSharesInput)
    create?: UserCreateWithoutSharesInput;

    @Field(() => UserCreateOrConnectWithoutSharesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSharesInput)
    connectOrCreate?: UserCreateOrConnectWithoutSharesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}
