import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PageVersionCreateInput } from './page-version-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePageVersionArgs {

    @Field(() => PageVersionCreateInput, {nullable:false})
    @Type(() => PageVersionCreateInput)
    data!: PageVersionCreateInput;
}
