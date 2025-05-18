import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PageVersionWhereInput } from './page-version-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyPageVersionArgs {

    @Field(() => PageVersionWhereInput, {nullable:true})
    @Type(() => PageVersionWhereInput)
    where?: PageVersionWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
