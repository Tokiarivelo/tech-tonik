import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageCreateWithoutVotesInput } from './exit-page-create-without-votes.input';
import { Type } from 'class-transformer';
import { ExitPageCreateOrConnectWithoutVotesInput } from './exit-page-create-or-connect-without-votes.input';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';

@InputType()
export class ExitPageCreateNestedOneWithoutVotesInput {

    @Field(() => ExitPageCreateWithoutVotesInput, {nullable:true})
    @Type(() => ExitPageCreateWithoutVotesInput)
    create?: ExitPageCreateWithoutVotesInput;

    @Field(() => ExitPageCreateOrConnectWithoutVotesInput, {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutVotesInput)
    connectOrCreate?: ExitPageCreateOrConnectWithoutVotesInput;

    @Field(() => ExitPageWhereUniqueInput, {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
}
