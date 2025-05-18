import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageScalarWhereInput } from './exit-page-scalar-where.input';
import { Type } from 'class-transformer';
import { ExitPageUpdateManyMutationInput } from './exit-page-update-many-mutation.input';

@InputType()
export class ExitPageUpdateManyWithWhereWithoutTagsInput {

    @Field(() => ExitPageScalarWhereInput, {nullable:false})
    @Type(() => ExitPageScalarWhereInput)
    where!: ExitPageScalarWhereInput;

    @Field(() => ExitPageUpdateManyMutationInput, {nullable:false})
    @Type(() => ExitPageUpdateManyMutationInput)
    data!: ExitPageUpdateManyMutationInput;
}
