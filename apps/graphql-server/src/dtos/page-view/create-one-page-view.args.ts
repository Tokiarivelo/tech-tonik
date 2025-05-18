import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PageViewCreateInput } from './page-view-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePageViewArgs {

    @Field(() => PageViewCreateInput, {nullable:false})
    @Type(() => PageViewCreateInput)
    data!: PageViewCreateInput;
}
