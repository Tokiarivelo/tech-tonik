import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    tokens?: number;

    @Field(() => Int, {nullable:false})
    images?: number;

    @Field(() => Int, {nullable:false})
    pages?: number;

    @Field(() => Int, {nullable:false})
    reactions?: number;

    @Field(() => Int, {nullable:false})
    votes?: number;

    @Field(() => Int, {nullable:false})
    comments?: number;

    @Field(() => Int, {nullable:false})
    views?: number;

    @Field(() => Int, {nullable:false})
    shares?: number;

    @Field(() => Int, {nullable:false})
    versions?: number;

    @Field(() => Int, {nullable:false})
    Role?: number;
}
