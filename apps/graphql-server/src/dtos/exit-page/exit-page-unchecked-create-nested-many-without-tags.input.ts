import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageCreateWithoutTagsInput } from './exit-page-create-without-tags.input';
import { Type } from 'class-transformer';
import { ExitPageCreateOrConnectWithoutTagsInput } from './exit-page-create-or-connect-without-tags.input';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';

@InputType()
export class ExitPageUncheckedCreateNestedManyWithoutTagsInput {

    @Field(() => [ExitPageCreateWithoutTagsInput], {nullable:true})
    @Type(() => ExitPageCreateWithoutTagsInput)
    create?: Array<ExitPageCreateWithoutTagsInput>;

    @Field(() => [ExitPageCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<ExitPageCreateOrConnectWithoutTagsInput>;

    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
}
