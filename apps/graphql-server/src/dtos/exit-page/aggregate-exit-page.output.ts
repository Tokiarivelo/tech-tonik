import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ExitPageCountAggregate } from './exit-page-count-aggregate.output';
import { ExitPageMinAggregate } from './exit-page-min-aggregate.output';
import { ExitPageMaxAggregate } from './exit-page-max-aggregate.output';

@ObjectType()
export class AggregateExitPage {

    @Field(() => ExitPageCountAggregate, {nullable:true})
    _count?: ExitPageCountAggregate;

    @Field(() => ExitPageMinAggregate, {nullable:true})
    _min?: ExitPageMinAggregate;

    @Field(() => ExitPageMaxAggregate, {nullable:true})
    _max?: ExitPageMaxAggregate;
}
