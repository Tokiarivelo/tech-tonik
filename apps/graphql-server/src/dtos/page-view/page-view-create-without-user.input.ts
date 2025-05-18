import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageCreateNestedOneWithoutViewsInput } from '../exit-page/exit-page-create-nested-one-without-views.input';

@InputType()
export class PageViewCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    sessionId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ExitPageCreateNestedOneWithoutViewsInput, {nullable:false})
    page!: ExitPageCreateNestedOneWithoutViewsInput;
}
