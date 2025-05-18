import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageWhereInput } from './exit-page-where.input';

@InputType()
export class ExitPageListRelationFilter {

    @Field(() => ExitPageWhereInput, {nullable:true})
    every?: ExitPageWhereInput;

    @Field(() => ExitPageWhereInput, {nullable:true})
    some?: ExitPageWhereInput;

    @Field(() => ExitPageWhereInput, {nullable:true})
    none?: ExitPageWhereInput;
}
