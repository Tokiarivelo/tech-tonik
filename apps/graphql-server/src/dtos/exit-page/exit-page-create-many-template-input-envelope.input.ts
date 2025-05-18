import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageCreateManyTemplateInput } from './exit-page-create-many-template.input';
import { Type } from 'class-transformer';

@InputType()
export class ExitPageCreateManyTemplateInputEnvelope {

    @Field(() => [ExitPageCreateManyTemplateInput], {nullable:false})
    @Type(() => ExitPageCreateManyTemplateInput)
    data!: Array<ExitPageCreateManyTemplateInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
