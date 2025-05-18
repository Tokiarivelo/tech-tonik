import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PageShareCountAggregate } from './page-share-count-aggregate.output';
import { PageShareMinAggregate } from './page-share-min-aggregate.output';
import { PageShareMaxAggregate } from './page-share-max-aggregate.output';

@ObjectType()
export class AggregatePageShare {

    @Field(() => PageShareCountAggregate, {nullable:true})
    _count?: PageShareCountAggregate;

    @Field(() => PageShareMinAggregate, {nullable:true})
    _min?: PageShareMinAggregate;

    @Field(() => PageShareMaxAggregate, {nullable:true})
    _max?: PageShareMaxAggregate;
}
