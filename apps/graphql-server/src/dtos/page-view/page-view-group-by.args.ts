import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PageViewWhereInput } from './page-view-where.input';
import { Type } from 'class-transformer';
import { PageViewOrderByWithAggregationInput } from './page-view-order-by-with-aggregation.input';
import { PageViewScalarFieldEnum } from './page-view-scalar-field.enum';
import { PageViewScalarWhereWithAggregatesInput } from './page-view-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PageViewCountAggregateInput } from './page-view-count-aggregate.input';
import { PageViewMinAggregateInput } from './page-view-min-aggregate.input';
import { PageViewMaxAggregateInput } from './page-view-max-aggregate.input';

@ArgsType()
export class PageViewGroupByArgs {

    @Field(() => PageViewWhereInput, {nullable:true})
    @Type(() => PageViewWhereInput)
    where?: PageViewWhereInput;

    @Field(() => [PageViewOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PageViewOrderByWithAggregationInput>;

    @Field(() => [PageViewScalarFieldEnum], {nullable:false})
    by!: Array<`${PageViewScalarFieldEnum}`>;

    @Field(() => PageViewScalarWhereWithAggregatesInput, {nullable:true})
    having?: PageViewScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PageViewCountAggregateInput, {nullable:true})
    _count?: PageViewCountAggregateInput;

    @Field(() => PageViewMinAggregateInput, {nullable:true})
    _min?: PageViewMinAggregateInput;

    @Field(() => PageViewMaxAggregateInput, {nullable:true})
    _max?: PageViewMaxAggregateInput;
}
