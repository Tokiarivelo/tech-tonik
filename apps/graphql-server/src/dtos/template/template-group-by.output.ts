import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { TemplateCountAggregate } from './template-count-aggregate.output';
import { TemplateMinAggregate } from './template-min-aggregate.output';
import { TemplateMaxAggregate } from './template-max-aggregate.output';

@ObjectType()
export class TemplateGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    uniqueKey!: string;

    @Field(() => String, {nullable:true})
    authorId?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    placeholders!: any;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => TemplateCountAggregate, {nullable:true})
    _count?: TemplateCountAggregate;

    @Field(() => TemplateMinAggregate, {nullable:true})
    _min?: TemplateMinAggregate;

    @Field(() => TemplateMaxAggregate, {nullable:true})
    _max?: TemplateMaxAggregate;
}
