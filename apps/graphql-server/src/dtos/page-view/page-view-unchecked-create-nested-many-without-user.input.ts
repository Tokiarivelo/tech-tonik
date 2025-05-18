import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageViewCreateWithoutUserInput } from './page-view-create-without-user.input';
import { Type } from 'class-transformer';
import { PageViewCreateOrConnectWithoutUserInput } from './page-view-create-or-connect-without-user.input';
import { PageViewCreateManyUserInputEnvelope } from './page-view-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PageViewWhereUniqueInput } from './page-view-where-unique.input';

@InputType()
export class PageViewUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [PageViewCreateWithoutUserInput], {nullable:true})
    @Type(() => PageViewCreateWithoutUserInput)
    create?: Array<PageViewCreateWithoutUserInput>;

    @Field(() => [PageViewCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PageViewCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PageViewCreateOrConnectWithoutUserInput>;

    @Field(() => PageViewCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PageViewCreateManyUserInputEnvelope)
    createMany?: PageViewCreateManyUserInputEnvelope;

    @Field(() => [PageViewWhereUniqueInput], {nullable:true})
    @Type(() => PageViewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>>;
}
