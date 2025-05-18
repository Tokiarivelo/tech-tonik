import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutViewsInput } from './user-create-without-views.input';

@InputType()
export class UserCreateOrConnectWithoutViewsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserCreateWithoutViewsInput, {nullable:false})
    @Type(() => UserCreateWithoutViewsInput)
    create!: UserCreateWithoutViewsInput;
}
