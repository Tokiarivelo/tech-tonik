import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageWhereInput } from './exit-page-where.input';

@InputType()
export class ExitPageScalarRelationFilter {

    @Field(() => ExitPageWhereInput, {nullable:true})
    is?: ExitPageWhereInput;

    @Field(() => ExitPageWhereInput, {nullable:true})
    isNot?: ExitPageWhereInput;
}
