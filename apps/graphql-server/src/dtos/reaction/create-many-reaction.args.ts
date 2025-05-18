import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReactionCreateManyInput } from './reaction-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyReactionArgs {

    @Field(() => [ReactionCreateManyInput], {nullable:false})
    @Type(() => ReactionCreateManyInput)
    data!: Array<ReactionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
