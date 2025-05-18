import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PageShareWhereInput } from './page-share-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyPageShareArgs {

    @Field(() => PageShareWhereInput, {nullable:true})
    @Type(() => PageShareWhereInput)
    where?: PageShareWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
