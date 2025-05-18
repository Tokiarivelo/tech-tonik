import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageVersionScalarWhereInput } from './page-version-scalar-where.input';
import { Type } from 'class-transformer';
import { PageVersionUpdateManyMutationInput } from './page-version-update-many-mutation.input';

@InputType()
export class PageVersionUpdateManyWithWhereWithoutPageInput {

    @Field(() => PageVersionScalarWhereInput, {nullable:false})
    @Type(() => PageVersionScalarWhereInput)
    where!: PageVersionScalarWhereInput;

    @Field(() => PageVersionUpdateManyMutationInput, {nullable:false})
    @Type(() => PageVersionUpdateManyMutationInput)
    data!: PageVersionUpdateManyMutationInput;
}
