import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageShareCreateWithoutUserInput } from './page-share-create-without-user.input';
import { Type } from 'class-transformer';
import { PageShareCreateOrConnectWithoutUserInput } from './page-share-create-or-connect-without-user.input';
import { PageShareUpsertWithWhereUniqueWithoutUserInput } from './page-share-upsert-with-where-unique-without-user.input';
import { PageShareCreateManyUserInputEnvelope } from './page-share-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PageShareWhereUniqueInput } from './page-share-where-unique.input';
import { PageShareUpdateWithWhereUniqueWithoutUserInput } from './page-share-update-with-where-unique-without-user.input';
import { PageShareUpdateManyWithWhereWithoutUserInput } from './page-share-update-many-with-where-without-user.input';
import { PageShareScalarWhereInput } from './page-share-scalar-where.input';

@InputType()
export class PageShareUpdateManyWithoutUserNestedInput {

    @Field(() => [PageShareCreateWithoutUserInput], {nullable:true})
    @Type(() => PageShareCreateWithoutUserInput)
    create?: Array<PageShareCreateWithoutUserInput>;

    @Field(() => [PageShareCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PageShareCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PageShareCreateOrConnectWithoutUserInput>;

    @Field(() => [PageShareUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PageShareUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<PageShareUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => PageShareCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PageShareCreateManyUserInputEnvelope)
    createMany?: PageShareCreateManyUserInputEnvelope;

    @Field(() => [PageShareWhereUniqueInput], {nullable:true})
    @Type(() => PageShareWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>>;

    @Field(() => [PageShareWhereUniqueInput], {nullable:true})
    @Type(() => PageShareWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>>;

    @Field(() => [PageShareWhereUniqueInput], {nullable:true})
    @Type(() => PageShareWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>>;

    @Field(() => [PageShareWhereUniqueInput], {nullable:true})
    @Type(() => PageShareWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>>;

    @Field(() => [PageShareUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PageShareUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<PageShareUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [PageShareUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => PageShareUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<PageShareUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [PageShareScalarWhereInput], {nullable:true})
    @Type(() => PageShareScalarWhereInput)
    deleteMany?: Array<PageShareScalarWhereInput>;
}
