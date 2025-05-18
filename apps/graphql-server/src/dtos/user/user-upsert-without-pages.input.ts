import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPagesInput } from './user-update-without-pages.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPagesInput } from './user-create-without-pages.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutPagesInput {

    @Field(() => UserUpdateWithoutPagesInput, {nullable:false})
    @Type(() => UserUpdateWithoutPagesInput)
    update!: UserUpdateWithoutPagesInput;

    @Field(() => UserCreateWithoutPagesInput, {nullable:false})
    @Type(() => UserCreateWithoutPagesInput)
    create!: UserCreateWithoutPagesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
