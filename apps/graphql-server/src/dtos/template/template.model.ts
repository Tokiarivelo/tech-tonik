import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ExitPage } from '../exit-page/exit-page.model';
import { TemplateCount } from './template-count.output';

@ObjectType()
export class Template {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    placeholders!: any;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:false})
    uniqueKey!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => [ExitPage], {nullable:true})
    pages?: Array<ExitPage>;

    @Field(() => TemplateCount, {nullable:false})
    _count?: TemplateCount;
}
