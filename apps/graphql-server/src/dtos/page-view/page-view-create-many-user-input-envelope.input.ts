import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageViewCreateManyUserInput } from './page-view-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class PageViewCreateManyUserInputEnvelope {

    @Field(() => [PageViewCreateManyUserInput], {nullable:false})
    @Type(() => PageViewCreateManyUserInput)
    data!: Array<PageViewCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
