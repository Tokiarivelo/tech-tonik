import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageVersionCreateManyPageInput } from './page-version-create-many-page.input';
import { Type } from 'class-transformer';

@InputType()
export class PageVersionCreateManyPageInputEnvelope {

    @Field(() => [PageVersionCreateManyPageInput], {nullable:false})
    @Type(() => PageVersionCreateManyPageInput)
    data!: Array<PageVersionCreateManyPageInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
