import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReactionType } from '../prisma/reaction-type.enum';
import { ExitPageCreateNestedOneWithoutReactionsInput } from '../exit-page/exit-page-create-nested-one-without-reactions.input';
import { UserCreateNestedOneWithoutReactionsInput } from '../user/user-create-nested-one-without-reactions.input';

@InputType()
export class ReactionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ReactionType, {nullable:false})
    type!: `${ReactionType}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ExitPageCreateNestedOneWithoutReactionsInput, {nullable:false})
    page!: ExitPageCreateNestedOneWithoutReactionsInput;

    @Field(() => UserCreateNestedOneWithoutReactionsInput, {nullable:true})
    user?: UserCreateNestedOneWithoutReactionsInput;
}
