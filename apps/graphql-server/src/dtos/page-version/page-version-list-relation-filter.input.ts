import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageVersionWhereInput } from './page-version-where.input';

@InputType()
export class PageVersionListRelationFilter {

    @Field(() => PageVersionWhereInput, {nullable:true})
    every?: PageVersionWhereInput;

    @Field(() => PageVersionWhereInput, {nullable:true})
    some?: PageVersionWhereInput;

    @Field(() => PageVersionWhereInput, {nullable:true})
    none?: PageVersionWhereInput;
}
