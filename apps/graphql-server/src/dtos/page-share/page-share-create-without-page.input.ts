import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutSharesInput } from '../user/user-create-nested-one-without-shares.input';

@InputType()
export class PageShareCreateWithoutPageInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    platform!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutSharesInput, {nullable:true})
    user?: UserCreateNestedOneWithoutSharesInput;
}
