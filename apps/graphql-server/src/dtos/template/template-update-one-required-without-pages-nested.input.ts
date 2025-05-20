import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TemplateCreateWithoutPagesInput } from './template-create-without-pages.input';
import { Type } from 'class-transformer';
import { TemplateCreateOrConnectWithoutPagesInput } from './template-create-or-connect-without-pages.input';
import { TemplateUpsertWithoutPagesInput } from './template-upsert-without-pages.input';
import { Prisma } from '@prisma/client';
import { TemplateWhereUniqueInput } from './template-where-unique.input';
import { TemplateUpdateToOneWithWhereWithoutPagesInput } from './template-update-to-one-with-where-without-pages.input';

@InputType()
export class TemplateUpdateOneRequiredWithoutPagesNestedInput {

    @Field(() => TemplateCreateWithoutPagesInput, {nullable:true})
    @Type(() => TemplateCreateWithoutPagesInput)
    create?: TemplateCreateWithoutPagesInput;

    @Field(() => TemplateCreateOrConnectWithoutPagesInput, {nullable:true})
    @Type(() => TemplateCreateOrConnectWithoutPagesInput)
    connectOrCreate?: TemplateCreateOrConnectWithoutPagesInput;

    @Field(() => TemplateUpsertWithoutPagesInput, {nullable:true})
    @Type(() => TemplateUpsertWithoutPagesInput)
    upsert?: TemplateUpsertWithoutPagesInput;

    @Field(() => TemplateWhereUniqueInput, {nullable:true})
    @Type(() => TemplateWhereUniqueInput)
    connect?: Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>;

    @Field(() => TemplateUpdateToOneWithWhereWithoutPagesInput, {nullable:true})
    @Type(() => TemplateUpdateToOneWithWhereWithoutPagesInput)
    update?: TemplateUpdateToOneWithWhereWithoutPagesInput;
}
