import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PageViewWhereInput } from './page-view-where.input';
import { Type } from 'class-transformer';
import { PageViewOrderByWithRelationInput } from './page-view-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PageViewWhereUniqueInput } from './page-view-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PageViewCountAggregateInput } from './page-view-count-aggregate.input';
import { PageViewMinAggregateInput } from './page-view-min-aggregate.input';
import { PageViewMaxAggregateInput } from './page-view-max-aggregate.input';

@ArgsType()
export class PageViewAggregateArgs {

    @Field(() => PageViewWhereInput, {nullable:true})
    @Type(() => PageViewWhereInput)
    where?: PageViewWhereInput;

    @Field(() => [PageViewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PageViewOrderByWithRelationInput>;

    @Field(() => PageViewWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>;

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
