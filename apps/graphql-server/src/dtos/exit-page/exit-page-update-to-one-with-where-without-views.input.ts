import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageWhereInput } from './exit-page-where.input';
import { Type } from 'class-transformer';
import { ExitPageUpdateWithoutViewsInput } from './exit-page-update-without-views.input';

@InputType()
export class ExitPageUpdateToOneWithWhereWithoutViewsInput {

    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: ExitPageWhereInput;

    @Field(() => ExitPageUpdateWithoutViewsInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutViewsInput)
    data!: ExitPageUpdateWithoutViewsInput;
}
