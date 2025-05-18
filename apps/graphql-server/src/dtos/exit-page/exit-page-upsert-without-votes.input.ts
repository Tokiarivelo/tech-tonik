import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageUpdateWithoutVotesInput } from './exit-page-update-without-votes.input';
import { Type } from 'class-transformer';
import { ExitPageCreateWithoutVotesInput } from './exit-page-create-without-votes.input';
import { ExitPageWhereInput } from './exit-page-where.input';

@InputType()
export class ExitPageUpsertWithoutVotesInput {

    @Field(() => ExitPageUpdateWithoutVotesInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutVotesInput)
    update!: ExitPageUpdateWithoutVotesInput;

    @Field(() => ExitPageCreateWithoutVotesInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutVotesInput)
    create!: ExitPageCreateWithoutVotesInput;

    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: ExitPageWhereInput;
}
