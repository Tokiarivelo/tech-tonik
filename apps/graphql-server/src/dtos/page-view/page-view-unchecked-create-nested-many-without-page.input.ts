import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageViewCreateWithoutPageInput } from './page-view-create-without-page.input';
import { Type } from 'class-transformer';
import { PageViewCreateOrConnectWithoutPageInput } from './page-view-create-or-connect-without-page.input';
import { PageViewCreateManyPageInputEnvelope } from './page-view-create-many-page-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PageViewWhereUniqueInput } from './page-view-where-unique.input';

@InputType()
export class PageViewUncheckedCreateNestedManyWithoutPageInput {

    @Field(() => [PageViewCreateWithoutPageInput], {nullable:true})
    @Type(() => PageViewCreateWithoutPageInput)
    create?: Array<PageViewCreateWithoutPageInput>;

    @Field(() => [PageViewCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => PageViewCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<PageViewCreateOrConnectWithoutPageInput>;

    @Field(() => PageViewCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => PageViewCreateManyPageInputEnvelope)
    createMany?: PageViewCreateManyPageInputEnvelope;

    @Field(() => [PageViewWhereUniqueInput], {nullable:true})
    @Type(() => PageViewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>>;
}
