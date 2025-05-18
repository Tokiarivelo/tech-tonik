import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PageShareCreateManyInput } from './page-share-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPageShareArgs {

    @Field(() => [PageShareCreateManyInput], {nullable:false})
    @Type(() => PageShareCreateManyInput)
    data!: Array<PageShareCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
