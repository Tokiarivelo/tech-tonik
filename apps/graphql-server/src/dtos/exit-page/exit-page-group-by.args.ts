import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExitPageWhereInput } from './exit-page-where.input';
import { Type } from 'class-transformer';
import { ExitPageOrderByWithAggregationInput } from './exit-page-order-by-with-aggregation.input';
import { ExitPageScalarFieldEnum } from './exit-page-scalar-field.enum';
import { ExitPageScalarWhereWithAggregatesInput } from './exit-page-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ExitPageCountAggregateInput } from './exit-page-count-aggregate.input';
import { ExitPageMinAggregateInput } from './exit-page-min-aggregate.input';
import { ExitPageMaxAggregateInput } from './exit-page-max-aggregate.input';

@ArgsType()
export class ExitPageGroupByArgs {

    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: ExitPageWhereInput;

    @Field(() => [ExitPageOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ExitPageOrderByWithAggregationInput>;

    @Field(() => [ExitPageScalarFieldEnum], {nullable:false})
    by!: Array<`${ExitPageScalarFieldEnum}`>;

    @Field(() => ExitPageScalarWhereWithAggregatesInput, {nullable:true})
    having?: ExitPageScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ExitPageCountAggregateInput, {nullable:true})
    _count?: ExitPageCountAggregateInput;

    @Field(() => ExitPageMinAggregateInput, {nullable:true})
    _min?: ExitPageMinAggregateInput;

    @Field(() => ExitPageMaxAggregateInput, {nullable:true})
    _max?: ExitPageMaxAggregateInput;
}
