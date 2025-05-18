import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReactionCreateManyPageInput } from './reaction-create-many-page.input';
import { Type } from 'class-transformer';

@InputType()
export class ReactionCreateManyPageInputEnvelope {

    @Field(() => [ReactionCreateManyPageInput], {nullable:false})
    @Type(() => ReactionCreateManyPageInput)
    data!: Array<ReactionCreateManyPageInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
