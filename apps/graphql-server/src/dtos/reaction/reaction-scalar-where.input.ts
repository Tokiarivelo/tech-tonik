import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumReactionTypeFilter } from '../prisma/enum-reaction-type-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ReactionScalarWhereInput {

    @Field(() => [ReactionScalarWhereInput], {nullable:true})
    AND?: Array<ReactionScalarWhereInput>;

    @Field(() => [ReactionScalarWhereInput], {nullable:true})
    OR?: Array<ReactionScalarWhereInput>;

    @Field(() => [ReactionScalarWhereInput], {nullable:true})
    NOT?: Array<ReactionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    pageId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => EnumReactionTypeFilter, {nullable:true})
    type?: EnumReactionTypeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
