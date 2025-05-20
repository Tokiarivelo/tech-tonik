import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTemplateInput } from './user-create-without-template.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTemplateInput } from './user-create-or-connect-without-template.input';
import { UserUpsertWithoutTemplateInput } from './user-upsert-without-template.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutTemplateInput } from './user-update-to-one-with-where-without-template.input';

@InputType()
export class UserUpdateOneWithoutTemplateNestedInput {

    @Field(() => UserCreateWithoutTemplateInput, {nullable:true})
    @Type(() => UserCreateWithoutTemplateInput)
    create?: UserCreateWithoutTemplateInput;

    @Field(() => UserCreateOrConnectWithoutTemplateInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTemplateInput)
    connectOrCreate?: UserCreateOrConnectWithoutTemplateInput;

    @Field(() => UserUpsertWithoutTemplateInput, {nullable:true})
    @Type(() => UserUpsertWithoutTemplateInput)
    upsert?: UserUpsertWithoutTemplateInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserUpdateToOneWithWhereWithoutTemplateInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutTemplateInput)
    update?: UserUpdateToOneWithWhereWithoutTemplateInput;
}
