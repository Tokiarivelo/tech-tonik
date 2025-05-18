import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageCreateWithoutTemplateInput } from './exit-page-create-without-template.input';
import { Type } from 'class-transformer';
import { ExitPageCreateOrConnectWithoutTemplateInput } from './exit-page-create-or-connect-without-template.input';
import { ExitPageUpsertWithWhereUniqueWithoutTemplateInput } from './exit-page-upsert-with-where-unique-without-template.input';
import { ExitPageCreateManyTemplateInputEnvelope } from './exit-page-create-many-template-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';
import { ExitPageUpdateWithWhereUniqueWithoutTemplateInput } from './exit-page-update-with-where-unique-without-template.input';
import { ExitPageUpdateManyWithWhereWithoutTemplateInput } from './exit-page-update-many-with-where-without-template.input';
import { ExitPageScalarWhereInput } from './exit-page-scalar-where.input';

@InputType()
export class ExitPageUpdateManyWithoutTemplateNestedInput {

    @Field(() => [ExitPageCreateWithoutTemplateInput], {nullable:true})
    @Type(() => ExitPageCreateWithoutTemplateInput)
    create?: Array<ExitPageCreateWithoutTemplateInput>;

    @Field(() => [ExitPageCreateOrConnectWithoutTemplateInput], {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutTemplateInput)
    connectOrCreate?: Array<ExitPageCreateOrConnectWithoutTemplateInput>;

    @Field(() => [ExitPageUpsertWithWhereUniqueWithoutTemplateInput], {nullable:true})
    @Type(() => ExitPageUpsertWithWhereUniqueWithoutTemplateInput)
    upsert?: Array<ExitPageUpsertWithWhereUniqueWithoutTemplateInput>;

    @Field(() => ExitPageCreateManyTemplateInputEnvelope, {nullable:true})
    @Type(() => ExitPageCreateManyTemplateInputEnvelope)
    createMany?: ExitPageCreateManyTemplateInputEnvelope;

    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [ExitPageUpdateWithWhereUniqueWithoutTemplateInput], {nullable:true})
    @Type(() => ExitPageUpdateWithWhereUniqueWithoutTemplateInput)
    update?: Array<ExitPageUpdateWithWhereUniqueWithoutTemplateInput>;

    @Field(() => [ExitPageUpdateManyWithWhereWithoutTemplateInput], {nullable:true})
    @Type(() => ExitPageUpdateManyWithWhereWithoutTemplateInput)
    updateMany?: Array<ExitPageUpdateManyWithWhereWithoutTemplateInput>;

    @Field(() => [ExitPageScalarWhereInput], {nullable:true})
    @Type(() => ExitPageScalarWhereInput)
    deleteMany?: Array<ExitPageScalarWhereInput>;
}
