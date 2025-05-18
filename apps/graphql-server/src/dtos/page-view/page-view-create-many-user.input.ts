import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PageViewCreateManyUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    pageId!: string;

    @Field(() => String, {nullable:true})
    sessionId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
