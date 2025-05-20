import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ExitPageCreateNestedManyWithoutTemplateInput } from '../exit-page/exit-page-create-nested-many-without-template.input';

@InputType()
export class TemplateCreateWithoutAuthorInput {

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

    @Field(() => ExitPageCreateNestedManyWithoutTemplateInput, {nullable:true})
    pages?: ExitPageCreateNestedManyWithoutTemplateInput;
}
