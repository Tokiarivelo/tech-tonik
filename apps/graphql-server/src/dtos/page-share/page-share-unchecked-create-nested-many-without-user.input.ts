import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageShareCreateWithoutUserInput } from './page-share-create-without-user.input';
import { Type } from 'class-transformer';
import { PageShareCreateOrConnectWithoutUserInput } from './page-share-create-or-connect-without-user.input';
import { PageShareCreateManyUserInputEnvelope } from './page-share-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PageShareWhereUniqueInput } from './page-share-where-unique.input';

@InputType()
export class PageShareUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [PageShareCreateWithoutUserInput], {nullable:true})
    @Type(() => PageShareCreateWithoutUserInput)
    create?: Array<PageShareCreateWithoutUserInput>;

    @Field(() => [PageShareCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PageShareCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PageShareCreateOrConnectWithoutUserInput>;

    @Field(() => PageShareCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PageShareCreateManyUserInputEnvelope)
    createMany?: PageShareCreateManyUserInputEnvelope;

    @Field(() => [PageShareWhereUniqueInput], {nullable:true})
    @Type(() => PageShareWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>>;
}
