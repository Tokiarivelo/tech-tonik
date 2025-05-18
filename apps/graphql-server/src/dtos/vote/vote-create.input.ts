import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageCreateNestedOneWithoutVotesInput } from '../exit-page/exit-page-create-nested-one-without-votes.input';
import { UserCreateNestedOneWithoutVotesInput } from '../user/user-create-nested-one-without-votes.input';

@InputType()
export class VoteCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ExitPageCreateNestedOneWithoutVotesInput, {nullable:false})
    page!: ExitPageCreateNestedOneWithoutVotesInput;

    @Field(() => UserCreateNestedOneWithoutVotesInput, {nullable:true})
    user?: UserCreateNestedOneWithoutVotesInput;
}
