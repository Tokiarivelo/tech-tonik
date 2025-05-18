import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageVersionCreateWithoutUpdatedByInput } from './page-version-create-without-updated-by.input';
import { Type } from 'class-transformer';
import { PageVersionCreateOrConnectWithoutUpdatedByInput } from './page-version-create-or-connect-without-updated-by.input';
import { PageVersionCreateManyUpdatedByInputEnvelope } from './page-version-create-many-updated-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PageVersionWhereUniqueInput } from './page-version-where-unique.input';

@InputType()
export class PageVersionCreateNestedManyWithoutUpdatedByInput {

    @Field(() => [PageVersionCreateWithoutUpdatedByInput], {nullable:true})
    @Type(() => PageVersionCreateWithoutUpdatedByInput)
    create?: Array<PageVersionCreateWithoutUpdatedByInput>;

    @Field(() => [PageVersionCreateOrConnectWithoutUpdatedByInput], {nullable:true})
    @Type(() => PageVersionCreateOrConnectWithoutUpdatedByInput)
    connectOrCreate?: Array<PageVersionCreateOrConnectWithoutUpdatedByInput>;

    @Field(() => PageVersionCreateManyUpdatedByInputEnvelope, {nullable:true})
    @Type(() => PageVersionCreateManyUpdatedByInputEnvelope)
    createMany?: PageVersionCreateManyUpdatedByInputEnvelope;

    @Field(() => [PageVersionWhereUniqueInput], {nullable:true})
    @Type(() => PageVersionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>>;
}
