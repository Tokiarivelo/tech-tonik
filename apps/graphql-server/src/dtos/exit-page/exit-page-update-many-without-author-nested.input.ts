import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageCreateWithoutAuthorInput } from './exit-page-create-without-author.input';
import { Type } from 'class-transformer';
import { ExitPageCreateOrConnectWithoutAuthorInput } from './exit-page-create-or-connect-without-author.input';
import { ExitPageUpsertWithWhereUniqueWithoutAuthorInput } from './exit-page-upsert-with-where-unique-without-author.input';
import { ExitPageCreateManyAuthorInputEnvelope } from './exit-page-create-many-author-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';
import { ExitPageUpdateWithWhereUniqueWithoutAuthorInput } from './exit-page-update-with-where-unique-without-author.input';
import { ExitPageUpdateManyWithWhereWithoutAuthorInput } from './exit-page-update-many-with-where-without-author.input';
import { ExitPageScalarWhereInput } from './exit-page-scalar-where.input';

@InputType()
export class ExitPageUpdateManyWithoutAuthorNestedInput {

    @Field(() => [ExitPageCreateWithoutAuthorInput], {nullable:true})
    @Type(() => ExitPageCreateWithoutAuthorInput)
    create?: Array<ExitPageCreateWithoutAuthorInput>;

    @Field(() => [ExitPageCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<ExitPageCreateOrConnectWithoutAuthorInput>;

    @Field(() => [ExitPageUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => ExitPageUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<ExitPageUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => ExitPageCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => ExitPageCreateManyAuthorInputEnvelope)
    createMany?: ExitPageCreateManyAuthorInputEnvelope;

    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [ExitPageUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => ExitPageUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<ExitPageUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [ExitPageUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => ExitPageUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<ExitPageUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [ExitPageScalarWhereInput], {nullable:true})
    @Type(() => ExitPageScalarWhereInput)
    deleteMany?: Array<ExitPageScalarWhereInput>;
}
