import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageViewScalarWhereInput } from './page-view-scalar-where.input';
import { Type } from 'class-transformer';
import { PageViewUpdateManyMutationInput } from './page-view-update-many-mutation.input';

@InputType()
export class PageViewUpdateManyWithWhereWithoutPageInput {

    @Field(() => PageViewScalarWhereInput, {nullable:false})
    @Type(() => PageViewScalarWhereInput)
    where!: PageViewScalarWhereInput;

    @Field(() => PageViewUpdateManyMutationInput, {nullable:false})
    @Type(() => PageViewUpdateManyMutationInput)
    data!: PageViewUpdateManyMutationInput;
}
