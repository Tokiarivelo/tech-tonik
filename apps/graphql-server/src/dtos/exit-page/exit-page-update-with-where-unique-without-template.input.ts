import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';
import { Type } from 'class-transformer';
import { ExitPageUpdateWithoutTemplateInput } from './exit-page-update-without-template.input';

@InputType()
export class ExitPageUpdateWithWhereUniqueWithoutTemplateInput {

    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ExitPageUpdateWithoutTemplateInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutTemplateInput)
    data!: ExitPageUpdateWithoutTemplateInput;
}
