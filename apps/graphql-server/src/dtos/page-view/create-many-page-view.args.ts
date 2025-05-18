import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PageViewCreateManyInput } from './page-view-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPageViewArgs {

    @Field(() => [PageViewCreateManyInput], {nullable:false})
    @Type(() => PageViewCreateManyInput)
    data!: Array<PageViewCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
