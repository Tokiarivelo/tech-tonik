import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PageViewScalarWhereInput {

    @Field(() => [PageViewScalarWhereInput], {nullable:true})
    AND?: Array<PageViewScalarWhereInput>;

    @Field(() => [PageViewScalarWhereInput], {nullable:true})
    OR?: Array<PageViewScalarWhereInput>;

    @Field(() => [PageViewScalarWhereInput], {nullable:true})
    NOT?: Array<PageViewScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    pageId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    sessionId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
