import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoteCreateManyPageInput } from './vote-create-many-page.input';
import { Type } from 'class-transformer';

@InputType()
export class VoteCreateManyPageInputEnvelope {

    @Field(() => [VoteCreateManyPageInput], {nullable:false})
    @Type(() => VoteCreateManyPageInput)
    data!: Array<VoteCreateManyPageInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
