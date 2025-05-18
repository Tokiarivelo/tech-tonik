import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageVersionCreateWithoutPageInput } from './page-version-create-without-page.input';
import { Type } from 'class-transformer';
import { PageVersionCreateOrConnectWithoutPageInput } from './page-version-create-or-connect-without-page.input';
import { PageVersionUpsertWithWhereUniqueWithoutPageInput } from './page-version-upsert-with-where-unique-without-page.input';
import { PageVersionCreateManyPageInputEnvelope } from './page-version-create-many-page-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PageVersionWhereUniqueInput } from './page-version-where-unique.input';
import { PageVersionUpdateWithWhereUniqueWithoutPageInput } from './page-version-update-with-where-unique-without-page.input';
import { PageVersionUpdateManyWithWhereWithoutPageInput } from './page-version-update-many-with-where-without-page.input';
import { PageVersionScalarWhereInput } from './page-version-scalar-where.input';

@InputType()
export class PageVersionUncheckedUpdateManyWithoutPageNestedInput {

    @Field(() => [PageVersionCreateWithoutPageInput], {nullable:true})
    @Type(() => PageVersionCreateWithoutPageInput)
    create?: Array<PageVersionCreateWithoutPageInput>;

    @Field(() => [PageVersionCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => PageVersionCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<PageVersionCreateOrConnectWithoutPageInput>;

    @Field(() => [PageVersionUpsertWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => PageVersionUpsertWithWhereUniqueWithoutPageInput)
    upsert?: Array<PageVersionUpsertWithWhereUniqueWithoutPageInput>;

    @Field(() => PageVersionCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => PageVersionCreateManyPageInputEnvelope)
    createMany?: PageVersionCreateManyPageInputEnvelope;

    @Field(() => [PageVersionWhereUniqueInput], {nullable:true})
    @Type(() => PageVersionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>>;

    @Field(() => [PageVersionWhereUniqueInput], {nullable:true})
    @Type(() => PageVersionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>>;

    @Field(() => [PageVersionWhereUniqueInput], {nullable:true})
    @Type(() => PageVersionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>>;

    @Field(() => [PageVersionWhereUniqueInput], {nullable:true})
    @Type(() => PageVersionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>>;

    @Field(() => [PageVersionUpdateWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => PageVersionUpdateWithWhereUniqueWithoutPageInput)
    update?: Array<PageVersionUpdateWithWhereUniqueWithoutPageInput>;

    @Field(() => [PageVersionUpdateManyWithWhereWithoutPageInput], {nullable:true})
    @Type(() => PageVersionUpdateManyWithWhereWithoutPageInput)
    updateMany?: Array<PageVersionUpdateManyWithWhereWithoutPageInput>;

    @Field(() => [PageVersionScalarWhereInput], {nullable:true})
    @Type(() => PageVersionScalarWhereInput)
    deleteMany?: Array<PageVersionScalarWhereInput>;
}
