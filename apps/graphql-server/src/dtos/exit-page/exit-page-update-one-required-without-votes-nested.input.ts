import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageCreateWithoutVotesInput } from './exit-page-create-without-votes.input';
import { Type } from 'class-transformer';
import { ExitPageCreateOrConnectWithoutVotesInput } from './exit-page-create-or-connect-without-votes.input';
import { ExitPageUpsertWithoutVotesInput } from './exit-page-upsert-without-votes.input';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';
import { ExitPageUpdateToOneWithWhereWithoutVotesInput } from './exit-page-update-to-one-with-where-without-votes.input';

@InputType()
export class ExitPageUpdateOneRequiredWithoutVotesNestedInput {

    @Field(() => ExitPageCreateWithoutVotesInput, {nullable:true})
    @Type(() => ExitPageCreateWithoutVotesInput)
    create?: ExitPageCreateWithoutVotesInput;

    @Field(() => ExitPageCreateOrConnectWithoutVotesInput, {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutVotesInput)
    connectOrCreate?: ExitPageCreateOrConnectWithoutVotesInput;

    @Field(() => ExitPageUpsertWithoutVotesInput, {nullable:true})
    @Type(() => ExitPageUpsertWithoutVotesInput)
    upsert?: ExitPageUpsertWithoutVotesInput;

    @Field(() => ExitPageWhereUniqueInput, {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ExitPageUpdateToOneWithWhereWithoutVotesInput, {nullable:true})
    @Type(() => ExitPageUpdateToOneWithWhereWithoutVotesInput)
    update?: ExitPageUpdateToOneWithWhereWithoutVotesInput;
}
