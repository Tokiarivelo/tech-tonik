import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReactionType } from '../prisma/reaction-type.enum';

@InputType()
export class ReactionUncheckedCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    pageId!: string;

    @Field(() => ReactionType, {nullable:false})
    type!: `${ReactionType}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
