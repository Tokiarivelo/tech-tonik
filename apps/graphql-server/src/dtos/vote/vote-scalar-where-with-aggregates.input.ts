import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class VoteScalarWhereWithAggregatesInput {

    @Field(() => [VoteScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<VoteScalarWhereWithAggregatesInput>;

    @Field(() => [VoteScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<VoteScalarWhereWithAggregatesInput>;

    @Field(() => [VoteScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<VoteScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    pageId?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    userId?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
