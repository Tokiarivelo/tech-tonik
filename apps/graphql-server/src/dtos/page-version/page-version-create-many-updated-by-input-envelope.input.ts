import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageVersionCreateManyUpdatedByInput } from './page-version-create-many-updated-by.input';
import { Type } from 'class-transformer';

@InputType()
export class PageVersionCreateManyUpdatedByInputEnvelope {

    @Field(() => [PageVersionCreateManyUpdatedByInput], {nullable:false})
    @Type(() => PageVersionCreateManyUpdatedByInput)
    data!: Array<PageVersionCreateManyUpdatedByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
