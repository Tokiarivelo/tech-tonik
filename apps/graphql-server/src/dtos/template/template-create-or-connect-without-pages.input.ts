import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TemplateWhereUniqueInput } from './template-where-unique.input';
import { Type } from 'class-transformer';
import { TemplateCreateWithoutPagesInput } from './template-create-without-pages.input';

@InputType()
export class TemplateCreateOrConnectWithoutPagesInput {

    @Field(() => TemplateWhereUniqueInput, {nullable:false})
    @Type(() => TemplateWhereUniqueInput)
    where!: Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'uniqueKey'>;

    @Field(() => TemplateCreateWithoutPagesInput, {nullable:false})
    @Type(() => TemplateCreateWithoutPagesInput)
    create!: TemplateCreateWithoutPagesInput;
}
