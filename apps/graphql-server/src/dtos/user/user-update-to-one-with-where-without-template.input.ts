import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutTemplateInput } from './user-update-without-template.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutTemplateInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutTemplateInput, {nullable:false})
    @Type(() => UserUpdateWithoutTemplateInput)
    data!: UserUpdateWithoutTemplateInput;
}
