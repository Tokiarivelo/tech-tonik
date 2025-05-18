import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class PageVersionUncheckedCreateWithoutUpdatedByInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    pageId!: string;

    @Field(() => Int, {nullable:false})
    version!: number;

    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
