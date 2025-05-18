import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageWhereInput } from './exit-page-where.input';
import { Type } from 'class-transformer';
import { ExitPageUpdateWithoutReactionsInput } from './exit-page-update-without-reactions.input';

@InputType()
export class ExitPageUpdateToOneWithWhereWithoutReactionsInput {

    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: ExitPageWhereInput;

    @Field(() => ExitPageUpdateWithoutReactionsInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutReactionsInput)
    data!: ExitPageUpdateWithoutReactionsInput;
}
