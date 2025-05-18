import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PageShareCountAggregate } from './page-share-count-aggregate.output';
import { PageShareMinAggregate } from './page-share-min-aggregate.output';
import { PageShareMaxAggregate } from './page-share-max-aggregate.output';

@ObjectType()
export class PageShareGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    pageId!: string;

    @Field(() => String, {nullable:false})
    platform!: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => PageShareCountAggregate, {nullable:true})
    _count?: PageShareCountAggregate;

    @Field(() => PageShareMinAggregate, {nullable:true})
    _min?: PageShareMinAggregate;

    @Field(() => PageShareMaxAggregate, {nullable:true})
    _max?: PageShareMaxAggregate;
}
