import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutVersionsInput } from './user-update-without-versions.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutVersionsInput } from './user-create-without-versions.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutVersionsInput {

    @Field(() => UserUpdateWithoutVersionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutVersionsInput)
    update!: UserUpdateWithoutVersionsInput;

    @Field(() => UserCreateWithoutVersionsInput, {nullable:false})
    @Type(() => UserCreateWithoutVersionsInput)
    create!: UserCreateWithoutVersionsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
