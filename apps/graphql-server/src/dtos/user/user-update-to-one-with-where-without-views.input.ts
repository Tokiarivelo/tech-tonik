import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutViewsInput } from './user-update-without-views.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutViewsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutViewsInput, {nullable:false})
    @Type(() => UserUpdateWithoutViewsInput)
    data!: UserUpdateWithoutViewsInput;
}
