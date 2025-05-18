import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';
import { Type } from 'class-transformer';
import { ExitPageUpdateWithoutTemplateInput } from './exit-page-update-without-template.input';
import { ExitPageCreateWithoutTemplateInput } from './exit-page-create-without-template.input';

@InputType()
export class ExitPageUpsertWithWhereUniqueWithoutTemplateInput {

    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ExitPageUpdateWithoutTemplateInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutTemplateInput)
    update!: ExitPageUpdateWithoutTemplateInput;

    @Field(() => ExitPageCreateWithoutTemplateInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutTemplateInput)
    create!: ExitPageCreateWithoutTemplateInput;
}
