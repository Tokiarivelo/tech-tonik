import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutReactionsInput } from './user-update-without-reactions.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReactionsInput } from './user-create-without-reactions.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutReactionsInput {

    @Field(() => UserUpdateWithoutReactionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutReactionsInput)
    update!: UserUpdateWithoutReactionsInput;

    @Field(() => UserCreateWithoutReactionsInput, {nullable:false})
    @Type(() => UserCreateWithoutReactionsInput)
    create!: UserCreateWithoutReactionsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
