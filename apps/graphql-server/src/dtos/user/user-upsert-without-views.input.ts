import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutViewsInput } from './user-update-without-views.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutViewsInput } from './user-create-without-views.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutViewsInput {

    @Field(() => UserUpdateWithoutViewsInput, {nullable:false})
    @Type(() => UserUpdateWithoutViewsInput)
    update!: UserUpdateWithoutViewsInput;

    @Field(() => UserCreateWithoutViewsInput, {nullable:false})
    @Type(() => UserCreateWithoutViewsInput)
    create!: UserCreateWithoutViewsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
