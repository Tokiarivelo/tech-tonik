import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageUpdateWithoutReactionsInput } from './exit-page-update-without-reactions.input';
import { Type } from 'class-transformer';
import { ExitPageCreateWithoutReactionsInput } from './exit-page-create-without-reactions.input';
import { ExitPageWhereInput } from './exit-page-where.input';

@InputType()
export class ExitPageUpsertWithoutReactionsInput {

    @Field(() => ExitPageUpdateWithoutReactionsInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutReactionsInput)
    update!: ExitPageUpdateWithoutReactionsInput;

    @Field(() => ExitPageCreateWithoutReactionsInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutReactionsInput)
    create!: ExitPageCreateWithoutReactionsInput;

    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: ExitPageWhereInput;
}
