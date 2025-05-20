import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TemplateWhereInput } from './template-where.input';
import { Type } from 'class-transformer';
import { TemplateOrderByWithRelationInput } from './template-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TemplateWhereUniqueInput } from './template-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TemplateScalarFieldEnum } from './template-scalar-field.enum';

@ArgsType()
export class FindManyTemplateArgs {

    @Field(() => TemplateWhereInput, {nullable:true})
    @Type(() => TemplateWhereInput)
    where?: TemplateWhereInput;

    @Field(() => [TemplateOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TemplateOrderByWithRelationInput>;

    @Field(() => TemplateWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TemplateScalarFieldEnum], {nullable:true})
    distinct?: Array<`${TemplateScalarFieldEnum}`>;
}
