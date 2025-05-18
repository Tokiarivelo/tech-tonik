import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageViewCreateWithoutUserInput } from './page-view-create-without-user.input';
import { Type } from 'class-transformer';
import { PageViewCreateOrConnectWithoutUserInput } from './page-view-create-or-connect-without-user.input';
import { PageViewUpsertWithWhereUniqueWithoutUserInput } from './page-view-upsert-with-where-unique-without-user.input';
import { PageViewCreateManyUserInputEnvelope } from './page-view-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PageViewWhereUniqueInput } from './page-view-where-unique.input';
import { PageViewUpdateWithWhereUniqueWithoutUserInput } from './page-view-update-with-where-unique-without-user.input';
import { PageViewUpdateManyWithWhereWithoutUserInput } from './page-view-update-many-with-where-without-user.input';
import { PageViewScalarWhereInput } from './page-view-scalar-where.input';

@InputType()
export class PageViewUpdateManyWithoutUserNestedInput {

    @Field(() => [PageViewCreateWithoutUserInput], {nullable:true})
    @Type(() => PageViewCreateWithoutUserInput)
    create?: Array<PageViewCreateWithoutUserInput>;

    @Field(() => [PageViewCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PageViewCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PageViewCreateOrConnectWithoutUserInput>;

    @Field(() => [PageViewUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PageViewUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<PageViewUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => PageViewCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PageViewCreateManyUserInputEnvelope)
    createMany?: PageViewCreateManyUserInputEnvelope;

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

    @Field(() => [PageViewUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PageViewUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<PageViewUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [PageViewUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => PageViewUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<PageViewUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [PageViewScalarWhereInput], {nullable:true})
    @Type(() => PageViewScalarWhereInput)
    deleteMany?: Array<PageViewScalarWhereInput>;
}
