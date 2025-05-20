import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TemplateWhereUniqueInput } from './template-where-unique.input';
import { Type } from 'class-transformer';
import { TemplateCreateWithoutAuthorInput } from './template-create-without-author.input';

@InputType()
export class TemplateCreateOrConnectWithoutAuthorInput {

    @Field(() => TemplateWhereUniqueInput, {nullable:false})
    @Type(() => TemplateWhereUniqueInput)
    where!: Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>;

    @Field(() => TemplateCreateWithoutAuthorInput, {nullable:false})
    @Type(() => TemplateCreateWithoutAuthorInput)
    create!: TemplateCreateWithoutAuthorInput;
}
