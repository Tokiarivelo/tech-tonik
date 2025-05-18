import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReactionWhereInput } from './reaction-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumReactionTypeFilter } from '../prisma/enum-reaction-type-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ExitPageScalarRelationFilter } from '../exit-page/exit-page-scalar-relation-filter.input';
import { UserNullableScalarRelationFilter } from '../user/user-nullable-scalar-relation-filter.input';

@InputType()
export class ReactionWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [ReactionWhereInput], {nullable:true})
    AND?: Array<ReactionWhereInput>;

    @Field(() => [ReactionWhereInput], {nullable:true})
    OR?: Array<ReactionWhereInput>;

    @Field(() => [ReactionWhereInput], {nullable:true})
    NOT?: Array<ReactionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    pageId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => EnumReactionTypeFilter, {nullable:true})
    type?: EnumReactionTypeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => ExitPageScalarRelationFilter, {nullable:true})
    page?: ExitPageScalarRelationFilter;

    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    user?: UserNullableScalarRelationFilter;
}
