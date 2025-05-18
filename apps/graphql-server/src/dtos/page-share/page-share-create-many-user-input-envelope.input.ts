import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageShareCreateManyUserInput } from './page-share-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class PageShareCreateManyUserInputEnvelope {

    @Field(() => [PageShareCreateManyUserInput], {nullable:false})
    @Type(() => PageShareCreateManyUserInput)
    data!: Array<PageShareCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
