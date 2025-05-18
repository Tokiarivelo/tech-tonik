import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageWhereInput } from './exit-page-where.input';
import { Type } from 'class-transformer';
import { ExitPageUpdateWithoutVersionsInput } from './exit-page-update-without-versions.input';

@InputType()
export class ExitPageUpdateToOneWithWhereWithoutVersionsInput {

    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: ExitPageWhereInput;

    @Field(() => ExitPageUpdateWithoutVersionsInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutVersionsInput)
    data!: ExitPageUpdateWithoutVersionsInput;
}
