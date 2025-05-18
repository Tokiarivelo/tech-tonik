import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutVersionsInput } from './user-create-without-versions.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutVersionsInput } from './user-create-or-connect-without-versions.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutVersionsInput {

    @Field(() => UserCreateWithoutVersionsInput, {nullable:true})
    @Type(() => UserCreateWithoutVersionsInput)
    create?: UserCreateWithoutVersionsInput;

    @Field(() => UserCreateOrConnectWithoutVersionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutVersionsInput)
    connectOrCreate?: UserCreateOrConnectWithoutVersionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}
