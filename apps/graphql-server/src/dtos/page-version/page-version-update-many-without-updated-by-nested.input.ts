import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageVersionCreateWithoutUpdatedByInput } from './page-version-create-without-updated-by.input';
import { Type } from 'class-transformer';
import { PageVersionCreateOrConnectWithoutUpdatedByInput } from './page-version-create-or-connect-without-updated-by.input';
import { PageVersionUpsertWithWhereUniqueWithoutUpdatedByInput } from './page-version-upsert-with-where-unique-without-updated-by.input';
import { PageVersionCreateManyUpdatedByInputEnvelope } from './page-version-create-many-updated-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PageVersionWhereUniqueInput } from './page-version-where-unique.input';
import { PageVersionUpdateWithWhereUniqueWithoutUpdatedByInput } from './page-version-update-with-where-unique-without-updated-by.input';
import { PageVersionUpdateManyWithWhereWithoutUpdatedByInput } from './page-version-update-many-with-where-without-updated-by.input';
import { PageVersionScalarWhereInput } from './page-version-scalar-where.input';

@InputType()
export class PageVersionUpdateManyWithoutUpdatedByNestedInput {

    @Field(() => [PageVersionCreateWithoutUpdatedByInput], {nullable:true})
    @Type(() => PageVersionCreateWithoutUpdatedByInput)
    create?: Array<PageVersionCreateWithoutUpdatedByInput>;

    @Field(() => [PageVersionCreateOrConnectWithoutUpdatedByInput], {nullable:true})
    @Type(() => PageVersionCreateOrConnectWithoutUpdatedByInput)
    connectOrCreate?: Array<PageVersionCreateOrConnectWithoutUpdatedByInput>;

    @Field(() => [PageVersionUpsertWithWhereUniqueWithoutUpdatedByInput], {nullable:true})
    @Type(() => PageVersionUpsertWithWhereUniqueWithoutUpdatedByInput)
    upsert?: Array<PageVersionUpsertWithWhereUniqueWithoutUpdatedByInput>;

    @Field(() => PageVersionCreateManyUpdatedByInputEnvelope, {nullable:true})
    @Type(() => PageVersionCreateManyUpdatedByInputEnvelope)
    createMany?: PageVersionCreateManyUpdatedByInputEnvelope;

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

    @Field(() => [PageVersionUpdateWithWhereUniqueWithoutUpdatedByInput], {nullable:true})
    @Type(() => PageVersionUpdateWithWhereUniqueWithoutUpdatedByInput)
    update?: Array<PageVersionUpdateWithWhereUniqueWithoutUpdatedByInput>;

    @Field(() => [PageVersionUpdateManyWithWhereWithoutUpdatedByInput], {nullable:true})
    @Type(() => PageVersionUpdateManyWithWhereWithoutUpdatedByInput)
    updateMany?: Array<PageVersionUpdateManyWithWhereWithoutUpdatedByInput>;

    @Field(() => [PageVersionScalarWhereInput], {nullable:true})
    @Type(() => PageVersionScalarWhereInput)
    deleteMany?: Array<PageVersionScalarWhereInput>;
}
