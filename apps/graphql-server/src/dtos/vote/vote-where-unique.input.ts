import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoteOne_vote_per_user_pageCompoundUniqueInput } from './vote-one-vote-per-user-page-compound-unique.input';
import { VoteWhereInput } from './vote-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ExitPageScalarRelationFilter } from '../exit-page/exit-page-scalar-relation-filter.input';
import { UserNullableScalarRelationFilter } from '../user/user-nullable-scalar-relation-filter.input';

@InputType()
export class VoteWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => VoteOne_vote_per_user_pageCompoundUniqueInput, {nullable:true})
    one_vote_per_user_page?: VoteOne_vote_per_user_pageCompoundUniqueInput;

    @Field(() => [VoteWhereInput], {nullable:true})
    AND?: Array<VoteWhereInput>;

    @Field(() => [VoteWhereInput], {nullable:true})
    OR?: Array<VoteWhereInput>;

    @Field(() => [VoteWhereInput], {nullable:true})
    NOT?: Array<VoteWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    pageId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => ExitPageScalarRelationFilter, {nullable:true})
    page?: ExitPageScalarRelationFilter;

    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    user?: UserNullableScalarRelationFilter;
}
