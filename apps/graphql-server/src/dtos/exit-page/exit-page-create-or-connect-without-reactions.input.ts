import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';
import { Type } from 'class-transformer';
import { ExitPageCreateWithoutReactionsInput } from './exit-page-create-without-reactions.input';

@InputType()
export class ExitPageCreateOrConnectWithoutReactionsInput {

    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ExitPageCreateWithoutReactionsInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutReactionsInput)
    create!: ExitPageCreateWithoutReactionsInput;
}
