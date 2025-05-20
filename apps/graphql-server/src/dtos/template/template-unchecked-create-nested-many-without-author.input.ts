import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TemplateCreateWithoutAuthorInput } from './template-create-without-author.input';
import { Type } from 'class-transformer';
import { TemplateCreateOrConnectWithoutAuthorInput } from './template-create-or-connect-without-author.input';
import { TemplateCreateManyAuthorInputEnvelope } from './template-create-many-author-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TemplateWhereUniqueInput } from './template-where-unique.input';

@InputType()
export class TemplateUncheckedCreateNestedManyWithoutAuthorInput {

    @Field(() => [TemplateCreateWithoutAuthorInput], {nullable:true})
    @Type(() => TemplateCreateWithoutAuthorInput)
    create?: Array<TemplateCreateWithoutAuthorInput>;

    @Field(() => [TemplateCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => TemplateCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<TemplateCreateOrConnectWithoutAuthorInput>;

    @Field(() => TemplateCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => TemplateCreateManyAuthorInputEnvelope)
    createMany?: TemplateCreateManyAuthorInputEnvelope;

    @Field(() => [TemplateWhereUniqueInput], {nullable:true})
    @Type(() => TemplateWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>>;
}
