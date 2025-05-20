import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TemplateWhereUniqueInput } from './template-where-unique.input';
import { Type } from 'class-transformer';
import { TemplateUpdateWithoutAuthorInput } from './template-update-without-author.input';

@InputType()
export class TemplateUpdateWithWhereUniqueWithoutAuthorInput {

    @Field(() => TemplateWhereUniqueInput, {nullable:false})
    @Type(() => TemplateWhereUniqueInput)
    where!: Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>;

    @Field(() => TemplateUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => TemplateUpdateWithoutAuthorInput)
    data!: TemplateUpdateWithoutAuthorInput;
}
