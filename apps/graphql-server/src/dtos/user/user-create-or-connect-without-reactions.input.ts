import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReactionsInput } from './user-create-without-reactions.input';

@InputType()
export class UserCreateOrConnectWithoutReactionsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserCreateWithoutReactionsInput, {nullable:false})
    @Type(() => UserCreateWithoutReactionsInput)
    create!: UserCreateWithoutReactionsInput;
}
