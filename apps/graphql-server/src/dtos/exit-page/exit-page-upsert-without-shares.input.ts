import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageUpdateWithoutSharesInput } from './exit-page-update-without-shares.input';
import { Type } from 'class-transformer';
import { ExitPageCreateWithoutSharesInput } from './exit-page-create-without-shares.input';
import { ExitPageWhereInput } from './exit-page-where.input';

@InputType()
export class ExitPageUpsertWithoutSharesInput {

    @Field(() => ExitPageUpdateWithoutSharesInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutSharesInput)
    update!: ExitPageUpdateWithoutSharesInput;

    @Field(() => ExitPageCreateWithoutSharesInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutSharesInput)
    create!: ExitPageCreateWithoutSharesInput;

    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: ExitPageWhereInput;
}
