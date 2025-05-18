import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageVersionCreateWithoutPageInput } from './page-version-create-without-page.input';
import { Type } from 'class-transformer';
import { PageVersionCreateOrConnectWithoutPageInput } from './page-version-create-or-connect-without-page.input';
import { PageVersionCreateManyPageInputEnvelope } from './page-version-create-many-page-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PageVersionWhereUniqueInput } from './page-version-where-unique.input';

@InputType()
export class PageVersionCreateNestedManyWithoutPageInput {

    @Field(() => [PageVersionCreateWithoutPageInput], {nullable:true})
    @Type(() => PageVersionCreateWithoutPageInput)
    create?: Array<PageVersionCreateWithoutPageInput>;

    @Field(() => [PageVersionCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => PageVersionCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<PageVersionCreateOrConnectWithoutPageInput>;

    @Field(() => PageVersionCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => PageVersionCreateManyPageInputEnvelope)
    createMany?: PageVersionCreateManyPageInputEnvelope;

    @Field(() => [PageVersionWhereUniqueInput], {nullable:true})
    @Type(() => PageVersionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>>;
}
