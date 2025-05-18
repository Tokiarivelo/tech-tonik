import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageShareCreateWithoutPageInput } from './page-share-create-without-page.input';
import { Type } from 'class-transformer';
import { PageShareCreateOrConnectWithoutPageInput } from './page-share-create-or-connect-without-page.input';
import { PageShareUpsertWithWhereUniqueWithoutPageInput } from './page-share-upsert-with-where-unique-without-page.input';
import { PageShareCreateManyPageInputEnvelope } from './page-share-create-many-page-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PageShareWhereUniqueInput } from './page-share-where-unique.input';
import { PageShareUpdateWithWhereUniqueWithoutPageInput } from './page-share-update-with-where-unique-without-page.input';
import { PageShareUpdateManyWithWhereWithoutPageInput } from './page-share-update-many-with-where-without-page.input';
import { PageShareScalarWhereInput } from './page-share-scalar-where.input';

@InputType()
export class PageShareUncheckedUpdateManyWithoutPageNestedInput {

    @Field(() => [PageShareCreateWithoutPageInput], {nullable:true})
    @Type(() => PageShareCreateWithoutPageInput)
    create?: Array<PageShareCreateWithoutPageInput>;

    @Field(() => [PageShareCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => PageShareCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<PageShareCreateOrConnectWithoutPageInput>;

    @Field(() => [PageShareUpsertWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => PageShareUpsertWithWhereUniqueWithoutPageInput)
    upsert?: Array<PageShareUpsertWithWhereUniqueWithoutPageInput>;

    @Field(() => PageShareCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => PageShareCreateManyPageInputEnvelope)
    createMany?: PageShareCreateManyPageInputEnvelope;

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

    @Field(() => [PageShareUpdateWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => PageShareUpdateWithWhereUniqueWithoutPageInput)
    update?: Array<PageShareUpdateWithWhereUniqueWithoutPageInput>;

    @Field(() => [PageShareUpdateManyWithWhereWithoutPageInput], {nullable:true})
    @Type(() => PageShareUpdateManyWithWhereWithoutPageInput)
    updateMany?: Array<PageShareUpdateManyWithWhereWithoutPageInput>;

    @Field(() => [PageShareScalarWhereInput], {nullable:true})
    @Type(() => PageShareScalarWhereInput)
    deleteMany?: Array<PageShareScalarWhereInput>;
}
