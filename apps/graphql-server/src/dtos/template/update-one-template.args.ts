import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TemplateUpdateInput } from './template-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { TemplateWhereUniqueInput } from './template-where-unique.input';

@ArgsType()
export class UpdateOneTemplateArgs {

    @Field(() => TemplateUpdateInput, {nullable:false})
    @Type(() => TemplateUpdateInput)
    data!: TemplateUpdateInput;

    @Field(() => TemplateWhereUniqueInput, {nullable:false})
    @Type(() => TemplateWhereUniqueInput)
    where!: Prisma.AtLeast<TemplateWhereUniqueInput, 'id'>;
}
