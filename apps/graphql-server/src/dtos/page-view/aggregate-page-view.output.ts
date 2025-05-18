import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PageViewCountAggregate } from './page-view-count-aggregate.output';
import { PageViewMinAggregate } from './page-view-min-aggregate.output';
import { PageViewMaxAggregate } from './page-view-max-aggregate.output';

@ObjectType()
export class AggregatePageView {

    @Field(() => PageViewCountAggregate, {nullable:true})
    _count?: PageViewCountAggregate;

    @Field(() => PageViewMinAggregate, {nullable:true})
    _min?: PageViewMinAggregate;

    @Field(() => PageViewMaxAggregate, {nullable:true})
    _max?: PageViewMaxAggregate;
}
