import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ReactionType } from '../prisma/reaction-type.enum';
import { ReactionCountAggregate } from './reaction-count-aggregate.output';
import { ReactionMinAggregate } from './reaction-min-aggregate.output';
import { ReactionMaxAggregate } from './reaction-max-aggregate.output';

@ObjectType()
export class ReactionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    pageId!: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => ReactionType, {nullable:false})
    type!: `${ReactionType}`;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => ReactionCountAggregate, {nullable:true})
    _count?: ReactionCountAggregate;

    @Field(() => ReactionMinAggregate, {nullable:true})
    _min?: ReactionMinAggregate;

    @Field(() => ReactionMaxAggregate, {nullable:true})
    _max?: ReactionMaxAggregate;
}
