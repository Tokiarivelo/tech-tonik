import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageCreateWithoutTemplateInput } from './exit-page-create-without-template.input';
import { Type } from 'class-transformer';
import { ExitPageCreateOrConnectWithoutTemplateInput } from './exit-page-create-or-connect-without-template.input';
import { ExitPageCreateManyTemplateInputEnvelope } from './exit-page-create-many-template-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';

@InputType()
export class ExitPageCreateNestedManyWithoutTemplateInput {

    @Field(() => [ExitPageCreateWithoutTemplateInput], {nullable:true})
    @Type(() => ExitPageCreateWithoutTemplateInput)
    create?: Array<ExitPageCreateWithoutTemplateInput>;

    @Field(() => [ExitPageCreateOrConnectWithoutTemplateInput], {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutTemplateInput)
    connectOrCreate?: Array<ExitPageCreateOrConnectWithoutTemplateInput>;

    @Field(() => ExitPageCreateManyTemplateInputEnvelope, {nullable:true})
    @Type(() => ExitPageCreateManyTemplateInputEnvelope)
    createMany?: ExitPageCreateManyTemplateInputEnvelope;

    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
}
