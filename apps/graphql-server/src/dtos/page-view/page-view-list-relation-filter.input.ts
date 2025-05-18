import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageViewWhereInput } from './page-view-where.input';

@InputType()
export class PageViewListRelationFilter {

    @Field(() => PageViewWhereInput, {nullable:true})
    every?: PageViewWhereInput;

    @Field(() => PageViewWhereInput, {nullable:true})
    some?: PageViewWhereInput;

    @Field(() => PageViewWhereInput, {nullable:true})
    none?: PageViewWhereInput;
}
