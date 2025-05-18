import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutVotesInput } from '../user/user-create-nested-one-without-votes.input';

@InputType()
export class VoteCreateWithoutPageInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutVotesInput, {nullable:true})
    user?: UserCreateNestedOneWithoutVotesInput;
}
