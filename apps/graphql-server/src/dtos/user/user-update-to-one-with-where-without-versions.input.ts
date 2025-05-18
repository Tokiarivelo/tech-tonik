import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutVersionsInput } from './user-update-without-versions.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutVersionsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutVersionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutVersionsInput)
    data!: UserUpdateWithoutVersionsInput;
}
