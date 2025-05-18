import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TemplateCountAggregate } from './template-count-aggregate.output';
import { TemplateMinAggregate } from './template-min-aggregate.output';
import { TemplateMaxAggregate } from './template-max-aggregate.output';

@ObjectType()
export class AggregateTemplate {

    @Field(() => TemplateCountAggregate, {nullable:true})
    _count?: TemplateCountAggregate;

    @Field(() => TemplateMinAggregate, {nullable:true})
    _min?: TemplateMinAggregate;

    @Field(() => TemplateMaxAggregate, {nullable:true})
    _max?: TemplateMaxAggregate;
}
