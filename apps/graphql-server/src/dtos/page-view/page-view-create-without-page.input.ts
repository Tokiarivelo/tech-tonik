import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutViewsInput } from '../user/user-create-nested-one-without-views.input';

@InputType()
export class PageViewCreateWithoutPageInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    sessionId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutViewsInput, {nullable:true})
    user?: UserCreateNestedOneWithoutViewsInput;
}
