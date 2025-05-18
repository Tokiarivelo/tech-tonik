import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPagesInput } from './user-create-without-pages.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPagesInput } from './user-create-or-connect-without-pages.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPagesInput {

    @Field(() => UserCreateWithoutPagesInput, {nullable:true})
    @Type(() => UserCreateWithoutPagesInput)
    create?: UserCreateWithoutPagesInput;

    @Field(() => UserCreateOrConnectWithoutPagesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPagesInput)
    connectOrCreate?: UserCreateOrConnectWithoutPagesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}
