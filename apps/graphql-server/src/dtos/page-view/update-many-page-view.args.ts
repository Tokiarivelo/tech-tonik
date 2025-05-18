import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PageViewUpdateManyMutationInput } from './page-view-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PageViewWhereInput } from './page-view-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPageViewArgs {

    @Field(() => PageViewUpdateManyMutationInput, {nullable:false})
    @Type(() => PageViewUpdateManyMutationInput)
    data!: PageViewUpdateManyMutationInput;

    @Field(() => PageViewWhereInput, {nullable:true})
    @Type(() => PageViewWhereInput)
    where?: PageViewWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
