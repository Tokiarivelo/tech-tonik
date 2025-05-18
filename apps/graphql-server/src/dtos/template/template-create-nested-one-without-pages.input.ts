import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TemplateCreateWithoutPagesInput } from './template-create-without-pages.input';
import { Type } from 'class-transformer';
import { TemplateCreateOrConnectWithoutPagesInput } from './template-create-or-connect-without-pages.input';
import { Prisma } from '@prisma/client';
import { TemplateWhereUniqueInput } from './template-where-unique.input';

@InputType()
export class TemplateCreateNestedOneWithoutPagesInput {

    @Field(() => TemplateCreateWithoutPagesInput, {nullable:true})
    @Type(() => TemplateCreateWithoutPagesInput)
    create?: TemplateCreateWithoutPagesInput;

    @Field(() => TemplateCreateOrConnectWithoutPagesInput, {nullable:true})
    @Type(() => TemplateCreateOrConnectWithoutPagesInput)
    connectOrCreate?: TemplateCreateOrConnectWithoutPagesInput;

    @Field(() => TemplateWhereUniqueInput, {nullable:true})
    @Type(() => TemplateWhereUniqueInput)
    connect?: Prisma.AtLeast<TemplateWhereUniqueInput, 'id'>;
}
