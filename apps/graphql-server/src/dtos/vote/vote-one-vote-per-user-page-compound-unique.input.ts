import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class VoteOne_vote_per_user_pageCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    pageId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;
}
