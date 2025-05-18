import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoteCreateWithoutPageInput } from './vote-create-without-page.input';
import { Type } from 'class-transformer';
import { VoteCreateOrConnectWithoutPageInput } from './vote-create-or-connect-without-page.input';
import { VoteUpsertWithWhereUniqueWithoutPageInput } from './vote-upsert-with-where-unique-without-page.input';
import { VoteCreateManyPageInputEnvelope } from './vote-create-many-page-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VoteWhereUniqueInput } from './vote-where-unique.input';
import { VoteUpdateWithWhereUniqueWithoutPageInput } from './vote-update-with-where-unique-without-page.input';
import { VoteUpdateManyWithWhereWithoutPageInput } from './vote-update-many-with-where-without-page.input';
import { VoteScalarWhereInput } from './vote-scalar-where.input';

@InputType()
export class VoteUncheckedUpdateManyWithoutPageNestedInput {

    @Field(() => [VoteCreateWithoutPageInput], {nullable:true})
    @Type(() => VoteCreateWithoutPageInput)
    create?: Array<VoteCreateWithoutPageInput>;

    @Field(() => [VoteCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => VoteCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<VoteCreateOrConnectWithoutPageInput>;

    @Field(() => [VoteUpsertWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => VoteUpsertWithWhereUniqueWithoutPageInput)
    upsert?: Array<VoteUpsertWithWhereUniqueWithoutPageInput>;

    @Field(() => VoteCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => VoteCreateManyPageInputEnvelope)
    createMany?: VoteCreateManyPageInputEnvelope;

    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    set?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>>;

    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>>;

    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>>;

    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>>;

    @Field(() => [VoteUpdateWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => VoteUpdateWithWhereUniqueWithoutPageInput)
    update?: Array<VoteUpdateWithWhereUniqueWithoutPageInput>;

    @Field(() => [VoteUpdateManyWithWhereWithoutPageInput], {nullable:true})
    @Type(() => VoteUpdateManyWithWhereWithoutPageInput)
    updateMany?: Array<VoteUpdateManyWithWhereWithoutPageInput>;

    @Field(() => [VoteScalarWhereInput], {nullable:true})
    @Type(() => VoteScalarWhereInput)
    deleteMany?: Array<VoteScalarWhereInput>;
}
