import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutSharesInput } from './user-update-without-shares.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSharesInput } from './user-create-without-shares.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutSharesInput {

    @Field(() => UserUpdateWithoutSharesInput, {nullable:false})
    @Type(() => UserUpdateWithoutSharesInput)
    update!: UserUpdateWithoutSharesInput;

    @Field(() => UserCreateWithoutSharesInput, {nullable:false})
    @Type(() => UserCreateWithoutSharesInput)
    create!: UserCreateWithoutSharesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
