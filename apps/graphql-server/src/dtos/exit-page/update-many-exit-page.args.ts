import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExitPageUpdateManyMutationInput } from './exit-page-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ExitPageWhereInput } from './exit-page-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyExitPageArgs {

    @Field(() => ExitPageUpdateManyMutationInput, {nullable:false})
    @Type(() => ExitPageUpdateManyMutationInput)
    data!: ExitPageUpdateManyMutationInput;

    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: ExitPageWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
