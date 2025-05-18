import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TemplateWhereInput } from './template-where.input';
import { Type } from 'class-transformer';
import { TemplateUpdateWithoutPagesInput } from './template-update-without-pages.input';

@InputType()
export class TemplateUpdateToOneWithWhereWithoutPagesInput {

    @Field(() => TemplateWhereInput, {nullable:true})
    @Type(() => TemplateWhereInput)
    where?: TemplateWhereInput;

    @Field(() => TemplateUpdateWithoutPagesInput, {nullable:false})
    @Type(() => TemplateUpdateWithoutPagesInput)
    data!: TemplateUpdateWithoutPagesInput;
}
