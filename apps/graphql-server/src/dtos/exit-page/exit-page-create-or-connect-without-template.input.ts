import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';
import { Type } from 'class-transformer';
import { ExitPageCreateWithoutTemplateInput } from './exit-page-create-without-template.input';

@InputType()
export class ExitPageCreateOrConnectWithoutTemplateInput {

    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ExitPageCreateWithoutTemplateInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutTemplateInput)
    create!: ExitPageCreateWithoutTemplateInput;
}
