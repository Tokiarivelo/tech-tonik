import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReactionCreateManyUserInput } from './reaction-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ReactionCreateManyUserInputEnvelope {

    @Field(() => [ReactionCreateManyUserInput], {nullable:false})
    @Type(() => ReactionCreateManyUserInput)
    data!: Array<ReactionCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
