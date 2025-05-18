import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutVersionsInput } from './user-create-without-versions.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutVersionsInput } from './user-create-or-connect-without-versions.input';
import { UserUpsertWithoutVersionsInput } from './user-upsert-without-versions.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutVersionsInput } from './user-update-to-one-with-where-without-versions.input';

@InputType()
export class UserUpdateOneWithoutVersionsNestedInput {

    @Field(() => UserCreateWithoutVersionsInput, {nullable:true})
    @Type(() => UserCreateWithoutVersionsInput)
    create?: UserCreateWithoutVersionsInput;

    @Field(() => UserCreateOrConnectWithoutVersionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutVersionsInput)
    connectOrCreate?: UserCreateOrConnectWithoutVersionsInput;

    @Field(() => UserUpsertWithoutVersionsInput, {nullable:true})
    @Type(() => UserUpsertWithoutVersionsInput)
    upsert?: UserUpsertWithoutVersionsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserUpdateToOneWithWhereWithoutVersionsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutVersionsInput)
    update?: UserUpdateToOneWithWhereWithoutVersionsInput;
}
