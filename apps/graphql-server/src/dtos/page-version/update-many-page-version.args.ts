import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PageVersionUpdateManyMutationInput } from './page-version-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PageVersionWhereInput } from './page-version-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPageVersionArgs {

    @Field(() => PageVersionUpdateManyMutationInput, {nullable:false})
    @Type(() => PageVersionUpdateManyMutationInput)
    data!: PageVersionUpdateManyMutationInput;

    @Field(() => PageVersionWhereInput, {nullable:true})
    @Type(() => PageVersionWhereInput)
    where?: PageVersionWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
