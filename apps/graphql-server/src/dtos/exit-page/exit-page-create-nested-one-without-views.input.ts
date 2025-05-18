import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageCreateWithoutViewsInput } from './exit-page-create-without-views.input';
import { Type } from 'class-transformer';
import { ExitPageCreateOrConnectWithoutViewsInput } from './exit-page-create-or-connect-without-views.input';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';

@InputType()
export class ExitPageCreateNestedOneWithoutViewsInput {

    @Field(() => ExitPageCreateWithoutViewsInput, {nullable:true})
    @Type(() => ExitPageCreateWithoutViewsInput)
    create?: ExitPageCreateWithoutViewsInput;

    @Field(() => ExitPageCreateOrConnectWithoutViewsInput, {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutViewsInput)
    connectOrCreate?: ExitPageCreateOrConnectWithoutViewsInput;

    @Field(() => ExitPageWhereUniqueInput, {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
}
