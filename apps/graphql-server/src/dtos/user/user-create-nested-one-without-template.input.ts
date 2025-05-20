import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTemplateInput } from './user-create-without-template.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTemplateInput } from './user-create-or-connect-without-template.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutTemplateInput {

    @Field(() => UserCreateWithoutTemplateInput, {nullable:true})
    @Type(() => UserCreateWithoutTemplateInput)
    create?: UserCreateWithoutTemplateInput;

    @Field(() => UserCreateOrConnectWithoutTemplateInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTemplateInput)
    connectOrCreate?: UserCreateOrConnectWithoutTemplateInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}
