import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageCreateWithoutViewsInput } from './exit-page-create-without-views.input';
import { Type } from 'class-transformer';
import { ExitPageCreateOrConnectWithoutViewsInput } from './exit-page-create-or-connect-without-views.input';
import { ExitPageUpsertWithoutViewsInput } from './exit-page-upsert-without-views.input';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';
import { ExitPageUpdateToOneWithWhereWithoutViewsInput } from './exit-page-update-to-one-with-where-without-views.input';

@InputType()
export class ExitPageUpdateOneRequiredWithoutViewsNestedInput {

    @Field(() => ExitPageCreateWithoutViewsInput, {nullable:true})
    @Type(() => ExitPageCreateWithoutViewsInput)
    create?: ExitPageCreateWithoutViewsInput;

    @Field(() => ExitPageCreateOrConnectWithoutViewsInput, {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutViewsInput)
    connectOrCreate?: ExitPageCreateOrConnectWithoutViewsInput;

    @Field(() => ExitPageUpsertWithoutViewsInput, {nullable:true})
    @Type(() => ExitPageUpsertWithoutViewsInput)
    upsert?: ExitPageUpsertWithoutViewsInput;

    @Field(() => ExitPageWhereUniqueInput, {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ExitPageUpdateToOneWithWhereWithoutViewsInput, {nullable:true})
    @Type(() => ExitPageUpdateToOneWithWhereWithoutViewsInput)
    update?: ExitPageUpdateToOneWithWhereWithoutViewsInput;
}
