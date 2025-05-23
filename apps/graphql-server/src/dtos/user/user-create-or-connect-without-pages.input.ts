import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPagesInput } from './user-create-without-pages.input';

@InputType()
export class UserCreateOrConnectWithoutPagesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserCreateWithoutPagesInput, {nullable:false})
    @Type(() => UserCreateWithoutPagesInput)
    create!: UserCreateWithoutPagesInput;
}
