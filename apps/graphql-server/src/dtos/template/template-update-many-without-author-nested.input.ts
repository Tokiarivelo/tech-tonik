import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TemplateCreateWithoutAuthorInput } from './template-create-without-author.input';
import { Type } from 'class-transformer';
import { TemplateCreateOrConnectWithoutAuthorInput } from './template-create-or-connect-without-author.input';
import { TemplateUpsertWithWhereUniqueWithoutAuthorInput } from './template-upsert-with-where-unique-without-author.input';
import { TemplateCreateManyAuthorInputEnvelope } from './template-create-many-author-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TemplateWhereUniqueInput } from './template-where-unique.input';
import { TemplateUpdateWithWhereUniqueWithoutAuthorInput } from './template-update-with-where-unique-without-author.input';
import { TemplateUpdateManyWithWhereWithoutAuthorInput } from './template-update-many-with-where-without-author.input';
import { TemplateScalarWhereInput } from './template-scalar-where.input';

@InputType()
export class TemplateUpdateManyWithoutAuthorNestedInput {

    @Field(() => [TemplateCreateWithoutAuthorInput], {nullable:true})
    @Type(() => TemplateCreateWithoutAuthorInput)
    create?: Array<TemplateCreateWithoutAuthorInput>;

    @Field(() => [TemplateCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => TemplateCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<TemplateCreateOrConnectWithoutAuthorInput>;

    @Field(() => [TemplateUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => TemplateUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<TemplateUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => TemplateCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => TemplateCreateManyAuthorInputEnvelope)
    createMany?: TemplateCreateManyAuthorInputEnvelope;

    @Field(() => [TemplateWhereUniqueInput], {nullable:true})
    @Type(() => TemplateWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>>;

    @Field(() => [TemplateWhereUniqueInput], {nullable:true})
    @Type(() => TemplateWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>>;

    @Field(() => [TemplateWhereUniqueInput], {nullable:true})
    @Type(() => TemplateWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>>;

    @Field(() => [TemplateWhereUniqueInput], {nullable:true})
    @Type(() => TemplateWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>>;

    @Field(() => [TemplateUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => TemplateUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<TemplateUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [TemplateUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => TemplateUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<TemplateUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [TemplateScalarWhereInput], {nullable:true})
    @Type(() => TemplateScalarWhereInput)
    deleteMany?: Array<TemplateScalarWhereInput>;
}
