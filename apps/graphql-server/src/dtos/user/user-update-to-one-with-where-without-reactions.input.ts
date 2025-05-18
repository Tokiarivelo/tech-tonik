import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutReactionsInput } from './user-update-without-reactions.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutReactionsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutReactionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutReactionsInput)
    data!: UserUpdateWithoutReactionsInput;
}
