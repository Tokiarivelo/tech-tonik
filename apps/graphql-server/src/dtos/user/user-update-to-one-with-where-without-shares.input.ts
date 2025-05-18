import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutSharesInput } from './user-update-without-shares.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutSharesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutSharesInput, {nullable:false})
    @Type(() => UserUpdateWithoutSharesInput)
    data!: UserUpdateWithoutSharesInput;
}
