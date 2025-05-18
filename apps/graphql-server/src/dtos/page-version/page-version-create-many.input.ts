import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class PageVersionCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    pageId!: string;

    @Field(() => Int, {nullable:false})
    version!: number;

    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;

    @Field(() => String, {nullable:true})
    updatedById?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
