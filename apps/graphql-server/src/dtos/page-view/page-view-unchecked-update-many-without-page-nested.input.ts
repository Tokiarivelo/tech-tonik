import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageViewCreateWithoutPageInput } from './page-view-create-without-page.input';
import { Type } from 'class-transformer';
import { PageViewCreateOrConnectWithoutPageInput } from './page-view-create-or-connect-without-page.input';
import { PageViewUpsertWithWhereUniqueWithoutPageInput } from './page-view-upsert-with-where-unique-without-page.input';
import { PageViewCreateManyPageInputEnvelope } from './page-view-create-many-page-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PageViewWhereUniqueInput } from './page-view-where-unique.input';
import { PageViewUpdateWithWhereUniqueWithoutPageInput } from './page-view-update-with-where-unique-without-page.input';
import { PageViewUpdateManyWithWhereWithoutPageInput } from './page-view-update-many-with-where-without-page.input';
import { PageViewScalarWhereInput } from './page-view-scalar-where.input';

@InputType()
export class PageViewUncheckedUpdateManyWithoutPageNestedInput {

    @Field(() => [PageViewCreateWithoutPageInput], {nullable:true})
    @Type(() => PageViewCreateWithoutPageInput)
    create?: Array<PageViewCreateWithoutPageInput>;

    @Field(() => [PageViewCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => PageViewCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<PageViewCreateOrConnectWithoutPageInput>;

    @Field(() => [PageViewUpsertWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => PageViewUpsertWithWhereUniqueWithoutPageInput)
    upsert?: Array<PageViewUpsertWithWhereUniqueWithoutPageInput>;

    @Field(() => PageViewCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => PageViewCreateManyPageInputEnvelope)
    createMany?: PageViewCreateManyPageInputEnvelope;

    @Field(() => [PageViewWhereUniqueInput], {nullable:true})
    @Type(() => PageViewWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>>;

    @Field(() => [PageViewWhereUniqueInput], {nullable:true})
    @Type(() => PageViewWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>>;

    @Field(() => [PageViewWhereUniqueInput], {nullable:true})
    @Type(() => PageViewWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>>;

    @Field(() => [PageViewWhereUniqueInput], {nullable:true})
    @Type(() => PageViewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>>;

    @Field(() => [PageViewUpdateWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => PageViewUpdateWithWhereUniqueWithoutPageInput)
    update?: Array<PageViewUpdateWithWhereUniqueWithoutPageInput>;

    @Field(() => [PageViewUpdateManyWithWhereWithoutPageInput], {nullable:true})
    @Type(() => PageViewUpdateManyWithWhereWithoutPageInput)
    updateMany?: Array<PageViewUpdateManyWithWhereWithoutPageInput>;

    @Field(() => [PageViewScalarWhereInput], {nullable:true})
    @Type(() => PageViewScalarWhereInput)
    deleteMany?: Array<PageViewScalarWhereInput>;
}
