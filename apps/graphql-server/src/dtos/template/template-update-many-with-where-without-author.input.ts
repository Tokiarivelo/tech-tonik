import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TemplateScalarWhereInput } from './template-scalar-where.input';
import { Type } from 'class-transformer';
import { TemplateUpdateManyMutationInput } from './template-update-many-mutation.input';

@InputType()
export class TemplateUpdateManyWithWhereWithoutAuthorInput {

    @Field(() => TemplateScalarWhereInput, {nullable:false})
    @Type(() => TemplateScalarWhereInput)
    where!: TemplateScalarWhereInput;

    @Field(() => TemplateUpdateManyMutationInput, {nullable:false})
    @Type(() => TemplateUpdateManyMutationInput)
    data!: TemplateUpdateManyMutationInput;
}
