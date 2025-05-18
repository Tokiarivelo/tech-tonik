import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Tone } from '../prisma/tone.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { ExitPageCountAggregate } from './exit-page-count-aggregate.output';
import { ExitPageMinAggregate } from './exit-page-min-aggregate.output';
import { ExitPageMaxAggregate } from './exit-page-max-aggregate.output';

@ObjectType()
export class ExitPageGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    authorId?: string;

    @Field(() => Tone, {nullable:false})
    tone!: `${Tone}`;

    @Field(() => String, {nullable:false})
    templateId!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Boolean, {nullable:false})
    isHallOfFame!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ExitPageCountAggregate, {nullable:true})
    _count?: ExitPageCountAggregate;

    @Field(() => ExitPageMinAggregate, {nullable:true})
    _min?: ExitPageMinAggregate;

    @Field(() => ExitPageMaxAggregate, {nullable:true})
    _max?: ExitPageMaxAggregate;
}
