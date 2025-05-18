import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { PageVersionCountAggregate } from './page-version-count-aggregate.output';
import { PageVersionAvgAggregate } from './page-version-avg-aggregate.output';
import { PageVersionSumAggregate } from './page-version-sum-aggregate.output';
import { PageVersionMinAggregate } from './page-version-min-aggregate.output';
import { PageVersionMaxAggregate } from './page-version-max-aggregate.output';

@ObjectType()
export class PageVersionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    pageId!: string;

    @Field(() => Int, {nullable:false})
    version!: number;

    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;

    @Field(() => String, {nullable:true})
    updatedById?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => PageVersionCountAggregate, {nullable:true})
    _count?: PageVersionCountAggregate;

    @Field(() => PageVersionAvgAggregate, {nullable:true})
    _avg?: PageVersionAvgAggregate;

    @Field(() => PageVersionSumAggregate, {nullable:true})
    _sum?: PageVersionSumAggregate;

    @Field(() => PageVersionMinAggregate, {nullable:true})
    _min?: PageVersionMinAggregate;

    @Field(() => PageVersionMaxAggregate, {nullable:true})
    _max?: PageVersionMaxAggregate;
}
