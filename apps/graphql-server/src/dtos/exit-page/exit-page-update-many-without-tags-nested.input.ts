import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageCreateWithoutTagsInput } from './exit-page-create-without-tags.input';
import { Type } from 'class-transformer';
import { ExitPageCreateOrConnectWithoutTagsInput } from './exit-page-create-or-connect-without-tags.input';
import { ExitPageUpsertWithWhereUniqueWithoutTagsInput } from './exit-page-upsert-with-where-unique-without-tags.input';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';
import { ExitPageUpdateWithWhereUniqueWithoutTagsInput } from './exit-page-update-with-where-unique-without-tags.input';
import { ExitPageUpdateManyWithWhereWithoutTagsInput } from './exit-page-update-many-with-where-without-tags.input';
import { ExitPageScalarWhereInput } from './exit-page-scalar-where.input';

@InputType()
export class ExitPageUpdateManyWithoutTagsNestedInput {

    @Field(() => [ExitPageCreateWithoutTagsInput], {nullable:true})
    @Type(() => ExitPageCreateWithoutTagsInput)
    create?: Array<ExitPageCreateWithoutTagsInput>;

    @Field(() => [ExitPageCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<ExitPageCreateOrConnectWithoutTagsInput>;

    @Field(() => [ExitPageUpsertWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => ExitPageUpsertWithWhereUniqueWithoutTagsInput)
    upsert?: Array<ExitPageUpsertWithWhereUniqueWithoutTagsInput>;

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

    @Field(() => [ExitPageUpdateWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => ExitPageUpdateWithWhereUniqueWithoutTagsInput)
    update?: Array<ExitPageUpdateWithWhereUniqueWithoutTagsInput>;

    @Field(() => [ExitPageUpdateManyWithWhereWithoutTagsInput], {nullable:true})
    @Type(() => ExitPageUpdateManyWithWhereWithoutTagsInput)
    updateMany?: Array<ExitPageUpdateManyWithWhereWithoutTagsInput>;

    @Field(() => [ExitPageScalarWhereInput], {nullable:true})
    @Type(() => ExitPageScalarWhereInput)
    deleteMany?: Array<ExitPageScalarWhereInput>;
}
