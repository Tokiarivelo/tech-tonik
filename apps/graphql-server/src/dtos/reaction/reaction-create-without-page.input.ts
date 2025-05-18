import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReactionType } from '../prisma/reaction-type.enum';
import { UserCreateNestedOneWithoutReactionsInput } from '../user/user-create-nested-one-without-reactions.input';

@InputType()
export class ReactionCreateWithoutPageInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ReactionType, {nullable:false})
    type!: `${ReactionType}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutReactionsInput, {nullable:true})
    user?: UserCreateNestedOneWithoutReactionsInput;
}
