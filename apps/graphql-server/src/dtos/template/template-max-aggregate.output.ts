import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TemplateMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => String, {nullable:true})
    uniqueKey?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
