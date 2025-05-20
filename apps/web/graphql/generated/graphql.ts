import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type Comment = {
  __typename?: 'Comment';
  _count: CommentCount;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  page: ExitPage;
  pageId: Scalars['String']['output'];
  parentComment?: Maybe<Comment>;
  parentCommentId?: Maybe<Scalars['String']['output']>;
  replies?: Maybe<Array<Comment>>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type CommentCount = {
  __typename?: 'CommentCount';
  replies: Scalars['Int']['output'];
};

export type CommentCreateInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  page: ExitPageCreateNestedOneWithoutCommentsInput;
  parentComment?: InputMaybe<CommentCreateNestedOneWithoutRepliesInput>;
  replies?: InputMaybe<CommentCreateNestedManyWithoutParentCommentInput>;
  user?: InputMaybe<UserCreateNestedOneWithoutCommentsInput>;
};

export type CommentCreateManyPageInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  parentCommentId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type CommentCreateManyPageInputEnvelope = {
  data: Array<CommentCreateManyPageInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommentCreateManyParentCommentInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  pageId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type CommentCreateManyParentCommentInputEnvelope = {
  data: Array<CommentCreateManyParentCommentInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommentCreateManyUserInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  pageId: Scalars['String']['input'];
  parentCommentId?: InputMaybe<Scalars['String']['input']>;
};

export type CommentCreateManyUserInputEnvelope = {
  data: Array<CommentCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommentCreateNestedManyWithoutPageInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutPageInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutPageInput>>;
  createMany?: InputMaybe<CommentCreateManyPageInputEnvelope>;
};

export type CommentCreateNestedManyWithoutParentCommentInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutParentCommentInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutParentCommentInput>>;
  createMany?: InputMaybe<CommentCreateManyParentCommentInputEnvelope>;
};

export type CommentCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutUserInput>>;
  createMany?: InputMaybe<CommentCreateManyUserInputEnvelope>;
};

export type CommentCreateNestedOneWithoutRepliesInput = {
  connect?: InputMaybe<CommentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommentCreateOrConnectWithoutRepliesInput>;
  create?: InputMaybe<CommentCreateWithoutRepliesInput>;
};

export type CommentCreateOrConnectWithoutPageInput = {
  create: CommentCreateWithoutPageInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutParentCommentInput = {
  create: CommentCreateWithoutParentCommentInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutRepliesInput = {
  create: CommentCreateWithoutRepliesInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutUserInput = {
  create: CommentCreateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateWithoutPageInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  parentComment?: InputMaybe<CommentCreateNestedOneWithoutRepliesInput>;
  replies?: InputMaybe<CommentCreateNestedManyWithoutParentCommentInput>;
  user?: InputMaybe<UserCreateNestedOneWithoutCommentsInput>;
};

export type CommentCreateWithoutParentCommentInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  page: ExitPageCreateNestedOneWithoutCommentsInput;
  replies?: InputMaybe<CommentCreateNestedManyWithoutParentCommentInput>;
  user?: InputMaybe<UserCreateNestedOneWithoutCommentsInput>;
};

export type CommentCreateWithoutRepliesInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  page: ExitPageCreateNestedOneWithoutCommentsInput;
  parentComment?: InputMaybe<CommentCreateNestedOneWithoutRepliesInput>;
  user?: InputMaybe<UserCreateNestedOneWithoutCommentsInput>;
};

export type CommentCreateWithoutUserInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  page: ExitPageCreateNestedOneWithoutCommentsInput;
  parentComment?: InputMaybe<CommentCreateNestedOneWithoutRepliesInput>;
  replies?: InputMaybe<CommentCreateNestedManyWithoutParentCommentInput>;
};

export type CommentListRelationFilter = {
  every?: InputMaybe<CommentWhereInput>;
  none?: InputMaybe<CommentWhereInput>;
  some?: InputMaybe<CommentWhereInput>;
};

export type CommentNullableScalarRelationFilter = {
  is?: InputMaybe<CommentWhereInput>;
  isNot?: InputMaybe<CommentWhereInput>;
};

export type CommentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum CommentOrderByRelevanceFieldEnum {
  CONTENT = 'content',
  ID = 'id',
  PAGEID = 'pageId',
  PARENTCOMMENTID = 'parentCommentId',
  USERID = 'userId'
}

export type CommentOrderByRelevanceInput = {
  fields: Array<CommentOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type CommentOrderByWithRelationInput = {
  _relevance?: InputMaybe<CommentOrderByRelevanceInput>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  page?: InputMaybe<ExitPageOrderByWithRelationInput>;
  pageId?: InputMaybe<SortOrder>;
  parentComment?: InputMaybe<CommentOrderByWithRelationInput>;
  parentCommentId?: InputMaybe<SortOrderInput>;
  replies?: InputMaybe<CommentOrderByRelationAggregateInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrderInput>;
};

export enum CommentScalarFieldEnum {
  CONTENT = 'content',
  CREATEDAT = 'createdAt',
  ID = 'id',
  PAGEID = 'pageId',
  PARENTCOMMENTID = 'parentCommentId',
  USERID = 'userId'
}

export type CommentWhereInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  page?: InputMaybe<ExitPageScalarRelationFilter>;
  pageId?: InputMaybe<StringFilter>;
  parentComment?: InputMaybe<CommentNullableScalarRelationFilter>;
  parentCommentId?: InputMaybe<StringNullableFilter>;
  replies?: InputMaybe<CommentListRelationFilter>;
  user?: InputMaybe<UserNullableScalarRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type CommentWhereUniqueInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<ExitPageScalarRelationFilter>;
  pageId?: InputMaybe<StringFilter>;
  parentComment?: InputMaybe<CommentNullableScalarRelationFilter>;
  parentCommentId?: InputMaybe<StringNullableFilter>;
  replies?: InputMaybe<CommentListRelationFilter>;
  user?: InputMaybe<UserNullableScalarRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EnumReactionTypeFilter = {
  equals?: InputMaybe<ReactionType>;
  in?: InputMaybe<Array<ReactionType>>;
  not?: InputMaybe<NestedEnumReactionTypeFilter>;
  notIn?: InputMaybe<Array<ReactionType>>;
};

export type EnumToneFilter = {
  equals?: InputMaybe<Tone>;
  in?: InputMaybe<Array<Tone>>;
  not?: InputMaybe<NestedEnumToneFilter>;
  notIn?: InputMaybe<Array<Tone>>;
};

export type ExitPage = {
  __typename?: 'ExitPage';
  _count: ExitPageCount;
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['String']['output']>;
  comments?: Maybe<Array<Comment>>;
  createdAt: Scalars['DateTime']['output'];
  data: Scalars['JSON']['output'];
  id: Scalars['ID']['output'];
  isHallOfFame: Scalars['Boolean']['output'];
  reactions?: Maybe<Array<Reaction>>;
  shares?: Maybe<Array<PageShare>>;
  slug: Scalars['String']['output'];
  tags?: Maybe<Array<Tag>>;
  template: Template;
  templateId: Scalars['String']['output'];
  tone: Tone;
  updatedAt: Scalars['DateTime']['output'];
  versions?: Maybe<Array<PageVersion>>;
  views?: Maybe<Array<PageView>>;
  votes?: Maybe<Array<Vote>>;
};

export type ExitPageCount = {
  __typename?: 'ExitPageCount';
  comments: Scalars['Int']['output'];
  reactions: Scalars['Int']['output'];
  shares: Scalars['Int']['output'];
  tags: Scalars['Int']['output'];
  versions: Scalars['Int']['output'];
  views: Scalars['Int']['output'];
  votes: Scalars['Int']['output'];
};

export type ExitPageCreateInput = {
  audios?: InputMaybe<Array<Scalars['Upload']['input']>>;
  author?: InputMaybe<UserCreateNestedOneWithoutPagesInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutPageInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data: Scalars['JSON']['input'];
  gifUrls?: InputMaybe<Array<Scalars['String']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['Upload']['input']>>;
  isHallOfFame?: InputMaybe<Scalars['Boolean']['input']>;
  openingLine: Scalars['String']['input'];
  reactionDefault: Scalars['String']['input'];
  reactions?: InputMaybe<ReactionCreateNestedManyWithoutPageInput>;
  shares?: InputMaybe<PageShareCreateNestedManyWithoutPageInput>;
  slug: Scalars['String']['input'];
  tags?: InputMaybe<TagCreateNestedManyWithoutExitPageInput>;
  template: TemplateCreateNestedOneWithoutPagesInput;
  tone: Tone;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  versions?: InputMaybe<PageVersionCreateNestedManyWithoutPageInput>;
  videos?: InputMaybe<Array<Scalars['Upload']['input']>>;
  views?: InputMaybe<PageViewCreateNestedManyWithoutPageInput>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutPageInput>;
};

export type ExitPageCreateManyAuthorInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data: Scalars['JSON']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isHallOfFame?: InputMaybe<Scalars['Boolean']['input']>;
  slug: Scalars['String']['input'];
  templateId: Scalars['String']['input'];
  tone: Tone;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ExitPageCreateManyAuthorInputEnvelope = {
  data: Array<ExitPageCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ExitPageCreateManyTemplateInput = {
  authorId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data: Scalars['JSON']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isHallOfFame?: InputMaybe<Scalars['Boolean']['input']>;
  slug: Scalars['String']['input'];
  tone: Tone;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ExitPageCreateManyTemplateInputEnvelope = {
  data: Array<ExitPageCreateManyTemplateInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ExitPageCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<ExitPageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ExitPageCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<ExitPageCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<ExitPageCreateManyAuthorInputEnvelope>;
};

export type ExitPageCreateNestedManyWithoutTemplateInput = {
  connect?: InputMaybe<Array<ExitPageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ExitPageCreateOrConnectWithoutTemplateInput>>;
  create?: InputMaybe<Array<ExitPageCreateWithoutTemplateInput>>;
  createMany?: InputMaybe<ExitPageCreateManyTemplateInputEnvelope>;
};

export type ExitPageCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<ExitPageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ExitPageCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<ExitPageCreateWithoutCommentsInput>;
};

export type ExitPageCreateNestedOneWithoutReactionsInput = {
  connect?: InputMaybe<ExitPageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ExitPageCreateOrConnectWithoutReactionsInput>;
  create?: InputMaybe<ExitPageCreateWithoutReactionsInput>;
};

export type ExitPageCreateNestedOneWithoutSharesInput = {
  connect?: InputMaybe<ExitPageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ExitPageCreateOrConnectWithoutSharesInput>;
  create?: InputMaybe<ExitPageCreateWithoutSharesInput>;
};

export type ExitPageCreateNestedOneWithoutVersionsInput = {
  connect?: InputMaybe<ExitPageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ExitPageCreateOrConnectWithoutVersionsInput>;
  create?: InputMaybe<ExitPageCreateWithoutVersionsInput>;
};

export type ExitPageCreateNestedOneWithoutViewsInput = {
  connect?: InputMaybe<ExitPageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ExitPageCreateOrConnectWithoutViewsInput>;
  create?: InputMaybe<ExitPageCreateWithoutViewsInput>;
};

export type ExitPageCreateNestedOneWithoutVotesInput = {
  connect?: InputMaybe<ExitPageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ExitPageCreateOrConnectWithoutVotesInput>;
  create?: InputMaybe<ExitPageCreateWithoutVotesInput>;
};

export type ExitPageCreateOrConnectWithoutAuthorInput = {
  create: ExitPageCreateWithoutAuthorInput;
  where: ExitPageWhereUniqueInput;
};

export type ExitPageCreateOrConnectWithoutCommentsInput = {
  create: ExitPageCreateWithoutCommentsInput;
  where: ExitPageWhereUniqueInput;
};

export type ExitPageCreateOrConnectWithoutReactionsInput = {
  create: ExitPageCreateWithoutReactionsInput;
  where: ExitPageWhereUniqueInput;
};

export type ExitPageCreateOrConnectWithoutSharesInput = {
  create: ExitPageCreateWithoutSharesInput;
  where: ExitPageWhereUniqueInput;
};

export type ExitPageCreateOrConnectWithoutTemplateInput = {
  create: ExitPageCreateWithoutTemplateInput;
  where: ExitPageWhereUniqueInput;
};

export type ExitPageCreateOrConnectWithoutVersionsInput = {
  create: ExitPageCreateWithoutVersionsInput;
  where: ExitPageWhereUniqueInput;
};

export type ExitPageCreateOrConnectWithoutViewsInput = {
  create: ExitPageCreateWithoutViewsInput;
  where: ExitPageWhereUniqueInput;
};

export type ExitPageCreateOrConnectWithoutVotesInput = {
  create: ExitPageCreateWithoutVotesInput;
  where: ExitPageWhereUniqueInput;
};

export type ExitPageCreateWithoutAuthorInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutPageInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data: Scalars['JSON']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isHallOfFame?: InputMaybe<Scalars['Boolean']['input']>;
  reactions?: InputMaybe<ReactionCreateNestedManyWithoutPageInput>;
  shares?: InputMaybe<PageShareCreateNestedManyWithoutPageInput>;
  slug: Scalars['String']['input'];
  tags?: InputMaybe<TagCreateNestedManyWithoutExitPageInput>;
  template: TemplateCreateNestedOneWithoutPagesInput;
  tone: Tone;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  versions?: InputMaybe<PageVersionCreateNestedManyWithoutPageInput>;
  views?: InputMaybe<PageViewCreateNestedManyWithoutPageInput>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutPageInput>;
};

export type ExitPageCreateWithoutCommentsInput = {
  author?: InputMaybe<UserCreateNestedOneWithoutPagesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data: Scalars['JSON']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isHallOfFame?: InputMaybe<Scalars['Boolean']['input']>;
  reactions?: InputMaybe<ReactionCreateNestedManyWithoutPageInput>;
  shares?: InputMaybe<PageShareCreateNestedManyWithoutPageInput>;
  slug: Scalars['String']['input'];
  tags?: InputMaybe<TagCreateNestedManyWithoutExitPageInput>;
  template: TemplateCreateNestedOneWithoutPagesInput;
  tone: Tone;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  versions?: InputMaybe<PageVersionCreateNestedManyWithoutPageInput>;
  views?: InputMaybe<PageViewCreateNestedManyWithoutPageInput>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutPageInput>;
};

export type ExitPageCreateWithoutReactionsInput = {
  author?: InputMaybe<UserCreateNestedOneWithoutPagesInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutPageInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data: Scalars['JSON']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isHallOfFame?: InputMaybe<Scalars['Boolean']['input']>;
  shares?: InputMaybe<PageShareCreateNestedManyWithoutPageInput>;
  slug: Scalars['String']['input'];
  tags?: InputMaybe<TagCreateNestedManyWithoutExitPageInput>;
  template: TemplateCreateNestedOneWithoutPagesInput;
  tone: Tone;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  versions?: InputMaybe<PageVersionCreateNestedManyWithoutPageInput>;
  views?: InputMaybe<PageViewCreateNestedManyWithoutPageInput>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutPageInput>;
};

export type ExitPageCreateWithoutSharesInput = {
  author?: InputMaybe<UserCreateNestedOneWithoutPagesInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutPageInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data: Scalars['JSON']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isHallOfFame?: InputMaybe<Scalars['Boolean']['input']>;
  reactions?: InputMaybe<ReactionCreateNestedManyWithoutPageInput>;
  slug: Scalars['String']['input'];
  tags?: InputMaybe<TagCreateNestedManyWithoutExitPageInput>;
  template: TemplateCreateNestedOneWithoutPagesInput;
  tone: Tone;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  versions?: InputMaybe<PageVersionCreateNestedManyWithoutPageInput>;
  views?: InputMaybe<PageViewCreateNestedManyWithoutPageInput>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutPageInput>;
};

export type ExitPageCreateWithoutTemplateInput = {
  author?: InputMaybe<UserCreateNestedOneWithoutPagesInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutPageInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data: Scalars['JSON']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isHallOfFame?: InputMaybe<Scalars['Boolean']['input']>;
  reactions?: InputMaybe<ReactionCreateNestedManyWithoutPageInput>;
  shares?: InputMaybe<PageShareCreateNestedManyWithoutPageInput>;
  slug: Scalars['String']['input'];
  tags?: InputMaybe<TagCreateNestedManyWithoutExitPageInput>;
  tone: Tone;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  versions?: InputMaybe<PageVersionCreateNestedManyWithoutPageInput>;
  views?: InputMaybe<PageViewCreateNestedManyWithoutPageInput>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutPageInput>;
};

export type ExitPageCreateWithoutVersionsInput = {
  author?: InputMaybe<UserCreateNestedOneWithoutPagesInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutPageInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data: Scalars['JSON']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isHallOfFame?: InputMaybe<Scalars['Boolean']['input']>;
  reactions?: InputMaybe<ReactionCreateNestedManyWithoutPageInput>;
  shares?: InputMaybe<PageShareCreateNestedManyWithoutPageInput>;
  slug: Scalars['String']['input'];
  tags?: InputMaybe<TagCreateNestedManyWithoutExitPageInput>;
  template: TemplateCreateNestedOneWithoutPagesInput;
  tone: Tone;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  views?: InputMaybe<PageViewCreateNestedManyWithoutPageInput>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutPageInput>;
};

export type ExitPageCreateWithoutViewsInput = {
  author?: InputMaybe<UserCreateNestedOneWithoutPagesInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutPageInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data: Scalars['JSON']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isHallOfFame?: InputMaybe<Scalars['Boolean']['input']>;
  reactions?: InputMaybe<ReactionCreateNestedManyWithoutPageInput>;
  shares?: InputMaybe<PageShareCreateNestedManyWithoutPageInput>;
  slug: Scalars['String']['input'];
  tags?: InputMaybe<TagCreateNestedManyWithoutExitPageInput>;
  template: TemplateCreateNestedOneWithoutPagesInput;
  tone: Tone;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  versions?: InputMaybe<PageVersionCreateNestedManyWithoutPageInput>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutPageInput>;
};

export type ExitPageCreateWithoutVotesInput = {
  author?: InputMaybe<UserCreateNestedOneWithoutPagesInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutPageInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data: Scalars['JSON']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isHallOfFame?: InputMaybe<Scalars['Boolean']['input']>;
  reactions?: InputMaybe<ReactionCreateNestedManyWithoutPageInput>;
  shares?: InputMaybe<PageShareCreateNestedManyWithoutPageInput>;
  slug: Scalars['String']['input'];
  tags?: InputMaybe<TagCreateNestedManyWithoutExitPageInput>;
  template: TemplateCreateNestedOneWithoutPagesInput;
  tone: Tone;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  versions?: InputMaybe<PageVersionCreateNestedManyWithoutPageInput>;
  views?: InputMaybe<PageViewCreateNestedManyWithoutPageInput>;
};

export type ExitPageListRelationFilter = {
  every?: InputMaybe<ExitPageWhereInput>;
  none?: InputMaybe<ExitPageWhereInput>;
  some?: InputMaybe<ExitPageWhereInput>;
};

export type ExitPageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum ExitPageOrderByRelevanceFieldEnum {
  AUTHORID = 'authorId',
  ID = 'id',
  SLUG = 'slug',
  TEMPLATEID = 'templateId'
}

export type ExitPageOrderByRelevanceInput = {
  fields: Array<ExitPageOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type ExitPageOrderByWithRelationInput = {
  _relevance?: InputMaybe<ExitPageOrderByRelevanceInput>;
  author?: InputMaybe<UserOrderByWithRelationInput>;
  authorId?: InputMaybe<SortOrderInput>;
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  data?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isHallOfFame?: InputMaybe<SortOrder>;
  reactions?: InputMaybe<ReactionOrderByRelationAggregateInput>;
  shares?: InputMaybe<PageShareOrderByRelationAggregateInput>;
  slug?: InputMaybe<SortOrder>;
  tags?: InputMaybe<TagOrderByRelationAggregateInput>;
  template?: InputMaybe<TemplateOrderByWithRelationInput>;
  templateId?: InputMaybe<SortOrder>;
  tone?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  versions?: InputMaybe<PageVersionOrderByRelationAggregateInput>;
  views?: InputMaybe<PageViewOrderByRelationAggregateInput>;
  votes?: InputMaybe<VoteOrderByRelationAggregateInput>;
};

export enum ExitPageScalarFieldEnum {
  AUTHORID = 'authorId',
  CREATEDAT = 'createdAt',
  DATA = 'data',
  ID = 'id',
  ISHALLOFFAME = 'isHallOfFame',
  SLUG = 'slug',
  TEMPLATEID = 'templateId',
  TONE = 'tone',
  UPDATEDAT = 'updatedAt'
}

export type ExitPageScalarRelationFilter = {
  is?: InputMaybe<ExitPageWhereInput>;
  isNot?: InputMaybe<ExitPageWhereInput>;
};

export type ExitPageWhereInput = {
  AND?: InputMaybe<Array<ExitPageWhereInput>>;
  NOT?: InputMaybe<Array<ExitPageWhereInput>>;
  OR?: InputMaybe<Array<ExitPageWhereInput>>;
  author?: InputMaybe<UserNullableScalarRelationFilter>;
  authorId?: InputMaybe<StringNullableFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  data?: InputMaybe<JsonFilter>;
  id?: InputMaybe<StringFilter>;
  isHallOfFame?: InputMaybe<BoolFilter>;
  reactions?: InputMaybe<ReactionListRelationFilter>;
  shares?: InputMaybe<PageShareListRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  tags?: InputMaybe<TagListRelationFilter>;
  template?: InputMaybe<TemplateScalarRelationFilter>;
  templateId?: InputMaybe<StringFilter>;
  tone?: InputMaybe<EnumToneFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  versions?: InputMaybe<PageVersionListRelationFilter>;
  views?: InputMaybe<PageViewListRelationFilter>;
  votes?: InputMaybe<VoteListRelationFilter>;
};

export type ExitPageWhereUniqueInput = {
  AND?: InputMaybe<Array<ExitPageWhereInput>>;
  NOT?: InputMaybe<Array<ExitPageWhereInput>>;
  OR?: InputMaybe<Array<ExitPageWhereInput>>;
  author?: InputMaybe<UserNullableScalarRelationFilter>;
  authorId?: InputMaybe<StringNullableFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  data?: InputMaybe<JsonFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  isHallOfFame?: InputMaybe<BoolFilter>;
  reactions?: InputMaybe<ReactionListRelationFilter>;
  shares?: InputMaybe<PageShareListRelationFilter>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagListRelationFilter>;
  template?: InputMaybe<TemplateScalarRelationFilter>;
  templateId?: InputMaybe<StringFilter>;
  tone?: InputMaybe<EnumToneFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  versions?: InputMaybe<PageVersionListRelationFilter>;
  views?: InputMaybe<PageViewListRelationFilter>;
  votes?: InputMaybe<VoteListRelationFilter>;
};

export type FileUploadResult = {
  __typename?: 'FileUploadResult';
  url: Scalars['String']['output'];
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type JsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment: Comment;
  createExitPage: ExitPage;
  createPageVersion: PageVersion;
  createReaction: Reaction;
  createTemplate: Template;
  createUser: User;
  createVote: Vote;
  login?: Maybe<LoginOutput>;
  logout: Scalars['Boolean']['output'];
  register: User;
  updateComment: Comment;
  updateExitPage: ExitPage;
  updatePageVersion: PageVersion;
  updateReaction: Reaction;
  updateTemplate: Template;
  updateVote: Vote;
  uploadFile: FileUploadResult;
};


export type MutationCreateCommentArgs = {
  input: CommentCreateInput;
};


export type MutationCreateExitPageArgs = {
  input: ExitPageCreateInput;
};


export type MutationCreatePageVersionArgs = {
  input: PageVersionCreateInput;
};


export type MutationCreateReactionArgs = {
  input: ReactionCreateInput;
};


export type MutationCreateTemplateArgs = {
  input: TemplateCreateInput;
};


export type MutationCreateUserArgs = {
  input: UserCreateInput;
};


export type MutationCreateVoteArgs = {
  input: VoteCreateInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationUpdateCommentArgs = {
  id: Scalars['String']['input'];
  input: CommentCreateInput;
};


export type MutationUpdateExitPageArgs = {
  id: Scalars['String']['input'];
  input: ExitPageCreateInput;
};


export type MutationUpdatePageVersionArgs = {
  id: Scalars['String']['input'];
  input: PageVersionCreateInput;
};


export type MutationUpdateReactionArgs = {
  id: Scalars['String']['input'];
  input: ReactionCreateInput;
};


export type MutationUpdateTemplateArgs = {
  id: Scalars['String']['input'];
  input: TemplateCreateInput;
};


export type MutationUpdateVoteArgs = {
  id: Scalars['String']['input'];
  input: VoteCreateInput;
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload']['input'];
  path?: InputMaybe<Scalars['String']['input']>;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumReactionTypeFilter = {
  equals?: InputMaybe<ReactionType>;
  in?: InputMaybe<Array<ReactionType>>;
  not?: InputMaybe<NestedEnumReactionTypeFilter>;
  notIn?: InputMaybe<Array<ReactionType>>;
};

export type NestedEnumToneFilter = {
  equals?: InputMaybe<Tone>;
  in?: InputMaybe<Array<Tone>>;
  not?: InputMaybe<NestedEnumToneFilter>;
  notIn?: InputMaybe<Array<Tone>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  FIRST = 'first',
  LAST = 'last'
}

export type PageShare = {
  __typename?: 'PageShare';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  page: ExitPage;
  pageId: Scalars['String']['output'];
  platform: Scalars['String']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type PageShareCreateManyPageInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  platform: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type PageShareCreateManyPageInputEnvelope = {
  data: Array<PageShareCreateManyPageInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageShareCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  pageId: Scalars['String']['input'];
  platform: Scalars['String']['input'];
};

export type PageShareCreateManyUserInputEnvelope = {
  data: Array<PageShareCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageShareCreateNestedManyWithoutPageInput = {
  connect?: InputMaybe<Array<PageShareWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PageShareCreateOrConnectWithoutPageInput>>;
  create?: InputMaybe<Array<PageShareCreateWithoutPageInput>>;
  createMany?: InputMaybe<PageShareCreateManyPageInputEnvelope>;
};

export type PageShareCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<PageShareWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PageShareCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PageShareCreateWithoutUserInput>>;
  createMany?: InputMaybe<PageShareCreateManyUserInputEnvelope>;
};

export type PageShareCreateOrConnectWithoutPageInput = {
  create: PageShareCreateWithoutPageInput;
  where: PageShareWhereUniqueInput;
};

export type PageShareCreateOrConnectWithoutUserInput = {
  create: PageShareCreateWithoutUserInput;
  where: PageShareWhereUniqueInput;
};

export type PageShareCreateWithoutPageInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  platform: Scalars['String']['input'];
  user?: InputMaybe<UserCreateNestedOneWithoutSharesInput>;
};

export type PageShareCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  page: ExitPageCreateNestedOneWithoutSharesInput;
  platform: Scalars['String']['input'];
};

export type PageShareListRelationFilter = {
  every?: InputMaybe<PageShareWhereInput>;
  none?: InputMaybe<PageShareWhereInput>;
  some?: InputMaybe<PageShareWhereInput>;
};

export type PageShareOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PageShareWhereInput = {
  AND?: InputMaybe<Array<PageShareWhereInput>>;
  NOT?: InputMaybe<Array<PageShareWhereInput>>;
  OR?: InputMaybe<Array<PageShareWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  page?: InputMaybe<ExitPageScalarRelationFilter>;
  pageId?: InputMaybe<StringFilter>;
  platform?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserNullableScalarRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type PageShareWhereUniqueInput = {
  AND?: InputMaybe<Array<PageShareWhereInput>>;
  NOT?: InputMaybe<Array<PageShareWhereInput>>;
  OR?: InputMaybe<Array<PageShareWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<ExitPageScalarRelationFilter>;
  pageId?: InputMaybe<StringFilter>;
  platform?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserNullableScalarRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type PageVersion = {
  __typename?: 'PageVersion';
  createdAt: Scalars['DateTime']['output'];
  data: Scalars['JSON']['output'];
  id: Scalars['ID']['output'];
  page: ExitPage;
  pageId: Scalars['String']['output'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']['output']>;
  version: Scalars['Int']['output'];
};

export type PageVersionCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data: Scalars['JSON']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  page: ExitPageCreateNestedOneWithoutVersionsInput;
  updatedBy?: InputMaybe<UserCreateNestedOneWithoutVersionsInput>;
  version: Scalars['Int']['input'];
};

export type PageVersionCreateManyPageInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data: Scalars['JSON']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  updatedById?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Int']['input'];
};

export type PageVersionCreateManyPageInputEnvelope = {
  data: Array<PageVersionCreateManyPageInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageVersionCreateManyUpdatedByInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data: Scalars['JSON']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  pageId: Scalars['String']['input'];
  version: Scalars['Int']['input'];
};

export type PageVersionCreateManyUpdatedByInputEnvelope = {
  data: Array<PageVersionCreateManyUpdatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageVersionCreateNestedManyWithoutPageInput = {
  connect?: InputMaybe<Array<PageVersionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PageVersionCreateOrConnectWithoutPageInput>>;
  create?: InputMaybe<Array<PageVersionCreateWithoutPageInput>>;
  createMany?: InputMaybe<PageVersionCreateManyPageInputEnvelope>;
};

export type PageVersionCreateNestedManyWithoutUpdatedByInput = {
  connect?: InputMaybe<Array<PageVersionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PageVersionCreateOrConnectWithoutUpdatedByInput>>;
  create?: InputMaybe<Array<PageVersionCreateWithoutUpdatedByInput>>;
  createMany?: InputMaybe<PageVersionCreateManyUpdatedByInputEnvelope>;
};

export type PageVersionCreateOrConnectWithoutPageInput = {
  create: PageVersionCreateWithoutPageInput;
  where: PageVersionWhereUniqueInput;
};

export type PageVersionCreateOrConnectWithoutUpdatedByInput = {
  create: PageVersionCreateWithoutUpdatedByInput;
  where: PageVersionWhereUniqueInput;
};

export type PageVersionCreateWithoutPageInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data: Scalars['JSON']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  updatedBy?: InputMaybe<UserCreateNestedOneWithoutVersionsInput>;
  version: Scalars['Int']['input'];
};

export type PageVersionCreateWithoutUpdatedByInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data: Scalars['JSON']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  page: ExitPageCreateNestedOneWithoutVersionsInput;
  version: Scalars['Int']['input'];
};

export type PageVersionListRelationFilter = {
  every?: InputMaybe<PageVersionWhereInput>;
  none?: InputMaybe<PageVersionWhereInput>;
  some?: InputMaybe<PageVersionWhereInput>;
};

export type PageVersionOneVersionPerPageCompoundUniqueInput = {
  pageId: Scalars['String']['input'];
  version: Scalars['Int']['input'];
};

export type PageVersionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum PageVersionOrderByRelevanceFieldEnum {
  ID = 'id',
  PAGEID = 'pageId',
  UPDATEDBYID = 'updatedById'
}

export type PageVersionOrderByRelevanceInput = {
  fields: Array<PageVersionOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type PageVersionOrderByWithRelationInput = {
  _relevance?: InputMaybe<PageVersionOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  data?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  page?: InputMaybe<ExitPageOrderByWithRelationInput>;
  pageId?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  updatedById?: InputMaybe<SortOrderInput>;
  version?: InputMaybe<SortOrder>;
};

export enum PageVersionScalarFieldEnum {
  CREATEDAT = 'createdAt',
  DATA = 'data',
  ID = 'id',
  PAGEID = 'pageId',
  UPDATEDBYID = 'updatedById',
  VERSION = 'version'
}

export type PageVersionWhereInput = {
  AND?: InputMaybe<Array<PageVersionWhereInput>>;
  NOT?: InputMaybe<Array<PageVersionWhereInput>>;
  OR?: InputMaybe<Array<PageVersionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  data?: InputMaybe<JsonFilter>;
  id?: InputMaybe<StringFilter>;
  page?: InputMaybe<ExitPageScalarRelationFilter>;
  pageId?: InputMaybe<StringFilter>;
  updatedBy?: InputMaybe<UserNullableScalarRelationFilter>;
  updatedById?: InputMaybe<StringNullableFilter>;
  version?: InputMaybe<IntFilter>;
};

export type PageVersionWhereUniqueInput = {
  AND?: InputMaybe<Array<PageVersionWhereInput>>;
  NOT?: InputMaybe<Array<PageVersionWhereInput>>;
  OR?: InputMaybe<Array<PageVersionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  data?: InputMaybe<JsonFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  one_version_per_page?: InputMaybe<PageVersionOneVersionPerPageCompoundUniqueInput>;
  page?: InputMaybe<ExitPageScalarRelationFilter>;
  pageId?: InputMaybe<StringFilter>;
  updatedBy?: InputMaybe<UserNullableScalarRelationFilter>;
  updatedById?: InputMaybe<StringNullableFilter>;
  version?: InputMaybe<IntFilter>;
};

export type PageView = {
  __typename?: 'PageView';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  page: ExitPage;
  pageId: Scalars['String']['output'];
  sessionId?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type PageViewCreateManyPageInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  sessionId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type PageViewCreateManyPageInputEnvelope = {
  data: Array<PageViewCreateManyPageInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageViewCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  pageId: Scalars['String']['input'];
  sessionId?: InputMaybe<Scalars['String']['input']>;
};

export type PageViewCreateManyUserInputEnvelope = {
  data: Array<PageViewCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageViewCreateNestedManyWithoutPageInput = {
  connect?: InputMaybe<Array<PageViewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PageViewCreateOrConnectWithoutPageInput>>;
  create?: InputMaybe<Array<PageViewCreateWithoutPageInput>>;
  createMany?: InputMaybe<PageViewCreateManyPageInputEnvelope>;
};

export type PageViewCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<PageViewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PageViewCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PageViewCreateWithoutUserInput>>;
  createMany?: InputMaybe<PageViewCreateManyUserInputEnvelope>;
};

export type PageViewCreateOrConnectWithoutPageInput = {
  create: PageViewCreateWithoutPageInput;
  where: PageViewWhereUniqueInput;
};

export type PageViewCreateOrConnectWithoutUserInput = {
  create: PageViewCreateWithoutUserInput;
  where: PageViewWhereUniqueInput;
};

export type PageViewCreateWithoutPageInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  sessionId?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserCreateNestedOneWithoutViewsInput>;
};

export type PageViewCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  page: ExitPageCreateNestedOneWithoutViewsInput;
  sessionId?: InputMaybe<Scalars['String']['input']>;
};

export type PageViewListRelationFilter = {
  every?: InputMaybe<PageViewWhereInput>;
  none?: InputMaybe<PageViewWhereInput>;
  some?: InputMaybe<PageViewWhereInput>;
};

export type PageViewOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PageViewWhereInput = {
  AND?: InputMaybe<Array<PageViewWhereInput>>;
  NOT?: InputMaybe<Array<PageViewWhereInput>>;
  OR?: InputMaybe<Array<PageViewWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  page?: InputMaybe<ExitPageScalarRelationFilter>;
  pageId?: InputMaybe<StringFilter>;
  sessionId?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserNullableScalarRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type PageViewWhereUniqueInput = {
  AND?: InputMaybe<Array<PageViewWhereInput>>;
  NOT?: InputMaybe<Array<PageViewWhereInput>>;
  OR?: InputMaybe<Array<PageViewWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<ExitPageScalarRelationFilter>;
  pageId?: InputMaybe<StringFilter>;
  sessionId?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserNullableScalarRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type Query = {
  __typename?: 'Query';
  comment: Comment;
  comments: Array<Comment>;
  exitPage: ExitPage;
  exitPages: Array<ExitPage>;
  me: User;
  pageVersion: PageVersion;
  pageVersions: Array<PageVersion>;
  reaction: Reaction;
  template: Template;
  templates: Array<Template>;
  user: User;
  users: Array<User>;
  vote: Vote;
};


export type QueryCommentArgs = {
  id: Scalars['String']['input'];
};


export type QueryCommentsArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryExitPageArgs = {
  id: Scalars['String']['input'];
};


export type QueryExitPagesArgs = {
  cursor?: InputMaybe<ExitPageWhereUniqueInput>;
  distinct?: InputMaybe<Array<ExitPageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ExitPageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExitPageWhereInput>;
};


export type QueryPageVersionArgs = {
  id: Scalars['String']['input'];
};


export type QueryPageVersionsArgs = {
  cursor?: InputMaybe<PageVersionWhereUniqueInput>;
  distinct?: InputMaybe<Array<PageVersionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PageVersionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageVersionWhereInput>;
};


export type QueryReactionArgs = {
  id: Scalars['String']['input'];
};


export type QueryTemplateArgs = {
  id: Scalars['String']['input'];
};


export type QueryTemplatesArgs = {
  cursor?: InputMaybe<TemplateWhereUniqueInput>;
  distinct?: InputMaybe<Array<TemplateScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TemplateOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TemplateWhereInput>;
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryVoteArgs = {
  id: Scalars['String']['input'];
};

export enum QueryMode {
  DEFAULT = 'default',
  INSENSITIVE = 'insensitive'
}

export type Reaction = {
  __typename?: 'Reaction';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  page: ExitPage;
  pageId: Scalars['String']['output'];
  type: ReactionType;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ReactionCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  page: ExitPageCreateNestedOneWithoutReactionsInput;
  type: ReactionType;
  user?: InputMaybe<UserCreateNestedOneWithoutReactionsInput>;
};

export type ReactionCreateManyPageInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  type: ReactionType;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type ReactionCreateManyPageInputEnvelope = {
  data: Array<ReactionCreateManyPageInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReactionCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  pageId: Scalars['String']['input'];
  type: ReactionType;
};

export type ReactionCreateManyUserInputEnvelope = {
  data: Array<ReactionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReactionCreateNestedManyWithoutPageInput = {
  connect?: InputMaybe<Array<ReactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReactionCreateOrConnectWithoutPageInput>>;
  create?: InputMaybe<Array<ReactionCreateWithoutPageInput>>;
  createMany?: InputMaybe<ReactionCreateManyPageInputEnvelope>;
};

export type ReactionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ReactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReactionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ReactionCreateWithoutUserInput>>;
  createMany?: InputMaybe<ReactionCreateManyUserInputEnvelope>;
};

export type ReactionCreateOrConnectWithoutPageInput = {
  create: ReactionCreateWithoutPageInput;
  where: ReactionWhereUniqueInput;
};

export type ReactionCreateOrConnectWithoutUserInput = {
  create: ReactionCreateWithoutUserInput;
  where: ReactionWhereUniqueInput;
};

export type ReactionCreateWithoutPageInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  type: ReactionType;
  user?: InputMaybe<UserCreateNestedOneWithoutReactionsInput>;
};

export type ReactionCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  page: ExitPageCreateNestedOneWithoutReactionsInput;
  type: ReactionType;
};

export type ReactionListRelationFilter = {
  every?: InputMaybe<ReactionWhereInput>;
  none?: InputMaybe<ReactionWhereInput>;
  some?: InputMaybe<ReactionWhereInput>;
};

export type ReactionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum ReactionType {
  ANGRY = 'ANGRY',
  HAHA = 'HAHA',
  LIKE = 'LIKE',
  LOVE = 'LOVE',
  SAD = 'SAD'
}

export type ReactionWhereInput = {
  AND?: InputMaybe<Array<ReactionWhereInput>>;
  NOT?: InputMaybe<Array<ReactionWhereInput>>;
  OR?: InputMaybe<Array<ReactionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  page?: InputMaybe<ExitPageScalarRelationFilter>;
  pageId?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumReactionTypeFilter>;
  user?: InputMaybe<UserNullableScalarRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type ReactionWhereUniqueInput = {
  AND?: InputMaybe<Array<ReactionWhereInput>>;
  NOT?: InputMaybe<Array<ReactionWhereInput>>;
  OR?: InputMaybe<Array<ReactionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<ExitPageScalarRelationFilter>;
  pageId?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumReactionTypeFilter>;
  user?: InputMaybe<UserNullableScalarRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type RefreshToken = {
  __typename?: 'RefreshToken';
  createdAt: Scalars['DateTime']['output'];
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  token: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type RefreshTokenCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

export type RefreshTokenCreateManyUserInputEnvelope = {
  data: Array<RefreshTokenCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RefreshTokenCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<RefreshTokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RefreshTokenCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RefreshTokenCreateWithoutUserInput>>;
  createMany?: InputMaybe<RefreshTokenCreateManyUserInputEnvelope>;
};

export type RefreshTokenCreateOrConnectWithoutUserInput = {
  create: RefreshTokenCreateWithoutUserInput;
  where: RefreshTokenWhereUniqueInput;
};

export type RefreshTokenCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

export type RefreshTokenListRelationFilter = {
  every?: InputMaybe<RefreshTokenWhereInput>;
  none?: InputMaybe<RefreshTokenWhereInput>;
  some?: InputMaybe<RefreshTokenWhereInput>;
};

export type RefreshTokenOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RefreshTokenWhereInput = {
  AND?: InputMaybe<Array<RefreshTokenWhereInput>>;
  NOT?: InputMaybe<Array<RefreshTokenWhereInput>>;
  OR?: InputMaybe<Array<RefreshTokenWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type RefreshTokenWhereUniqueInput = {
  AND?: InputMaybe<Array<RefreshTokenWhereInput>>;
  NOT?: InputMaybe<Array<RefreshTokenWhereInput>>;
  OR?: InputMaybe<Array<RefreshTokenWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type RegisterInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Role = {
  __typename?: 'Role';
  _count: RoleCount;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  users?: Maybe<Array<User>>;
};

export type RoleCount = {
  __typename?: 'RoleCount';
  users: Scalars['Int']['output'];
};

export type RoleCreateNestedManyWithoutUsersInput = {
  connect?: InputMaybe<Array<RoleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RoleCreateOrConnectWithoutUsersInput>>;
  create?: InputMaybe<Array<RoleCreateWithoutUsersInput>>;
};

export type RoleCreateOrConnectWithoutUsersInput = {
  create: RoleCreateWithoutUsersInput;
  where: RoleWhereUniqueInput;
};

export type RoleCreateWithoutUsersInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type RoleListRelationFilter = {
  every?: InputMaybe<RoleWhereInput>;
  none?: InputMaybe<RoleWhereInput>;
  some?: InputMaybe<RoleWhereInput>;
};

export type RoleOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RoleWhereInput = {
  AND?: InputMaybe<Array<RoleWhereInput>>;
  NOT?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type RoleWhereUniqueInput = {
  AND?: InputMaybe<Array<RoleWhereInput>>;
  NOT?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<UserListRelationFilter>;
};

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  ExitPage?: Maybe<Array<ExitPage>>;
  _count: TagCount;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  pageId: Scalars['String']['output'];
};

export type TagCount = {
  __typename?: 'TagCount';
  ExitPage: Scalars['Int']['output'];
};

export type TagCreateNestedManyWithoutExitPageInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagCreateOrConnectWithoutExitPageInput>>;
  create?: InputMaybe<Array<TagCreateWithoutExitPageInput>>;
};

export type TagCreateOrConnectWithoutExitPageInput = {
  create: TagCreateWithoutExitPageInput;
  where: TagWhereUniqueInput;
};

export type TagCreateWithoutExitPageInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  pageId: Scalars['String']['input'];
};

export type TagListRelationFilter = {
  every?: InputMaybe<TagWhereInput>;
  none?: InputMaybe<TagWhereInput>;
  some?: InputMaybe<TagWhereInput>;
};

export type TagOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  ExitPage?: InputMaybe<ExitPageListRelationFilter>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  pageId?: InputMaybe<StringFilter>;
};

export type TagWhereUniqueInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  ExitPage?: InputMaybe<ExitPageListRelationFilter>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  pageId?: InputMaybe<StringFilter>;
};

export type Template = {
  __typename?: 'Template';
  _count: TemplateCount;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  pages?: Maybe<Array<ExitPage>>;
  placeholders: Scalars['JSON']['output'];
  uniqueKey: Scalars['String']['output'];
};

export type TemplateCount = {
  __typename?: 'TemplateCount';
  pages: Scalars['Int']['output'];
};

export type TemplateCreateInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  pages?: InputMaybe<ExitPageCreateNestedManyWithoutTemplateInput>;
  placeholders: Scalars['JSON']['input'];
  uniqueKey: Scalars['String']['input'];
};

export type TemplateCreateNestedOneWithoutPagesInput = {
  connect?: InputMaybe<TemplateWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TemplateCreateOrConnectWithoutPagesInput>;
  create?: InputMaybe<TemplateCreateWithoutPagesInput>;
};

export type TemplateCreateOrConnectWithoutPagesInput = {
  create: TemplateCreateWithoutPagesInput;
  where: TemplateWhereUniqueInput;
};

export type TemplateCreateWithoutPagesInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  placeholders: Scalars['JSON']['input'];
  uniqueKey: Scalars['String']['input'];
};

export enum TemplateOrderByRelevanceFieldEnum {
  CONTENT = 'content',
  DESCRIPTION = 'description',
  ID = 'id',
  NAME = 'name',
  UNIQUEKEY = 'uniqueKey'
}

export type TemplateOrderByRelevanceInput = {
  fields: Array<TemplateOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type TemplateOrderByWithRelationInput = {
  _relevance?: InputMaybe<TemplateOrderByRelevanceInput>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  pages?: InputMaybe<ExitPageOrderByRelationAggregateInput>;
  placeholders?: InputMaybe<SortOrder>;
  uniqueKey?: InputMaybe<SortOrder>;
};

export enum TemplateScalarFieldEnum {
  CONTENT = 'content',
  CREATEDAT = 'createdAt',
  DESCRIPTION = 'description',
  ID = 'id',
  NAME = 'name',
  PLACEHOLDERS = 'placeholders',
  UNIQUEKEY = 'uniqueKey'
}

export type TemplateScalarRelationFilter = {
  is?: InputMaybe<TemplateWhereInput>;
  isNot?: InputMaybe<TemplateWhereInput>;
};

export type TemplateWhereInput = {
  AND?: InputMaybe<Array<TemplateWhereInput>>;
  NOT?: InputMaybe<Array<TemplateWhereInput>>;
  OR?: InputMaybe<Array<TemplateWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  pages?: InputMaybe<ExitPageListRelationFilter>;
  placeholders?: InputMaybe<JsonFilter>;
  uniqueKey?: InputMaybe<StringFilter>;
};

export type TemplateWhereUniqueInput = {
  AND?: InputMaybe<Array<TemplateWhereInput>>;
  NOT?: InputMaybe<Array<TemplateWhereInput>>;
  OR?: InputMaybe<Array<TemplateWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  pages?: InputMaybe<ExitPageListRelationFilter>;
  placeholders?: InputMaybe<JsonFilter>;
  uniqueKey?: InputMaybe<Scalars['String']['input']>;
};

export enum Tone {
  ABSURD = 'ABSURD',
  CLASSY = 'CLASSY',
  CRINGE = 'CRINGE',
  DRAMATIC = 'DRAMATIC',
  HONEST = 'HONEST',
  IRONIC = 'IRONIC',
  PASSIVE_AGGRESSIVE = 'PASSIVE_AGGRESSIVE',
  TOUCHING = 'TOUCHING'
}

export type User = {
  __typename?: 'User';
  Role?: Maybe<Array<Role>>;
  _count: UserCount;
  comments?: Maybe<Array<Comment>>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images?: Maybe<Array<UserImage>>;
  isVerified: Scalars['Boolean']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  pages?: Maybe<Array<ExitPage>>;
  password: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  reactions?: Maybe<Array<Reaction>>;
  shares?: Maybe<Array<PageShare>>;
  tokens?: Maybe<Array<RefreshToken>>;
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
  versions?: Maybe<Array<PageVersion>>;
  views?: Maybe<Array<PageView>>;
  votes?: Maybe<Array<Vote>>;
};

export type UserCount = {
  __typename?: 'UserCount';
  Role: Scalars['Int']['output'];
  comments: Scalars['Int']['output'];
  images: Scalars['Int']['output'];
  pages: Scalars['Int']['output'];
  reactions: Scalars['Int']['output'];
  shares: Scalars['Int']['output'];
  tokens: Scalars['Int']['output'];
  versions: Scalars['Int']['output'];
  views: Scalars['Int']['output'];
  votes: Scalars['Int']['output'];
};

export type UserCreateInput = {
  Role?: InputMaybe<RoleCreateNestedManyWithoutUsersInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<UserImageCreateNestedManyWithoutUserInput>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  pages?: InputMaybe<ExitPageCreateNestedManyWithoutAuthorInput>;
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  reactions?: InputMaybe<ReactionCreateNestedManyWithoutUserInput>;
  shares?: InputMaybe<PageShareCreateNestedManyWithoutUserInput>;
  tokens?: InputMaybe<RefreshTokenCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username: Scalars['String']['input'];
  versions?: InputMaybe<PageVersionCreateNestedManyWithoutUpdatedByInput>;
  views?: InputMaybe<PageViewCreateNestedManyWithoutUserInput>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<UserCreateWithoutCommentsInput>;
};

export type UserCreateNestedOneWithoutPagesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPagesInput>;
  create?: InputMaybe<UserCreateWithoutPagesInput>;
};

export type UserCreateNestedOneWithoutReactionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReactionsInput>;
  create?: InputMaybe<UserCreateWithoutReactionsInput>;
};

export type UserCreateNestedOneWithoutSharesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSharesInput>;
  create?: InputMaybe<UserCreateWithoutSharesInput>;
};

export type UserCreateNestedOneWithoutVersionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutVersionsInput>;
  create?: InputMaybe<UserCreateWithoutVersionsInput>;
};

export type UserCreateNestedOneWithoutViewsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutViewsInput>;
  create?: InputMaybe<UserCreateWithoutViewsInput>;
};

export type UserCreateNestedOneWithoutVotesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutVotesInput>;
  create?: InputMaybe<UserCreateWithoutVotesInput>;
};

export type UserCreateOrConnectWithoutCommentsInput = {
  create: UserCreateWithoutCommentsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPagesInput = {
  create: UserCreateWithoutPagesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutReactionsInput = {
  create: UserCreateWithoutReactionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSharesInput = {
  create: UserCreateWithoutSharesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutVersionsInput = {
  create: UserCreateWithoutVersionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutViewsInput = {
  create: UserCreateWithoutViewsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutVotesInput = {
  create: UserCreateWithoutVotesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCommentsInput = {
  Role?: InputMaybe<RoleCreateNestedManyWithoutUsersInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<UserImageCreateNestedManyWithoutUserInput>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  pages?: InputMaybe<ExitPageCreateNestedManyWithoutAuthorInput>;
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  reactions?: InputMaybe<ReactionCreateNestedManyWithoutUserInput>;
  shares?: InputMaybe<PageShareCreateNestedManyWithoutUserInput>;
  tokens?: InputMaybe<RefreshTokenCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username: Scalars['String']['input'];
  versions?: InputMaybe<PageVersionCreateNestedManyWithoutUpdatedByInput>;
  views?: InputMaybe<PageViewCreateNestedManyWithoutUserInput>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutPagesInput = {
  Role?: InputMaybe<RoleCreateNestedManyWithoutUsersInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<UserImageCreateNestedManyWithoutUserInput>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  reactions?: InputMaybe<ReactionCreateNestedManyWithoutUserInput>;
  shares?: InputMaybe<PageShareCreateNestedManyWithoutUserInput>;
  tokens?: InputMaybe<RefreshTokenCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username: Scalars['String']['input'];
  versions?: InputMaybe<PageVersionCreateNestedManyWithoutUpdatedByInput>;
  views?: InputMaybe<PageViewCreateNestedManyWithoutUserInput>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutReactionsInput = {
  Role?: InputMaybe<RoleCreateNestedManyWithoutUsersInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<UserImageCreateNestedManyWithoutUserInput>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  pages?: InputMaybe<ExitPageCreateNestedManyWithoutAuthorInput>;
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<PageShareCreateNestedManyWithoutUserInput>;
  tokens?: InputMaybe<RefreshTokenCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username: Scalars['String']['input'];
  versions?: InputMaybe<PageVersionCreateNestedManyWithoutUpdatedByInput>;
  views?: InputMaybe<PageViewCreateNestedManyWithoutUserInput>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutSharesInput = {
  Role?: InputMaybe<RoleCreateNestedManyWithoutUsersInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<UserImageCreateNestedManyWithoutUserInput>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  pages?: InputMaybe<ExitPageCreateNestedManyWithoutAuthorInput>;
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  reactions?: InputMaybe<ReactionCreateNestedManyWithoutUserInput>;
  tokens?: InputMaybe<RefreshTokenCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username: Scalars['String']['input'];
  versions?: InputMaybe<PageVersionCreateNestedManyWithoutUpdatedByInput>;
  views?: InputMaybe<PageViewCreateNestedManyWithoutUserInput>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutVersionsInput = {
  Role?: InputMaybe<RoleCreateNestedManyWithoutUsersInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<UserImageCreateNestedManyWithoutUserInput>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  pages?: InputMaybe<ExitPageCreateNestedManyWithoutAuthorInput>;
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  reactions?: InputMaybe<ReactionCreateNestedManyWithoutUserInput>;
  shares?: InputMaybe<PageShareCreateNestedManyWithoutUserInput>;
  tokens?: InputMaybe<RefreshTokenCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username: Scalars['String']['input'];
  views?: InputMaybe<PageViewCreateNestedManyWithoutUserInput>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutViewsInput = {
  Role?: InputMaybe<RoleCreateNestedManyWithoutUsersInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<UserImageCreateNestedManyWithoutUserInput>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  pages?: InputMaybe<ExitPageCreateNestedManyWithoutAuthorInput>;
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  reactions?: InputMaybe<ReactionCreateNestedManyWithoutUserInput>;
  shares?: InputMaybe<PageShareCreateNestedManyWithoutUserInput>;
  tokens?: InputMaybe<RefreshTokenCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username: Scalars['String']['input'];
  versions?: InputMaybe<PageVersionCreateNestedManyWithoutUpdatedByInput>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutVotesInput = {
  Role?: InputMaybe<RoleCreateNestedManyWithoutUsersInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<UserImageCreateNestedManyWithoutUserInput>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  pages?: InputMaybe<ExitPageCreateNestedManyWithoutAuthorInput>;
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  reactions?: InputMaybe<ReactionCreateNestedManyWithoutUserInput>;
  shares?: InputMaybe<PageShareCreateNestedManyWithoutUserInput>;
  tokens?: InputMaybe<RefreshTokenCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username: Scalars['String']['input'];
  versions?: InputMaybe<PageVersionCreateNestedManyWithoutUpdatedByInput>;
  views?: InputMaybe<PageViewCreateNestedManyWithoutUserInput>;
};

export type UserImage = {
  __typename?: 'UserImage';
  id: Scalars['ID']['output'];
  type: Scalars['String']['output'];
  url: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type UserImageCreateManyUserInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type UserImageCreateManyUserInputEnvelope = {
  data: Array<UserImageCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserImageCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserImageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserImageCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserImageCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserImageCreateManyUserInputEnvelope>;
};

export type UserImageCreateOrConnectWithoutUserInput = {
  create: UserImageCreateWithoutUserInput;
  where: UserImageWhereUniqueInput;
};

export type UserImageCreateWithoutUserInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type UserImageListRelationFilter = {
  every?: InputMaybe<UserImageWhereInput>;
  none?: InputMaybe<UserImageWhereInput>;
  some?: InputMaybe<UserImageWhereInput>;
};

export type UserImageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserImageWhereInput = {
  AND?: InputMaybe<Array<UserImageWhereInput>>;
  NOT?: InputMaybe<Array<UserImageWhereInput>>;
  OR?: InputMaybe<Array<UserImageWhereInput>>;
  id?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserImageWhereUniqueInput = {
  AND?: InputMaybe<Array<UserImageWhereInput>>;
  NOT?: InputMaybe<Array<UserImageWhereInput>>;
  OR?: InputMaybe<Array<UserImageWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserNullableScalarRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserOrderByRelevanceFieldEnum {
  EMAIL = 'email',
  FIRSTNAME = 'firstName',
  ID = 'id',
  LASTNAME = 'lastName',
  PASSWORD = 'password',
  PHONE = 'phone',
  USERNAME = 'username'
}

export type UserOrderByRelevanceInput = {
  fields: Array<UserOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type UserOrderByWithRelationInput = {
  Role?: InputMaybe<RoleOrderByRelationAggregateInput>;
  _relevance?: InputMaybe<UserOrderByRelevanceInput>;
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  images?: InputMaybe<UserImageOrderByRelationAggregateInput>;
  isVerified?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrderInput>;
  pages?: InputMaybe<ExitPageOrderByRelationAggregateInput>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrderInput>;
  reactions?: InputMaybe<ReactionOrderByRelationAggregateInput>;
  shares?: InputMaybe<PageShareOrderByRelationAggregateInput>;
  tokens?: InputMaybe<RefreshTokenOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  versions?: InputMaybe<PageVersionOrderByRelationAggregateInput>;
  views?: InputMaybe<PageViewOrderByRelationAggregateInput>;
  votes?: InputMaybe<VoteOrderByRelationAggregateInput>;
};

export enum UserScalarFieldEnum {
  CREATEDAT = 'createdAt',
  EMAIL = 'email',
  FIRSTNAME = 'firstName',
  ID = 'id',
  ISVERIFIED = 'isVerified',
  LASTNAME = 'lastName',
  PASSWORD = 'password',
  PHONE = 'phone',
  UPDATEDAT = 'updatedAt',
  USERNAME = 'username'
}

export type UserScalarRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  Role?: InputMaybe<RoleListRelationFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  images?: InputMaybe<UserImageListRelationFilter>;
  isVerified?: InputMaybe<BoolFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  pages?: InputMaybe<ExitPageListRelationFilter>;
  password?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  reactions?: InputMaybe<ReactionListRelationFilter>;
  shares?: InputMaybe<PageShareListRelationFilter>;
  tokens?: InputMaybe<RefreshTokenListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringFilter>;
  versions?: InputMaybe<PageVersionListRelationFilter>;
  views?: InputMaybe<PageViewListRelationFilter>;
  votes?: InputMaybe<VoteListRelationFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  Role?: InputMaybe<RoleListRelationFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<UserImageListRelationFilter>;
  isVerified?: InputMaybe<BoolFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  pages?: InputMaybe<ExitPageListRelationFilter>;
  password?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  reactions?: InputMaybe<ReactionListRelationFilter>;
  shares?: InputMaybe<PageShareListRelationFilter>;
  tokens?: InputMaybe<RefreshTokenListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<Scalars['String']['input']>;
  versions?: InputMaybe<PageVersionListRelationFilter>;
  views?: InputMaybe<PageViewListRelationFilter>;
  votes?: InputMaybe<VoteListRelationFilter>;
};

export type Vote = {
  __typename?: 'Vote';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  page: ExitPage;
  pageId: Scalars['String']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type VoteCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  page: ExitPageCreateNestedOneWithoutVotesInput;
  user?: InputMaybe<UserCreateNestedOneWithoutVotesInput>;
};

export type VoteCreateManyPageInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type VoteCreateManyPageInputEnvelope = {
  data: Array<VoteCreateManyPageInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VoteCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  pageId: Scalars['String']['input'];
};

export type VoteCreateManyUserInputEnvelope = {
  data: Array<VoteCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VoteCreateNestedManyWithoutPageInput = {
  connect?: InputMaybe<Array<VoteWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<VoteCreateOrConnectWithoutPageInput>>;
  create?: InputMaybe<Array<VoteCreateWithoutPageInput>>;
  createMany?: InputMaybe<VoteCreateManyPageInputEnvelope>;
};

export type VoteCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<VoteWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<VoteCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<VoteCreateWithoutUserInput>>;
  createMany?: InputMaybe<VoteCreateManyUserInputEnvelope>;
};

export type VoteCreateOrConnectWithoutPageInput = {
  create: VoteCreateWithoutPageInput;
  where: VoteWhereUniqueInput;
};

export type VoteCreateOrConnectWithoutUserInput = {
  create: VoteCreateWithoutUserInput;
  where: VoteWhereUniqueInput;
};

export type VoteCreateWithoutPageInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserCreateNestedOneWithoutVotesInput>;
};

export type VoteCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  page: ExitPageCreateNestedOneWithoutVotesInput;
};

export type VoteListRelationFilter = {
  every?: InputMaybe<VoteWhereInput>;
  none?: InputMaybe<VoteWhereInput>;
  some?: InputMaybe<VoteWhereInput>;
};

export type VoteOneVotePerUserPageCompoundUniqueInput = {
  pageId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type VoteOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type VoteWhereInput = {
  AND?: InputMaybe<Array<VoteWhereInput>>;
  NOT?: InputMaybe<Array<VoteWhereInput>>;
  OR?: InputMaybe<Array<VoteWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  page?: InputMaybe<ExitPageScalarRelationFilter>;
  pageId?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserNullableScalarRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type VoteWhereUniqueInput = {
  AND?: InputMaybe<Array<VoteWhereInput>>;
  NOT?: InputMaybe<Array<VoteWhereInput>>;
  OR?: InputMaybe<Array<VoteWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  one_vote_per_user_page?: InputMaybe<VoteOneVotePerUserPageCompoundUniqueInput>;
  page?: InputMaybe<ExitPageScalarRelationFilter>;
  pageId?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserNullableScalarRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'LoginOutput', token?: string | null, user?: { __typename?: 'User', id: string, email: string, firstName: string, lastName?: string | null, phone?: string | null, username: string } | null } | null };

export type RegisterMutationVariables = Exact<{
  data: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'User', id: string, firstName: string, username: string } };

export type CreateExitPageFragmentFragment = { __typename?: 'ExitPage', id: string, data: any, slug: string };

export type CreateExitPageMutationVariables = Exact<{
  input: ExitPageCreateInput;
}>;


export type CreateExitPageMutation = { __typename?: 'Mutation', createExitPage: { __typename?: 'ExitPage', id: string, data: any, slug: string } };

export type ImageFragment = { __typename?: 'UserImage', id: string, url: string, type: string };

export type CreateTemplateFragmentFragment = { __typename?: 'Template', id: string, name: string, uniqueKey: string };

export type CreateTemplateMutationVariables = Exact<{
  input: TemplateCreateInput;
}>;


export type CreateTemplateMutation = { __typename?: 'Mutation', createTemplate: { __typename?: 'Template', id: string, name: string, uniqueKey: string } };

export type UserFragmentFragment = { __typename?: 'User', id: string, firstName: string, lastName?: string | null, email: string, phone?: string | null, username: string, images?: Array<{ __typename?: 'UserImage', id: string, url: string, type: string }> | null };

export type CreateUserMutationVariables = Exact<{
  input: UserCreateInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, firstName: string, lastName?: string | null, email: string, phone?: string | null, username: string, images?: Array<{ __typename?: 'UserImage', id: string, url: string, type: string }> | null } };

export type GetUserQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, firstName: string, lastName?: string | null, email: string, phone?: string | null, username: string, images?: Array<{ __typename?: 'UserImage', id: string, url: string, type: string }> | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, firstName: string, lastName?: string | null, email: string, phone?: string | null, username: string, images?: Array<{ __typename?: 'UserImage', id: string, url: string, type: string }> | null } };

export const CreateExitPageFragmentFragmentDoc = gql`
    fragment createExitPageFragment on ExitPage {
  id
  data
  slug
}
    `;
export const CreateTemplateFragmentFragmentDoc = gql`
    fragment createTemplateFragment on Template {
  id
  name
  uniqueKey
}
    `;
export const ImageFragmentDoc = gql`
    fragment Image on UserImage {
  id
  url
  type
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment userFragment on User {
  id
  firstName
  lastName
  email
  phone
  username
  images {
    ...Image
  }
}
    ${ImageFragmentDoc}`;
export const LoginDocument = gql`
    mutation Login($data: LoginInput!) {
  login(data: $data) {
    token
    user {
      id
      email
      firstName
      lastName
      phone
      username
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($data: RegisterInput!) {
  register(data: $data) {
    id
    firstName
    username
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const CreateExitPageDocument = gql`
    mutation CreateExitPage($input: ExitPageCreateInput!) {
  createExitPage(input: $input) {
    ...createExitPageFragment
  }
}
    ${CreateExitPageFragmentFragmentDoc}`;
export type CreateExitPageMutationFn = Apollo.MutationFunction<CreateExitPageMutation, CreateExitPageMutationVariables>;

/**
 * __useCreateExitPageMutation__
 *
 * To run a mutation, you first call `useCreateExitPageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateExitPageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createExitPageMutation, { data, loading, error }] = useCreateExitPageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateExitPageMutation(baseOptions?: Apollo.MutationHookOptions<CreateExitPageMutation, CreateExitPageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateExitPageMutation, CreateExitPageMutationVariables>(CreateExitPageDocument, options);
      }
export type CreateExitPageMutationHookResult = ReturnType<typeof useCreateExitPageMutation>;
export type CreateExitPageMutationResult = Apollo.MutationResult<CreateExitPageMutation>;
export type CreateExitPageMutationOptions = Apollo.BaseMutationOptions<CreateExitPageMutation, CreateExitPageMutationVariables>;
export const CreateTemplateDocument = gql`
    mutation CreateTemplate($input: TemplateCreateInput!) {
  createTemplate(input: $input) {
    ...createTemplateFragment
  }
}
    ${CreateTemplateFragmentFragmentDoc}`;
export type CreateTemplateMutationFn = Apollo.MutationFunction<CreateTemplateMutation, CreateTemplateMutationVariables>;

/**
 * __useCreateTemplateMutation__
 *
 * To run a mutation, you first call `useCreateTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTemplateMutation, { data, loading, error }] = useCreateTemplateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTemplateMutation(baseOptions?: Apollo.MutationHookOptions<CreateTemplateMutation, CreateTemplateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTemplateMutation, CreateTemplateMutationVariables>(CreateTemplateDocument, options);
      }
export type CreateTemplateMutationHookResult = ReturnType<typeof useCreateTemplateMutation>;
export type CreateTemplateMutationResult = Apollo.MutationResult<CreateTemplateMutation>;
export type CreateTemplateMutationOptions = Apollo.BaseMutationOptions<CreateTemplateMutation, CreateTemplateMutationVariables>;
export const CreateUserDocument = gql`
    mutation createUser($input: UserCreateInput!) {
  createUser(input: $input) {
    ...userFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const GetUserDocument = gql`
    query getUser($id: String!) {
  user(id: $id) {
    ...userFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables> & ({ variables: GetUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export function useGetUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const MeDocument = gql`
    query me {
  me {
    ...userFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export function useMeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;