import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TemplateWhereInput } from './template-where.input';
import { Type } from 'class-transformer';
import { TemplateOrderByWithAggregationInput } from './template-order-by-with-aggregation.input';
import { TemplateScalarFieldEnum } from './template-scalar-field.enum';
import { TemplateScalarWhereWithAggregatesInput } from './template-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TemplateCountAggregateInput } from './template-count-aggregate.input';
import { TemplateMinAggregateInput } from './template-min-aggregate.input';
import { TemplateMaxAggregateInput } from './template-max-aggregate.input';

@ArgsType()
export class TemplateGroupByArgs {

    @Field(() => TemplateWhereInput, {nullable:true})
    @Type(() => TemplateWhereInput)
    where?: TemplateWhereInput;

    @Field(() => [TemplateOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TemplateOrderByWithAggregationInput>;

    @Field(() => [TemplateScalarFieldEnum], {nullable:false})
    by!: Array<`${TemplateScalarFieldEnum}`>;

    @Field(() => TemplateScalarWhereWithAggregatesInput, {nullable:true})
    having?: TemplateScalarWhereWithAggregatesInput;

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
