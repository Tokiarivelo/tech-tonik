import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ExitPageUncheckedCreateNestedManyWithoutTemplateInput } from '../exit-page/exit-page-unchecked-create-nested-many-without-template.input';

@InputType()
export class TemplateUncheckedCreateWithoutAuthorInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    uniqueKey!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    placeholders!: any;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ExitPageUncheckedCreateNestedManyWithoutTemplateInput, {nullable:true})
    pages?: ExitPageUncheckedCreateNestedManyWithoutTemplateInput;
}
