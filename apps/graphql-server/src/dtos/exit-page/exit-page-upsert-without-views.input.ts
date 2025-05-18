import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageUpdateWithoutViewsInput } from './exit-page-update-without-views.input';
import { Type } from 'class-transformer';
import { ExitPageCreateWithoutViewsInput } from './exit-page-create-without-views.input';
import { ExitPageWhereInput } from './exit-page-where.input';

@InputType()
export class ExitPageUpsertWithoutViewsInput {

    @Field(() => ExitPageUpdateWithoutViewsInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutViewsInput)
    update!: ExitPageUpdateWithoutViewsInput;

    @Field(() => ExitPageCreateWithoutViewsInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutViewsInput)
    create!: ExitPageCreateWithoutViewsInput;

    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: ExitPageWhereInput;
}
