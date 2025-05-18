import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TemplateUpdateManyMutationInput } from './template-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TemplateWhereInput } from './template-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyTemplateArgs {

    @Field(() => TemplateUpdateManyMutationInput, {nullable:false})
    @Type(() => TemplateUpdateManyMutationInput)
    data!: TemplateUpdateManyMutationInput;

    @Field(() => TemplateWhereInput, {nullable:true})
    @Type(() => TemplateWhereInput)
    where?: TemplateWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
