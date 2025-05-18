import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TemplateWhereInput } from './template-where.input';

@InputType()
export class TemplateScalarRelationFilter {

    @Field(() => TemplateWhereInput, {nullable:true})
    is?: TemplateWhereInput;

    @Field(() => TemplateWhereInput, {nullable:true})
    isNot?: TemplateWhereInput;
}
