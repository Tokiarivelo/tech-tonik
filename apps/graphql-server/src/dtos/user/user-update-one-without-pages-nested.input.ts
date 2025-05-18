import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPagesInput } from './user-create-without-pages.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPagesInput } from './user-create-or-connect-without-pages.input';
import { UserUpsertWithoutPagesInput } from './user-upsert-without-pages.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutPagesInput } from './user-update-to-one-with-where-without-pages.input';

@InputType()
export class UserUpdateOneWithoutPagesNestedInput {

    @Field(() => UserCreateWithoutPagesInput, {nullable:true})
    @Type(() => UserCreateWithoutPagesInput)
    create?: UserCreateWithoutPagesInput;

    @Field(() => UserCreateOrConnectWithoutPagesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPagesInput)
    connectOrCreate?: UserCreateOrConnectWithoutPagesInput;

    @Field(() => UserUpsertWithoutPagesInput, {nullable:true})
    @Type(() => UserUpsertWithoutPagesInput)
    upsert?: UserUpsertWithoutPagesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserUpdateToOneWithWhereWithoutPagesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutPagesInput)
    update?: UserUpdateToOneWithWhereWithoutPagesInput;
}
