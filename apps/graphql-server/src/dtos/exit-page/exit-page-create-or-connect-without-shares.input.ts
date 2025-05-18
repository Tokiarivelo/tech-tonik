import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';
import { Type } from 'class-transformer';
import { ExitPageCreateWithoutSharesInput } from './exit-page-create-without-shares.input';

@InputType()
export class ExitPageCreateOrConnectWithoutSharesInput {

    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ExitPageCreateWithoutSharesInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutSharesInput)
    create!: ExitPageCreateWithoutSharesInput;
}
