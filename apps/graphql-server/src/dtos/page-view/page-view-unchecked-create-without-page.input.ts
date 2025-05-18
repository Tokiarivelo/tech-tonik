import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PageViewUncheckedCreateWithoutPageInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:true})
    sessionId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
