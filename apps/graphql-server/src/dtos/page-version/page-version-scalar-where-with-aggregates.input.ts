import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';
import { Type } from 'class-transformer';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PageVersionScalarWhereWithAggregatesInput {

    @Field(() => [PageVersionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PageVersionScalarWhereWithAggregatesInput>;

    @Field(() => [PageVersionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PageVersionScalarWhereWithAggregatesInput>;

    @Field(() => [PageVersionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PageVersionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    pageId?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    version?: IntWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    @Type(() => JsonWithAggregatesFilter)
    data?: JsonWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    updatedById?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
