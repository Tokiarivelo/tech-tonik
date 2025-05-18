import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageWhereInput } from './exit-page-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumToneFilter } from '../prisma/enum-tone-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { Type } from 'class-transformer';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserNullableScalarRelationFilter } from '../user/user-nullable-scalar-relation-filter.input';
import { TemplateScalarRelationFilter } from '../template/template-scalar-relation-filter.input';
import { ReactionListRelationFilter } from '../reaction/reaction-list-relation-filter.input';
import { VoteListRelationFilter } from '../vote/vote-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { PageViewListRelationFilter } from '../page-view/page-view-list-relation-filter.input';
import { PageShareListRelationFilter } from '../page-share/page-share-list-relation-filter.input';
import { PageVersionListRelationFilter } from '../page-version/page-version-list-relation-filter.input';
import { TagListRelationFilter } from '../tag/tag-list-relation-filter.input';

@InputType()
export class ExitPageWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => [ExitPageWhereInput], {nullable:true})
    AND?: Array<ExitPageWhereInput>;

    @Field(() => [ExitPageWhereInput], {nullable:true})
    OR?: Array<ExitPageWhereInput>;

    @Field(() => [ExitPageWhereInput], {nullable:true})
    NOT?: Array<ExitPageWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    authorId?: StringNullableFilter;

    @Field(() => EnumToneFilter, {nullable:true})
    tone?: EnumToneFilter;

    @Field(() => StringFilter, {nullable:true})
    templateId?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    @Type(() => JsonFilter)
    data?: JsonFilter;

    @Field(() => BoolFilter, {nullable:true})
    isHallOfFame?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    author?: UserNullableScalarRelationFilter;

    @Field(() => TemplateScalarRelationFilter, {nullable:true})
    template?: TemplateScalarRelationFilter;

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

    @Field(() => TagListRelationFilter, {nullable:true})
    tags?: TagListRelationFilter;
}
