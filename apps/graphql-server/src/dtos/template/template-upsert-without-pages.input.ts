import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TemplateUpdateWithoutPagesInput } from './template-update-without-pages.input';
import { Type } from 'class-transformer';
import { TemplateCreateWithoutPagesInput } from './template-create-without-pages.input';
import { TemplateWhereInput } from './template-where.input';

@InputType()
export class TemplateUpsertWithoutPagesInput {

    @Field(() => TemplateUpdateWithoutPagesInput, {nullable:false})
    @Type(() => TemplateUpdateWithoutPagesInput)
    update!: TemplateUpdateWithoutPagesInput;

    @Field(() => TemplateCreateWithoutPagesInput, {nullable:false})
    @Type(() => TemplateCreateWithoutPagesInput)
    create!: TemplateCreateWithoutPagesInput;

    @Field(() => TemplateWhereInput, {nullable:true})
    @Type(() => TemplateWhereInput)
    where?: TemplateWhereInput;
}
