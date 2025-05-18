import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PageViewScalarWhereWithAggregatesInput {

    @Field(() => [PageViewScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PageViewScalarWhereWithAggregatesInput>;

    @Field(() => [PageViewScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PageViewScalarWhereWithAggregatesInput>;

    @Field(() => [PageViewScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PageViewScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    pageId?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    userId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    sessionId?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
