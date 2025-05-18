import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PageShareScalarWhereInput {

    @Field(() => [PageShareScalarWhereInput], {nullable:true})
    AND?: Array<PageShareScalarWhereInput>;

    @Field(() => [PageShareScalarWhereInput], {nullable:true})
    OR?: Array<PageShareScalarWhereInput>;

    @Field(() => [PageShareScalarWhereInput], {nullable:true})
    NOT?: Array<PageShareScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    pageId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    platform?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
