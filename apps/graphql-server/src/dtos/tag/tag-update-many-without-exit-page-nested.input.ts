import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutExitPageInput } from './tag-create-without-exit-page.input';
import { Type } from 'class-transformer';
import { TagCreateOrConnectWithoutExitPageInput } from './tag-create-or-connect-without-exit-page.input';
import { TagUpsertWithWhereUniqueWithoutExitPageInput } from './tag-upsert-with-where-unique-without-exit-page.input';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateWithWhereUniqueWithoutExitPageInput } from './tag-update-with-where-unique-without-exit-page.input';
import { TagUpdateManyWithWhereWithoutExitPageInput } from './tag-update-many-with-where-without-exit-page.input';
import { TagScalarWhereInput } from './tag-scalar-where.input';

@InputType()
export class TagUpdateManyWithoutExitPageNestedInput {

    @Field(() => [TagCreateWithoutExitPageInput], {nullable:true})
    @Type(() => TagCreateWithoutExitPageInput)
    create?: Array<TagCreateWithoutExitPageInput>;

    @Field(() => [TagCreateOrConnectWithoutExitPageInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutExitPageInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutExitPageInput>;

    @Field(() => [TagUpsertWithWhereUniqueWithoutExitPageInput], {nullable:true})
    @Type(() => TagUpsertWithWhereUniqueWithoutExitPageInput)
    upsert?: Array<TagUpsertWithWhereUniqueWithoutExitPageInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;

    @Field(() => [TagUpdateWithWhereUniqueWithoutExitPageInput], {nullable:true})
    @Type(() => TagUpdateWithWhereUniqueWithoutExitPageInput)
    update?: Array<TagUpdateWithWhereUniqueWithoutExitPageInput>;

    @Field(() => [TagUpdateManyWithWhereWithoutExitPageInput], {nullable:true})
    @Type(() => TagUpdateManyWithWhereWithoutExitPageInput)
    updateMany?: Array<TagUpdateManyWithWhereWithoutExitPageInput>;

    @Field(() => [TagScalarWhereInput], {nullable:true})
    @Type(() => TagScalarWhereInput)
    deleteMany?: Array<TagScalarWhereInput>;
}
