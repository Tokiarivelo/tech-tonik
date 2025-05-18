import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RefreshTokenListRelationFilter } from '../refresh-token/refresh-token-list-relation-filter.input';
import { UserImageListRelationFilter } from '../user-image/user-image-list-relation-filter.input';
import { ExitPageListRelationFilter } from '../exit-page/exit-page-list-relation-filter.input';
import { ReactionListRelationFilter } from '../reaction/reaction-list-relation-filter.input';
import { VoteListRelationFilter } from '../vote/vote-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { PageViewListRelationFilter } from '../page-view/page-view-list-relation-filter.input';
import { PageShareListRelationFilter } from '../page-share/page-share-list-relation-filter.input';
import { PageVersionListRelationFilter } from '../page-version/page-version-list-relation-filter.input';
import { RoleListRelationFilter } from '../role/role-list-relation-filter.input';

@InputType()
export class UserWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    lastName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phone?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isVerified?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => RefreshTokenListRelationFilter, {nullable:true})
    tokens?: RefreshTokenListRelationFilter;

    @Field(() => UserImageListRelationFilter, {nullable:true})
    images?: UserImageListRelationFilter;

    @Field(() => ExitPageListRelationFilter, {nullable:true})
    pages?: ExitPageListRelationFilter;

    @Field(() => ReactionListRelationFilter, {nullable:true})
    reactions?: ReactionListRelationFilter;

    @Field(() => VoteListRelationFilter, {nullable:true})
    votes?: VoteListRelationFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: CommentListRelationFilter;

    @Field(() => PageViewListRelationFilter, {nullable:true})
    views?: PageViewListRelationFilter;

    @Field(() => PageShareListRelationFilter, {nullable:true})
    shares?: PageShareListRelationFilter;

    @Field(() => PageVersionListRelationFilter, {nullable:true})
    versions?: PageVersionListRelationFilter;

    @Field(() => RoleListRelationFilter, {nullable:true})
    Role?: RoleListRelationFilter;
}
