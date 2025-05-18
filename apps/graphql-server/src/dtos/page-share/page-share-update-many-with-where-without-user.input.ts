import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageShareScalarWhereInput } from './page-share-scalar-where.input';
import { Type } from 'class-transformer';
import { PageShareUpdateManyMutationInput } from './page-share-update-many-mutation.input';

@InputType()
export class PageShareUpdateManyWithWhereWithoutUserInput {

    @Field(() => PageShareScalarWhereInput, {nullable:false})
    @Type(() => PageShareScalarWhereInput)
    where!: PageShareScalarWhereInput;

    @Field(() => PageShareUpdateManyMutationInput, {nullable:false})
    @Type(() => PageShareUpdateManyMutationInput)
    data!: PageShareUpdateManyMutationInput;
}
