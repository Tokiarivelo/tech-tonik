import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TemplateWhereInput } from './template-where.input';
import { Type } from 'class-transformer';
import { TemplateOrderByWithRelationInput } from './template-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TemplateWhereUniqueInput } from './template-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TemplateCountAggregateInput } from './template-count-aggregate.input';
import { TemplateMinAggregateInput } from './template-min-aggregate.input';
import { TemplateMaxAggregateInput } from './template-max-aggregate.input';

@ArgsType()
export class TemplateAggregateArgs {

    @Field(() => TemplateWhereInput, {nullable:true})
    @Type(() => TemplateWhereInput)
    where?: TemplateWhereInput;

    @Field(() => [TemplateOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TemplateOrderByWithRelationInput>;

    @Field(() => TemplateWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'uniqueKey'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TemplateCountAggregateInput, {nullable:true})
    _count?: TemplateCountAggregateInput;

    @Field(() => TemplateMinAggregateInput, {nullable:true})
    _min?: TemplateMinAggregateInput;

    @Field(() => TemplateMaxAggregateInput, {nullable:true})
    _max?: TemplateMaxAggregateInput;
}
