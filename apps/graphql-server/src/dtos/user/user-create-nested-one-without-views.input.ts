import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutViewsInput } from './user-create-without-views.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutViewsInput } from './user-create-or-connect-without-views.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutViewsInput {

    @Field(() => UserCreateWithoutViewsInput, {nullable:true})
    @Type(() => UserCreateWithoutViewsInput)
    create?: UserCreateWithoutViewsInput;

    @Field(() => UserCreateOrConnectWithoutViewsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutViewsInput)
    connectOrCreate?: UserCreateOrConnectWithoutViewsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}
