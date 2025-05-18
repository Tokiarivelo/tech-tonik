import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PageVersionSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    version?: true;
}
