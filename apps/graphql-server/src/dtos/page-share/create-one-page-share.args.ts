import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PageShareCreateInput } from './page-share-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePageShareArgs {

    @Field(() => PageShareCreateInput, {nullable:false})
    @Type(() => PageShareCreateInput)
    data!: PageShareCreateInput;
}
