import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PageVersionCountAggregate } from './page-version-count-aggregate.output';
import { PageVersionAvgAggregate } from './page-version-avg-aggregate.output';
import { PageVersionSumAggregate } from './page-version-sum-aggregate.output';
import { PageVersionMinAggregate } from './page-version-min-aggregate.output';
import { PageVersionMaxAggregate } from './page-version-max-aggregate.output';

@ObjectType()
export class AggregatePageVersion {

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
