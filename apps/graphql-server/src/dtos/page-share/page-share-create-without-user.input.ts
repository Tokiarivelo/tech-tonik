import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageCreateNestedOneWithoutSharesInput } from '../exit-page/exit-page-create-nested-one-without-shares.input';

@InputType()
export class PageShareCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    platform!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ExitPageCreateNestedOneWithoutSharesInput, {nullable:false})
    page!: ExitPageCreateNestedOneWithoutSharesInput;
}
