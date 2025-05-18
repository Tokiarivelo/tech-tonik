import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageShareWhereInput } from './page-share-where.input';

@InputType()
export class PageShareListRelationFilter {

    @Field(() => PageShareWhereInput, {nullable:true})
    every?: PageShareWhereInput;

    @Field(() => PageShareWhereInput, {nullable:true})
    some?: PageShareWhereInput;

    @Field(() => PageShareWhereInput, {nullable:true})
    none?: PageShareWhereInput;
}
