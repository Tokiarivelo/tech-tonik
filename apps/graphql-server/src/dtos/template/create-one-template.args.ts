import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TemplateCreateInput } from './template-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTemplateArgs {

    @Field(() => TemplateCreateInput, {nullable:false})
    @Type(() => TemplateCreateInput)
    data!: TemplateCreateInput;
}
