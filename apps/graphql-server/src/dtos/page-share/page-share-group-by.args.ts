import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PageShareWhereInput } from './page-share-where.input';
import { Type } from 'class-transformer';
import { PageShareOrderByWithAggregationInput } from './page-share-order-by-with-aggregation.input';
import { PageShareScalarFieldEnum } from './page-share-scalar-field.enum';
import { PageShareScalarWhereWithAggregatesInput } from './page-share-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PageShareCountAggregateInput } from './page-share-count-aggregate.input';
import { PageShareMinAggregateInput } from './page-share-min-aggregate.input';
import { PageShareMaxAggregateInput } from './page-share-max-aggregate.input';

@ArgsType()
export class PageShareGroupByArgs {

    @Field(() => PageShareWhereInput, {nullable:true})
    @Type(() => PageShareWhereInput)
    where?: PageShareWhereInput;

    @Field(() => [PageShareOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PageShareOrderByWithAggregationInput>;

    @Field(() => [PageShareScalarFieldEnum], {nullable:false})
    by!: Array<`${PageShareScalarFieldEnum}`>;

    @Field(() => PageShareScalarWhereWithAggregatesInput, {nullable:true})
    having?: PageShareScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PageShareCountAggregateInput, {nullable:true})
    _count?: PageShareCountAggregateInput;

    @Field(() => PageShareMinAggregateInput, {nullable:true})
    _min?: PageShareMinAggregateInput;

    @Field(() => PageShareMaxAggregateInput, {nullable:true})
    _max?: PageShareMaxAggregateInput;
}
