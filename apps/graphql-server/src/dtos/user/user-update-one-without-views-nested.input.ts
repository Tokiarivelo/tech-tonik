import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutViewsInput } from './user-create-without-views.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutViewsInput } from './user-create-or-connect-without-views.input';
import { UserUpsertWithoutViewsInput } from './user-upsert-without-views.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutViewsInput } from './user-update-to-one-with-where-without-views.input';

@InputType()
export class UserUpdateOneWithoutViewsNestedInput {

    @Field(() => UserCreateWithoutViewsInput, {nullable:true})
    @Type(() => UserCreateWithoutViewsInput)
    create?: UserCreateWithoutViewsInput;

    @Field(() => UserCreateOrConnectWithoutViewsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutViewsInput)
    connectOrCreate?: UserCreateOrConnectWithoutViewsInput;

    @Field(() => UserUpsertWithoutViewsInput, {nullable:true})
    @Type(() => UserUpsertWithoutViewsInput)
    upsert?: UserUpsertWithoutViewsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserUpdateToOneWithWhereWithoutViewsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutViewsInput)
    update?: UserUpdateToOneWithWhereWithoutViewsInput;
}
