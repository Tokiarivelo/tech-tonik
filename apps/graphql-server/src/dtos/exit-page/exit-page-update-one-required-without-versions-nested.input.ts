import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageCreateWithoutVersionsInput } from './exit-page-create-without-versions.input';
import { Type } from 'class-transformer';
import { ExitPageCreateOrConnectWithoutVersionsInput } from './exit-page-create-or-connect-without-versions.input';
import { ExitPageUpsertWithoutVersionsInput } from './exit-page-upsert-without-versions.input';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';
import { ExitPageUpdateToOneWithWhereWithoutVersionsInput } from './exit-page-update-to-one-with-where-without-versions.input';

@InputType()
export class ExitPageUpdateOneRequiredWithoutVersionsNestedInput {

    @Field(() => ExitPageCreateWithoutVersionsInput, {nullable:true})
    @Type(() => ExitPageCreateWithoutVersionsInput)
    create?: ExitPageCreateWithoutVersionsInput;

    @Field(() => ExitPageCreateOrConnectWithoutVersionsInput, {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutVersionsInput)
    connectOrCreate?: ExitPageCreateOrConnectWithoutVersionsInput;

    @Field(() => ExitPageUpsertWithoutVersionsInput, {nullable:true})
    @Type(() => ExitPageUpsertWithoutVersionsInput)
    upsert?: ExitPageUpsertWithoutVersionsInput;

    @Field(() => ExitPageWhereUniqueInput, {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ExitPageUpdateToOneWithWhereWithoutVersionsInput, {nullable:true})
    @Type(() => ExitPageUpdateToOneWithWhereWithoutVersionsInput)
    update?: ExitPageUpdateToOneWithWhereWithoutVersionsInput;
}
