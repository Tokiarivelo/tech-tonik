import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TemplateWhereUniqueInput } from './template-where-unique.input';
import { Type } from 'class-transformer';
import { TemplateCreateInput } from './template-create.input';
import { TemplateUpdateInput } from './template-update.input';

@ArgsType()
export class UpsertOneTemplateArgs {

    @Field(() => TemplateWhereUniqueInput, {nullable:false})
    @Type(() => TemplateWhereUniqueInput)
    where!: Prisma.AtLeast<TemplateWhereUniqueInput, 'id'>;

    @Field(() => TemplateCreateInput, {nullable:false})
    @Type(() => TemplateCreateInput)
    create!: TemplateCreateInput;

    @Field(() => TemplateUpdateInput, {nullable:false})
    @Type(() => TemplateUpdateInput)
    update!: TemplateUpdateInput;
}
