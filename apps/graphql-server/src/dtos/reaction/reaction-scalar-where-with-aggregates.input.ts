import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumReactionTypeWithAggregatesFilter } from '../prisma/enum-reaction-type-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ReactionScalarWhereWithAggregatesInput {

    @Field(() => [ReactionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ReactionScalarWhereWithAggregatesInput>;

    @Field(() => [ReactionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ReactionScalarWhereWithAggregatesInput>;

    @Field(() => [ReactionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ReactionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    pageId?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    userId?: StringNullableWithAggregatesFilter;

    @Field(() => EnumReactionTypeWithAggregatesFilter, {nullable:true})
    type?: EnumReactionTypeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
