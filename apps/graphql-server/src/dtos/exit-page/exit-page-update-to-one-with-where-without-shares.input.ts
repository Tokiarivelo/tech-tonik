import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageWhereInput } from './exit-page-where.input';
import { Type } from 'class-transformer';
import { ExitPageUpdateWithoutSharesInput } from './exit-page-update-without-shares.input';

@InputType()
export class ExitPageUpdateToOneWithWhereWithoutSharesInput {

    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: ExitPageWhereInput;

    @Field(() => ExitPageUpdateWithoutSharesInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutSharesInput)
    data!: ExitPageUpdateWithoutSharesInput;
}
