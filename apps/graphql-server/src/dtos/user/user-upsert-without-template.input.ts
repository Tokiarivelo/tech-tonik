import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutTemplateInput } from './user-update-without-template.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutTemplateInput } from './user-create-without-template.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutTemplateInput {

    @Field(() => UserUpdateWithoutTemplateInput, {nullable:false})
    @Type(() => UserUpdateWithoutTemplateInput)
    update!: UserUpdateWithoutTemplateInput;

    @Field(() => UserCreateWithoutTemplateInput, {nullable:false})
    @Type(() => UserCreateWithoutTemplateInput)
    create!: UserCreateWithoutTemplateInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
