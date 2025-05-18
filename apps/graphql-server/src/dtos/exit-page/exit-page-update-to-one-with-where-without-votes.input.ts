import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageWhereInput } from './exit-page-where.input';
import { Type } from 'class-transformer';
import { ExitPageUpdateWithoutVotesInput } from './exit-page-update-without-votes.input';

@InputType()
export class ExitPageUpdateToOneWithWhereWithoutVotesInput {

    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: ExitPageWhereInput;

    @Field(() => ExitPageUpdateWithoutVotesInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutVotesInput)
    data!: ExitPageUpdateWithoutVotesInput;
}
