import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PageShareUpdateManyMutationInput } from './page-share-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PageShareWhereInput } from './page-share-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPageShareArgs {

    @Field(() => PageShareUpdateManyMutationInput, {nullable:false})
    @Type(() => PageShareUpdateManyMutationInput)
    data!: PageShareUpdateManyMutationInput;

    @Field(() => PageShareWhereInput, {nullable:true})
    @Type(() => PageShareWhereInput)
    where?: PageShareWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
