import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PageVersionWhereInput } from './page-version-where.input';
import { Type } from 'class-transformer';
import { PageVersionOrderByWithRelationInput } from './page-version-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PageVersionWhereUniqueInput } from './page-version-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PageVersionCountAggregateInput } from './page-version-count-aggregate.input';
import { PageVersionAvgAggregateInput } from './page-version-avg-aggregate.input';
import { PageVersionSumAggregateInput } from './page-version-sum-aggregate.input';
import { PageVersionMinAggregateInput } from './page-version-min-aggregate.input';
import { PageVersionMaxAggregateInput } from './page-version-max-aggregate.input';

@ArgsType()
export class PageVersionAggregateArgs {

    @Field(() => PageVersionWhereInput, {nullable:true})
    @Type(() => PageVersionWhereInput)
    where?: PageVersionWhereInput;

    @Field(() => [PageVersionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PageVersionOrderByWithRelationInput>;

    @Field(() => PageVersionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PageVersionCountAggregateInput, {nullable:true})
    _count?: PageVersionCountAggregateInput;

    @Field(() => PageVersionAvgAggregateInput, {nullable:true})
    _avg?: PageVersionAvgAggregateInput;

    @Field(() => PageVersionSumAggregateInput, {nullable:true})
    _sum?: PageVersionSumAggregateInput;

    @Field(() => PageVersionMinAggregateInput, {nullable:true})
    _min?: PageVersionMinAggregateInput;

    @Field(() => PageVersionMaxAggregateInput, {nullable:true})
    _max?: PageVersionMaxAggregateInput;
}
