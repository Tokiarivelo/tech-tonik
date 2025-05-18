import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutExitPageInput } from './tag-create-without-exit-page.input';
import { Type } from 'class-transformer';
import { TagCreateOrConnectWithoutExitPageInput } from './tag-create-or-connect-without-exit-page.input';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@InputType()
export class TagUncheckedCreateNestedManyWithoutExitPageInput {

    @Field(() => [TagCreateWithoutExitPageInput], {nullable:true})
    @Type(() => TagCreateWithoutExitPageInput)
    create?: Array<TagCreateWithoutExitPageInput>;

    @Field(() => [TagCreateOrConnectWithoutExitPageInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutExitPageInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutExitPageInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;
}
