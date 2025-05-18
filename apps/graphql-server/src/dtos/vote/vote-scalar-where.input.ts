import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class VoteScalarWhereInput {

    @Field(() => [VoteScalarWhereInput], {nullable:true})
    AND?: Array<VoteScalarWhereInput>;

    @Field(() => [VoteScalarWhereInput], {nullable:true})
    OR?: Array<VoteScalarWhereInput>;

    @Field(() => [VoteScalarWhereInput], {nullable:true})
    NOT?: Array<VoteScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    pageId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
