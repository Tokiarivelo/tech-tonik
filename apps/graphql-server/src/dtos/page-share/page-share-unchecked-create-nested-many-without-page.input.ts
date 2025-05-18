import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageShareCreateWithoutPageInput } from './page-share-create-without-page.input';
import { Type } from 'class-transformer';
import { PageShareCreateOrConnectWithoutPageInput } from './page-share-create-or-connect-without-page.input';
import { PageShareCreateManyPageInputEnvelope } from './page-share-create-many-page-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PageShareWhereUniqueInput } from './page-share-where-unique.input';

@InputType()
export class PageShareUncheckedCreateNestedManyWithoutPageInput {

    @Field(() => [PageShareCreateWithoutPageInput], {nullable:true})
    @Type(() => PageShareCreateWithoutPageInput)
    create?: Array<PageShareCreateWithoutPageInput>;

    @Field(() => [PageShareCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => PageShareCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<PageShareCreateOrConnectWithoutPageInput>;

    @Field(() => PageShareCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => PageShareCreateManyPageInputEnvelope)
    createMany?: PageShareCreateManyPageInputEnvelope;

    @Field(() => [PageShareWhereUniqueInput], {nullable:true})
    @Type(() => PageShareWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>>;
}
