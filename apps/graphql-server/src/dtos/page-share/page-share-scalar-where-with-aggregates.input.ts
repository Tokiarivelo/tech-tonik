import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PageShareScalarWhereWithAggregatesInput {

    @Field(() => [PageShareScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PageShareScalarWhereWithAggregatesInput>;

    @Field(() => [PageShareScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PageShareScalarWhereWithAggregatesInput>;

    @Field(() => [PageShareScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PageShareScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    pageId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    platform?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    userId?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
