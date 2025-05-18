import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { Type } from 'class-transformer';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PageVersionScalarWhereInput {

    @Field(() => [PageVersionScalarWhereInput], {nullable:true})
    AND?: Array<PageVersionScalarWhereInput>;

    @Field(() => [PageVersionScalarWhereInput], {nullable:true})
    OR?: Array<PageVersionScalarWhereInput>;

    @Field(() => [PageVersionScalarWhereInput], {nullable:true})
    NOT?: Array<PageVersionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    pageId?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    version?: IntFilter;

    @Field(() => JsonFilter, {nullable:true})
    @Type(() => JsonFilter)
    data?: JsonFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updatedById?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
