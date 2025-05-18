import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageShareCreateManyPageInput } from './page-share-create-many-page.input';
import { Type } from 'class-transformer';

@InputType()
export class PageShareCreateManyPageInputEnvelope {

    @Field(() => [PageShareCreateManyPageInput], {nullable:false})
    @Type(() => PageShareCreateManyPageInput)
    data!: Array<PageShareCreateManyPageInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
