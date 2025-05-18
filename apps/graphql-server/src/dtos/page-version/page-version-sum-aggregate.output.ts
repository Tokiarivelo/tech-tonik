import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PageVersionSumAggregate {

    @Field(() => Int, {nullable:true})
    version?: number;
}
