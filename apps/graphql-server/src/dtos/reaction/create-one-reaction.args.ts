import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReactionCreateInput } from './reaction-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneReactionArgs {

    @Field(() => ReactionCreateInput, {nullable:false})
    @Type(() => ReactionCreateInput)
    data!: ReactionCreateInput;
}
