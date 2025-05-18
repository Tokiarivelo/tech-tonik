import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageUpdateWithoutVersionsInput } from './exit-page-update-without-versions.input';
import { Type } from 'class-transformer';
import { ExitPageCreateWithoutVersionsInput } from './exit-page-create-without-versions.input';
import { ExitPageWhereInput } from './exit-page-where.input';

@InputType()
export class ExitPageUpsertWithoutVersionsInput {

    @Field(() => ExitPageUpdateWithoutVersionsInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutVersionsInput)
    update!: ExitPageUpdateWithoutVersionsInput;

    @Field(() => ExitPageCreateWithoutVersionsInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutVersionsInput)
    create!: ExitPageCreateWithoutVersionsInput;

    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: ExitPageWhereInput;
}
