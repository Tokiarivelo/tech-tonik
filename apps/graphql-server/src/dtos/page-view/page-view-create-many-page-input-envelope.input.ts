import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageViewCreateManyPageInput } from './page-view-create-many-page.input';
import { Type } from 'class-transformer';

@InputType()
export class PageViewCreateManyPageInputEnvelope {

    @Field(() => [PageViewCreateManyPageInput], {nullable:false})
    @Type(() => PageViewCreateManyPageInput)
    data!: Array<PageViewCreateManyPageInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
