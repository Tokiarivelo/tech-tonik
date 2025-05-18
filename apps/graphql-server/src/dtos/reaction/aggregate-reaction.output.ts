import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ReactionCountAggregate } from './reaction-count-aggregate.output';
import { ReactionMinAggregate } from './reaction-min-aggregate.output';
import { ReactionMaxAggregate } from './reaction-max-aggregate.output';

@ObjectType()
export class AggregateReaction {

    @Field(() => ReactionCountAggregate, {nullable:true})
    _count?: ReactionCountAggregate;

    @Field(() => ReactionMinAggregate, {nullable:true})
    _min?: ReactionMinAggregate;

    @Field(() => ReactionMaxAggregate, {nullable:true})
    _max?: ReactionMaxAggregate;
}
