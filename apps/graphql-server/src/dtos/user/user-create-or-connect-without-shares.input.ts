import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSharesInput } from './user-create-without-shares.input';

@InputType()
export class UserCreateOrConnectWithoutSharesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserCreateWithoutSharesInput, {nullable:false})
    @Type(() => UserCreateWithoutSharesInput)
    create!: UserCreateWithoutSharesInput;
}
