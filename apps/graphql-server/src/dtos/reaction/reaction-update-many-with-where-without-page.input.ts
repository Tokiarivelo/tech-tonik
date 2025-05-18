import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReactionScalarWhereInput } from './reaction-scalar-where.input';
import { Type } from 'class-transformer';
import { ReactionUpdateManyMutationInput } from './reaction-update-many-mutation.input';

@InputType()
export class ReactionUpdateManyWithWhereWithoutPageInput {

    @Field(() => ReactionScalarWhereInput, {nullable:false})
    @Type(() => ReactionScalarWhereInput)
    where!: ReactionScalarWhereInput;

    @Field(() => ReactionUpdateManyMutationInput, {nullable:false})
    @Type(() => ReactionUpdateManyMutationInput)
    data!: ReactionUpdateManyMutationInput;
}
