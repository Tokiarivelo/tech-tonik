import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';
import { Type } from 'class-transformer';
import { ExitPageCreateWithoutVotesInput } from './exit-page-create-without-votes.input';

@InputType()
export class ExitPageCreateOrConnectWithoutVotesInput {

    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ExitPageCreateWithoutVotesInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutVotesInput)
    create!: ExitPageCreateWithoutVotesInput;
}
