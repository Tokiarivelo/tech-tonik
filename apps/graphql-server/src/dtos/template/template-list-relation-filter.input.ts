import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TemplateWhereInput } from './template-where.input';

@InputType()
export class TemplateListRelationFilter {

    @Field(() => TemplateWhereInput, {nullable:true})
    every?: TemplateWhereInput;

    @Field(() => TemplateWhereInput, {nullable:true})
    some?: TemplateWhereInput;

    @Field(() => TemplateWhereInput, {nullable:true})
    none?: TemplateWhereInput;
}
