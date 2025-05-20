import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutTemplateInput } from './user-create-without-template.input';

@InputType()
export class UserCreateOrConnectWithoutTemplateInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserCreateWithoutTemplateInput, {nullable:false})
    @Type(() => UserCreateWithoutTemplateInput)
    create!: UserCreateWithoutTemplateInput;
}
