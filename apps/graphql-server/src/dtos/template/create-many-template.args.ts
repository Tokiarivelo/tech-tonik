import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TemplateCreateManyInput } from './template-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTemplateArgs {

    @Field(() => [TemplateCreateManyInput], {nullable:false})
    @Type(() => TemplateCreateManyInput)
    data!: Array<TemplateCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
