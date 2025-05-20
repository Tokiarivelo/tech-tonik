import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TemplateCreateManyAuthorInput } from './template-create-many-author.input';
import { Type } from 'class-transformer';

@InputType()
export class TemplateCreateManyAuthorInputEnvelope {

    @Field(() => [TemplateCreateManyAuthorInput], {nullable:false})
    @Type(() => TemplateCreateManyAuthorInput)
    data!: Array<TemplateCreateManyAuthorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
