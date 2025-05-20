import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TemplateWhereUniqueInput } from './template-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueTemplateOrThrowArgs {

    @Field(() => TemplateWhereUniqueInput, {nullable:false})
    @Type(() => TemplateWhereUniqueInput)
    where!: Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>;
}
