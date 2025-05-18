import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutPagesInput } from './user-update-without-pages.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutPagesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutPagesInput, {nullable:false})
    @Type(() => UserUpdateWithoutPagesInput)
    data!: UserUpdateWithoutPagesInput;
}
