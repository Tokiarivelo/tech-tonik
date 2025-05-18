import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumToneWithAggregatesFilter } from '../prisma/enum-tone-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';
import { Type } from 'class-transformer';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ExitPageScalarWhereWithAggregatesInput {

    @Field(() => [ExitPageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ExitPageScalarWhereWithAggregatesInput>;

    @Field(() => [ExitPageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ExitPageScalarWhereWithAggregatesInput>;

    @Field(() => [ExitPageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ExitPageScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    authorId?: StringNullableWithAggregatesFilter;

    @Field(() => EnumToneWithAggregatesFilter, {nullable:true})
    tone?: EnumToneWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    templateId?: StringWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    @Type(() => JsonWithAggregatesFilter)
    data?: JsonWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isHallOfFame?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
