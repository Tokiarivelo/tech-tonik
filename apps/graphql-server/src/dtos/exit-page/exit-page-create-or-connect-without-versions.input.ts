import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';
import { Type } from 'class-transformer';
import { ExitPageCreateWithoutVersionsInput } from './exit-page-create-without-versions.input';

@InputType()
export class ExitPageCreateOrConnectWithoutVersionsInput {

    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ExitPageCreateWithoutVersionsInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutVersionsInput)
    create!: ExitPageCreateWithoutVersionsInput;
}
