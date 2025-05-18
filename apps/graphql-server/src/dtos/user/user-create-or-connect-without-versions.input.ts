import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutVersionsInput } from './user-create-without-versions.input';

@InputType()
export class UserCreateOrConnectWithoutVersionsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserCreateWithoutVersionsInput, {nullable:false})
    @Type(() => UserCreateWithoutVersionsInput)
    create!: UserCreateWithoutVersionsInput;
}
