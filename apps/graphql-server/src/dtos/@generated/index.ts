import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Float } from '@nestjs/graphql';

export enum VoteScalarFieldEnum {
    id = "id",
    pageId = "pageId",
    userId = "userId",
    createdAt = "createdAt"
}

export enum VoteOrderByRelevanceFieldEnum {
    id = "id",
    pageId = "pageId",
    userId = "userId"
}

export enum UserImageScalarFieldEnum {
    id = "id",
    url = "url",
    type = "type",
    userId = "userId"
}

export enum UserImageOrderByRelevanceFieldEnum {
    id = "id",
    url = "url",
    type = "type",
    userId = "userId"
}

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    firstName = "firstName",
    lastName = "lastName",
    phone = "phone",
    username = "username",
    password = "password",
    isVerified = "isVerified",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum UserOrderByRelevanceFieldEnum {
    id = "id",
    email = "email",
    firstName = "firstName",
    lastName = "lastName",
    phone = "phone",
    username = "username",
    password = "password"
}

export enum TemplateScalarFieldEnum {
    id = "id",
    uniqueKey = "uniqueKey",
    authorId = "authorId",
    name = "name",
    description = "description",
    placeholders = "placeholders",
    isGlobal = "isGlobal",
    isPublished = "isPublished",
    isDraft = "isDraft",
    isDeleted = "isDeleted",
    content = "content",
    createdAt = "createdAt"
}

export enum TemplateOrderByRelevanceFieldEnum {
    id = "id",
    uniqueKey = "uniqueKey",
    authorId = "authorId",
    name = "name",
    description = "description",
    content = "content"
}

export enum TagScalarFieldEnum {
    id = "id",
    name = "name",
    pageId = "pageId"
}

export enum TagOrderByRelevanceFieldEnum {
    id = "id",
    name = "name",
    pageId = "pageId"
}

export enum RoleScalarFieldEnum {
    id = "id",
    name = "name"
}

export enum RoleOrderByRelevanceFieldEnum {
    id = "id",
    name = "name"
}

export enum RefreshTokenScalarFieldEnum {
    id = "id",
    token = "token",
    expiresAt = "expiresAt",
    userId = "userId",
    createdAt = "createdAt"
}

export enum RefreshTokenOrderByRelevanceFieldEnum {
    id = "id",
    token = "token",
    userId = "userId"
}

export enum ReactionScalarFieldEnum {
    id = "id",
    pageId = "pageId",
    userId = "userId",
    type = "type",
    createdAt = "createdAt"
}

export enum ReactionOrderByRelevanceFieldEnum {
    id = "id",
    pageId = "pageId",
    userId = "userId"
}

export enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}

export enum Tone {
    DRAMATIC = "DRAMATIC",
    IRONIC = "IRONIC",
    CRINGE = "CRINGE",
    CLASSY = "CLASSY",
    TOUCHING = "TOUCHING",
    ABSURD = "ABSURD",
    PASSIVE_AGGRESSIVE = "PASSIVE_AGGRESSIVE",
    HONEST = "HONEST"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum ReactionType {
    LIKE = "LIKE",
    LOVE = "LOVE",
    HAHA = "HAHA",
    SAD = "SAD",
    ANGRY = "ANGRY"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum NullsOrder {
    first = "first",
    last = "last"
}

export enum JsonNullValueInput {
    JsonNull = "JsonNull"
}

export enum JsonNullValueFilter {
    DbNull = "DbNull",
    JsonNull = "JsonNull",
    AnyNull = "AnyNull"
}

export enum PageViewScalarFieldEnum {
    id = "id",
    pageId = "pageId",
    userId = "userId",
    sessionId = "sessionId",
    createdAt = "createdAt"
}

export enum PageViewOrderByRelevanceFieldEnum {
    id = "id",
    pageId = "pageId",
    userId = "userId",
    sessionId = "sessionId"
}

export enum PageVersionScalarFieldEnum {
    id = "id",
    pageId = "pageId",
    version = "version",
    data = "data",
    updatedById = "updatedById",
    createdAt = "createdAt"
}

export enum PageVersionOrderByRelevanceFieldEnum {
    id = "id",
    pageId = "pageId",
    updatedById = "updatedById"
}

export enum PageShareScalarFieldEnum {
    id = "id",
    pageId = "pageId",
    platform = "platform",
    userId = "userId",
    createdAt = "createdAt"
}

export enum PageShareOrderByRelevanceFieldEnum {
    id = "id",
    pageId = "pageId",
    platform = "platform",
    userId = "userId"
}

export enum ExitPageScalarFieldEnum {
    id = "id",
    authorId = "authorId",
    tone = "tone",
    templateId = "templateId",
    data = "data",
    slug = "slug",
    isHallOfFame = "isHallOfFame",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum ExitPageOrderByRelevanceFieldEnum {
    id = "id",
    authorId = "authorId",
    templateId = "templateId",
    slug = "slug"
}

export enum CommentScalarFieldEnum {
    id = "id",
    pageId = "pageId",
    userId = "userId",
    content = "content",
    parentCommentId = "parentCommentId",
    createdAt = "createdAt"
}

export enum CommentOrderByRelevanceFieldEnum {
    id = "id",
    pageId = "pageId",
    userId = "userId",
    content = "content",
    parentCommentId = "parentCommentId"
}

registerEnumType(CommentOrderByRelevanceFieldEnum, { name: 'CommentOrderByRelevanceFieldEnum', description: undefined })
registerEnumType(CommentScalarFieldEnum, { name: 'CommentScalarFieldEnum', description: undefined })
registerEnumType(ExitPageOrderByRelevanceFieldEnum, { name: 'ExitPageOrderByRelevanceFieldEnum', description: undefined })
registerEnumType(ExitPageScalarFieldEnum, { name: 'ExitPageScalarFieldEnum', description: undefined })
registerEnumType(PageShareOrderByRelevanceFieldEnum, { name: 'PageShareOrderByRelevanceFieldEnum', description: undefined })
registerEnumType(PageShareScalarFieldEnum, { name: 'PageShareScalarFieldEnum', description: undefined })
registerEnumType(PageVersionOrderByRelevanceFieldEnum, { name: 'PageVersionOrderByRelevanceFieldEnum', description: undefined })
registerEnumType(PageVersionScalarFieldEnum, { name: 'PageVersionScalarFieldEnum', description: undefined })
registerEnumType(PageViewOrderByRelevanceFieldEnum, { name: 'PageViewOrderByRelevanceFieldEnum', description: undefined })
registerEnumType(PageViewScalarFieldEnum, { name: 'PageViewScalarFieldEnum', description: undefined })
registerEnumType(JsonNullValueFilter, { name: 'JsonNullValueFilter', description: undefined })
registerEnumType(JsonNullValueInput, { name: 'JsonNullValueInput', description: undefined })
registerEnumType(NullsOrder, { name: 'NullsOrder', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(ReactionType, { name: 'ReactionType', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(Tone, { name: 'Tone', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(ReactionOrderByRelevanceFieldEnum, { name: 'ReactionOrderByRelevanceFieldEnum', description: undefined })
registerEnumType(ReactionScalarFieldEnum, { name: 'ReactionScalarFieldEnum', description: undefined })
registerEnumType(RefreshTokenOrderByRelevanceFieldEnum, { name: 'RefreshTokenOrderByRelevanceFieldEnum', description: undefined })
registerEnumType(RefreshTokenScalarFieldEnum, { name: 'RefreshTokenScalarFieldEnum', description: undefined })
registerEnumType(RoleOrderByRelevanceFieldEnum, { name: 'RoleOrderByRelevanceFieldEnum', description: undefined })
registerEnumType(RoleScalarFieldEnum, { name: 'RoleScalarFieldEnum', description: undefined })
registerEnumType(TagOrderByRelevanceFieldEnum, { name: 'TagOrderByRelevanceFieldEnum', description: undefined })
registerEnumType(TagScalarFieldEnum, { name: 'TagScalarFieldEnum', description: undefined })
registerEnumType(TemplateOrderByRelevanceFieldEnum, { name: 'TemplateOrderByRelevanceFieldEnum', description: undefined })
registerEnumType(TemplateScalarFieldEnum, { name: 'TemplateScalarFieldEnum', description: undefined })
registerEnumType(UserOrderByRelevanceFieldEnum, { name: 'UserOrderByRelevanceFieldEnum', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
registerEnumType(UserImageOrderByRelevanceFieldEnum, { name: 'UserImageOrderByRelevanceFieldEnum', description: undefined })
registerEnumType(UserImageScalarFieldEnum, { name: 'UserImageScalarFieldEnum', description: undefined })
registerEnumType(VoteOrderByRelevanceFieldEnum, { name: 'VoteOrderByRelevanceFieldEnum', description: undefined })
registerEnumType(VoteScalarFieldEnum, { name: 'VoteScalarFieldEnum', description: undefined })

@ObjectType()
export class AggregateComment {
    @Field(() => CommentCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CommentCountAggregate>;
    @Field(() => CommentMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CommentMinAggregate>;
    @Field(() => CommentMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CommentMaxAggregate>;
}

@ArgsType()
export class CommentAggregateArgs {
    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    where?: InstanceType<typeof CommentWhereInput>;
    @Field(() => [CommentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommentOrderByWithRelationInput>;
    @Field(() => CommentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CommentCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CommentCountAggregateInput>;
    @Field(() => CommentMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CommentMinAggregateInput>;
    @Field(() => CommentMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CommentMaxAggregateInput>;
}

@InputType()
export class CommentCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    pageId?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    parentCommentId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class CommentCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    pageId!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    content!: number;
    @Field(() => Int, {nullable:false})
    parentCommentId!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class CommentCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    parentCommentId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@ObjectType()
export class CommentCount {
    @Field(() => Int, {nullable:false})
    replies?: number;
}

@InputType()
export class CommentCreateManyPageInputEnvelope {
    @Field(() => [CommentCreateManyPageInput], {nullable:false})
    @Type(() => CommentCreateManyPageInput)
    data!: Array<CommentCreateManyPageInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class CommentCreateManyPageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => String, {nullable:true})
    parentCommentId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class CommentCreateManyParentCommentInputEnvelope {
    @Field(() => [CommentCreateManyParentCommentInput], {nullable:false})
    @Type(() => CommentCreateManyParentCommentInput)
    data!: Array<CommentCreateManyParentCommentInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class CommentCreateManyParentCommentInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class CommentCreateManyUserInputEnvelope {
    @Field(() => [CommentCreateManyUserInput], {nullable:false})
    @Type(() => CommentCreateManyUserInput)
    data!: Array<CommentCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class CommentCreateManyUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => String, {nullable:true})
    parentCommentId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class CommentCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => String, {nullable:true})
    parentCommentId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class CommentCreateNestedManyWithoutPageInput {
    @Field(() => [CommentCreateWithoutPageInput], {nullable:true})
    @Type(() => CommentCreateWithoutPageInput)
    create?: Array<CommentCreateWithoutPageInput>;
    @Field(() => [CommentCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutPageInput>;
    @Field(() => CommentCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyPageInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyPageInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}

@InputType()
export class CommentCreateNestedManyWithoutParentCommentInput {
    @Field(() => [CommentCreateWithoutParentCommentInput], {nullable:true})
    @Type(() => CommentCreateWithoutParentCommentInput)
    create?: Array<CommentCreateWithoutParentCommentInput>;
    @Field(() => [CommentCreateOrConnectWithoutParentCommentInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutParentCommentInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutParentCommentInput>;
    @Field(() => CommentCreateManyParentCommentInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyParentCommentInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyParentCommentInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}

@InputType()
export class CommentCreateNestedManyWithoutUserInput {
    @Field(() => [CommentCreateWithoutUserInput], {nullable:true})
    @Type(() => CommentCreateWithoutUserInput)
    create?: Array<CommentCreateWithoutUserInput>;
    @Field(() => [CommentCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutUserInput>;
    @Field(() => CommentCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyUserInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}

@InputType()
export class CommentCreateNestedOneWithoutRepliesInput {
    @Field(() => CommentCreateWithoutRepliesInput, {nullable:true})
    @Type(() => CommentCreateWithoutRepliesInput)
    create?: InstanceType<typeof CommentCreateWithoutRepliesInput>;
    @Field(() => CommentCreateOrConnectWithoutRepliesInput, {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutRepliesInput)
    connectOrCreate?: InstanceType<typeof CommentCreateOrConnectWithoutRepliesInput>;
    @Field(() => CommentWhereUniqueInput, {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
}

@InputType()
export class CommentCreateOrConnectWithoutPageInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => CommentCreateWithoutPageInput, {nullable:false})
    @Type(() => CommentCreateWithoutPageInput)
    create!: InstanceType<typeof CommentCreateWithoutPageInput>;
}

@InputType()
export class CommentCreateOrConnectWithoutParentCommentInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => CommentCreateWithoutParentCommentInput, {nullable:false})
    @Type(() => CommentCreateWithoutParentCommentInput)
    create!: InstanceType<typeof CommentCreateWithoutParentCommentInput>;
}

@InputType()
export class CommentCreateOrConnectWithoutRepliesInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => CommentCreateWithoutRepliesInput, {nullable:false})
    @Type(() => CommentCreateWithoutRepliesInput)
    create!: InstanceType<typeof CommentCreateWithoutRepliesInput>;
}

@InputType()
export class CommentCreateOrConnectWithoutUserInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => CommentCreateWithoutUserInput, {nullable:false})
    @Type(() => CommentCreateWithoutUserInput)
    create!: InstanceType<typeof CommentCreateWithoutUserInput>;
}

@InputType()
export class CommentCreateWithoutPageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutCommentsInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutCommentsInput>;
    @Field(() => CommentCreateNestedOneWithoutRepliesInput, {nullable:true})
    parentComment?: InstanceType<typeof CommentCreateNestedOneWithoutRepliesInput>;
    @Field(() => CommentCreateNestedManyWithoutParentCommentInput, {nullable:true})
    replies?: InstanceType<typeof CommentCreateNestedManyWithoutParentCommentInput>;
}

@InputType()
export class CommentCreateWithoutParentCommentInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => ExitPageCreateNestedOneWithoutCommentsInput, {nullable:false})
    page!: InstanceType<typeof ExitPageCreateNestedOneWithoutCommentsInput>;
    @Field(() => UserCreateNestedOneWithoutCommentsInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutCommentsInput>;
    @Field(() => CommentCreateNestedManyWithoutParentCommentInput, {nullable:true})
    replies?: InstanceType<typeof CommentCreateNestedManyWithoutParentCommentInput>;
}

@InputType()
export class CommentCreateWithoutRepliesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => ExitPageCreateNestedOneWithoutCommentsInput, {nullable:false})
    page!: InstanceType<typeof ExitPageCreateNestedOneWithoutCommentsInput>;
    @Field(() => UserCreateNestedOneWithoutCommentsInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutCommentsInput>;
    @Field(() => CommentCreateNestedOneWithoutRepliesInput, {nullable:true})
    parentComment?: InstanceType<typeof CommentCreateNestedOneWithoutRepliesInput>;
}

@InputType()
export class CommentCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => ExitPageCreateNestedOneWithoutCommentsInput, {nullable:false})
    page!: InstanceType<typeof ExitPageCreateNestedOneWithoutCommentsInput>;
    @Field(() => CommentCreateNestedOneWithoutRepliesInput, {nullable:true})
    parentComment?: InstanceType<typeof CommentCreateNestedOneWithoutRepliesInput>;
    @Field(() => CommentCreateNestedManyWithoutParentCommentInput, {nullable:true})
    replies?: InstanceType<typeof CommentCreateNestedManyWithoutParentCommentInput>;
}

@InputType()
export class CommentCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => ExitPageCreateNestedOneWithoutCommentsInput, {nullable:false})
    page!: InstanceType<typeof ExitPageCreateNestedOneWithoutCommentsInput>;
    @Field(() => UserCreateNestedOneWithoutCommentsInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutCommentsInput>;
    @Field(() => CommentCreateNestedOneWithoutRepliesInput, {nullable:true})
    parentComment?: InstanceType<typeof CommentCreateNestedOneWithoutRepliesInput>;
    @Field(() => CommentCreateNestedManyWithoutParentCommentInput, {nullable:true})
    replies?: InstanceType<typeof CommentCreateNestedManyWithoutParentCommentInput>;
}

@ArgsType()
export class CommentGroupByArgs {
    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    where?: InstanceType<typeof CommentWhereInput>;
    @Field(() => [CommentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CommentOrderByWithAggregationInput>;
    @Field(() => [CommentScalarFieldEnum], {nullable:false})
    by!: Array<`${CommentScalarFieldEnum}`>;
    @Field(() => CommentScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof CommentScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CommentCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CommentCountAggregateInput>;
    @Field(() => CommentMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CommentMinAggregateInput>;
    @Field(() => CommentMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CommentMaxAggregateInput>;
}

@ObjectType()
export class CommentGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => String, {nullable:true})
    parentCommentId?: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => CommentCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CommentCountAggregate>;
    @Field(() => CommentMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CommentMinAggregate>;
    @Field(() => CommentMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CommentMaxAggregate>;
}

@InputType()
export class CommentListRelationFilter {
    @Field(() => CommentWhereInput, {nullable:true})
    every?: InstanceType<typeof CommentWhereInput>;
    @Field(() => CommentWhereInput, {nullable:true})
    some?: InstanceType<typeof CommentWhereInput>;
    @Field(() => CommentWhereInput, {nullable:true})
    none?: InstanceType<typeof CommentWhereInput>;
}

@InputType()
export class CommentMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    pageId?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    parentCommentId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class CommentMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    pageId?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    parentCommentId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class CommentMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    parentCommentId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class CommentMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    pageId?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    parentCommentId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class CommentMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    pageId?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    parentCommentId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class CommentMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    parentCommentId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class CommentNullableScalarRelationFilter {
    @Field(() => CommentWhereInput, {nullable:true})
    is?: InstanceType<typeof CommentWhereInput>;
    @Field(() => CommentWhereInput, {nullable:true})
    isNot?: InstanceType<typeof CommentWhereInput>;
}

@InputType()
export class CommentOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class CommentOrderByRelevanceInput {
    @Field(() => [CommentOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${CommentOrderByRelevanceFieldEnum}`>;
    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;
    @Field(() => String, {nullable:false})
    search!: string;
}

@InputType()
export class CommentOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    userId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    parentCommentId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => CommentCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CommentCountOrderByAggregateInput>;
    @Field(() => CommentMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CommentMaxOrderByAggregateInput>;
    @Field(() => CommentMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CommentMinOrderByAggregateInput>;
}

@InputType()
export class CommentOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    userId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    parentCommentId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => ExitPageOrderByWithRelationInput, {nullable:true})
    page?: InstanceType<typeof ExitPageOrderByWithRelationInput>;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => CommentOrderByWithRelationInput, {nullable:true})
    parentComment?: InstanceType<typeof CommentOrderByWithRelationInput>;
    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    replies?: InstanceType<typeof CommentOrderByRelationAggregateInput>;
    @Field(() => CommentOrderByRelevanceInput, {nullable:true})
    _relevance?: InstanceType<typeof CommentOrderByRelevanceInput>;
}

@InputType()
export class CommentScalarWhereWithAggregatesInput {
    @Field(() => [CommentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CommentScalarWhereWithAggregatesInput>;
    @Field(() => [CommentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CommentScalarWhereWithAggregatesInput>;
    @Field(() => [CommentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CommentScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    pageId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    parentCommentId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class CommentScalarWhereInput {
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    AND?: Array<CommentScalarWhereInput>;
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    OR?: Array<CommentScalarWhereInput>;
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    NOT?: Array<CommentScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    pageId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    userId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    parentCommentId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class CommentUncheckedCreateNestedManyWithoutPageInput {
    @Field(() => [CommentCreateWithoutPageInput], {nullable:true})
    @Type(() => CommentCreateWithoutPageInput)
    create?: Array<CommentCreateWithoutPageInput>;
    @Field(() => [CommentCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutPageInput>;
    @Field(() => CommentCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyPageInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyPageInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}

@InputType()
export class CommentUncheckedCreateNestedManyWithoutParentCommentInput {
    @Field(() => [CommentCreateWithoutParentCommentInput], {nullable:true})
    @Type(() => CommentCreateWithoutParentCommentInput)
    create?: Array<CommentCreateWithoutParentCommentInput>;
    @Field(() => [CommentCreateOrConnectWithoutParentCommentInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutParentCommentInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutParentCommentInput>;
    @Field(() => CommentCreateManyParentCommentInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyParentCommentInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyParentCommentInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}

@InputType()
export class CommentUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [CommentCreateWithoutUserInput], {nullable:true})
    @Type(() => CommentCreateWithoutUserInput)
    create?: Array<CommentCreateWithoutUserInput>;
    @Field(() => [CommentCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutUserInput>;
    @Field(() => CommentCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyUserInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}

@InputType()
export class CommentUncheckedCreateWithoutPageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => String, {nullable:true})
    parentCommentId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => CommentUncheckedCreateNestedManyWithoutParentCommentInput, {nullable:true})
    replies?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutParentCommentInput>;
}

@InputType()
export class CommentUncheckedCreateWithoutParentCommentInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => CommentUncheckedCreateNestedManyWithoutParentCommentInput, {nullable:true})
    replies?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutParentCommentInput>;
}

@InputType()
export class CommentUncheckedCreateWithoutRepliesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => String, {nullable:true})
    parentCommentId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class CommentUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => String, {nullable:true})
    parentCommentId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => CommentUncheckedCreateNestedManyWithoutParentCommentInput, {nullable:true})
    replies?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutParentCommentInput>;
}

@InputType()
export class CommentUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => String, {nullable:true})
    parentCommentId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => CommentUncheckedCreateNestedManyWithoutParentCommentInput, {nullable:true})
    replies?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutParentCommentInput>;
}

@InputType()
export class CommentUncheckedUpdateManyWithoutPageNestedInput {
    @Field(() => [CommentCreateWithoutPageInput], {nullable:true})
    @Type(() => CommentCreateWithoutPageInput)
    create?: Array<CommentCreateWithoutPageInput>;
    @Field(() => [CommentCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutPageInput>;
    @Field(() => [CommentUpsertWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutPageInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutPageInput>;
    @Field(() => CommentCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyPageInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyPageInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentUpdateWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutPageInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutPageInput>;
    @Field(() => [CommentUpdateManyWithWhereWithoutPageInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutPageInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutPageInput>;
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}

@InputType()
export class CommentUncheckedUpdateManyWithoutPageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    parentCommentId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CommentUncheckedUpdateManyWithoutParentCommentNestedInput {
    @Field(() => [CommentCreateWithoutParentCommentInput], {nullable:true})
    @Type(() => CommentCreateWithoutParentCommentInput)
    create?: Array<CommentCreateWithoutParentCommentInput>;
    @Field(() => [CommentCreateOrConnectWithoutParentCommentInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutParentCommentInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutParentCommentInput>;
    @Field(() => [CommentUpsertWithWhereUniqueWithoutParentCommentInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutParentCommentInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutParentCommentInput>;
    @Field(() => CommentCreateManyParentCommentInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyParentCommentInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyParentCommentInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentUpdateWithWhereUniqueWithoutParentCommentInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutParentCommentInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutParentCommentInput>;
    @Field(() => [CommentUpdateManyWithWhereWithoutParentCommentInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutParentCommentInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutParentCommentInput>;
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}

@InputType()
export class CommentUncheckedUpdateManyWithoutParentCommentInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CommentUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [CommentCreateWithoutUserInput], {nullable:true})
    @Type(() => CommentCreateWithoutUserInput)
    create?: Array<CommentCreateWithoutUserInput>;
    @Field(() => [CommentCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutUserInput>;
    @Field(() => [CommentUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => CommentCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyUserInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [CommentUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}

@InputType()
export class CommentUncheckedUpdateManyWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    parentCommentId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CommentUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    parentCommentId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CommentUncheckedUpdateWithoutPageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    parentCommentId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutParentCommentNestedInput, {nullable:true})
    replies?: InstanceType<typeof CommentUncheckedUpdateManyWithoutParentCommentNestedInput>;
}

@InputType()
export class CommentUncheckedUpdateWithoutParentCommentInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutParentCommentNestedInput, {nullable:true})
    replies?: InstanceType<typeof CommentUncheckedUpdateManyWithoutParentCommentNestedInput>;
}

@InputType()
export class CommentUncheckedUpdateWithoutRepliesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    parentCommentId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CommentUncheckedUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    parentCommentId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutParentCommentNestedInput, {nullable:true})
    replies?: InstanceType<typeof CommentUncheckedUpdateManyWithoutParentCommentNestedInput>;
}

@InputType()
export class CommentUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    parentCommentId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutParentCommentNestedInput, {nullable:true})
    replies?: InstanceType<typeof CommentUncheckedUpdateManyWithoutParentCommentNestedInput>;
}

@InputType()
export class CommentUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CommentUpdateManyWithWhereWithoutPageInput {
    @Field(() => CommentScalarWhereInput, {nullable:false})
    @Type(() => CommentScalarWhereInput)
    where!: InstanceType<typeof CommentScalarWhereInput>;
    @Field(() => CommentUpdateManyMutationInput, {nullable:false})
    @Type(() => CommentUpdateManyMutationInput)
    data!: InstanceType<typeof CommentUpdateManyMutationInput>;
}

@InputType()
export class CommentUpdateManyWithWhereWithoutParentCommentInput {
    @Field(() => CommentScalarWhereInput, {nullable:false})
    @Type(() => CommentScalarWhereInput)
    where!: InstanceType<typeof CommentScalarWhereInput>;
    @Field(() => CommentUpdateManyMutationInput, {nullable:false})
    @Type(() => CommentUpdateManyMutationInput)
    data!: InstanceType<typeof CommentUpdateManyMutationInput>;
}

@InputType()
export class CommentUpdateManyWithWhereWithoutUserInput {
    @Field(() => CommentScalarWhereInput, {nullable:false})
    @Type(() => CommentScalarWhereInput)
    where!: InstanceType<typeof CommentScalarWhereInput>;
    @Field(() => CommentUpdateManyMutationInput, {nullable:false})
    @Type(() => CommentUpdateManyMutationInput)
    data!: InstanceType<typeof CommentUpdateManyMutationInput>;
}

@InputType()
export class CommentUpdateManyWithoutPageNestedInput {
    @Field(() => [CommentCreateWithoutPageInput], {nullable:true})
    @Type(() => CommentCreateWithoutPageInput)
    create?: Array<CommentCreateWithoutPageInput>;
    @Field(() => [CommentCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutPageInput>;
    @Field(() => [CommentUpsertWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutPageInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutPageInput>;
    @Field(() => CommentCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyPageInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyPageInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentUpdateWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutPageInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutPageInput>;
    @Field(() => [CommentUpdateManyWithWhereWithoutPageInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutPageInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutPageInput>;
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}

@InputType()
export class CommentUpdateManyWithoutParentCommentNestedInput {
    @Field(() => [CommentCreateWithoutParentCommentInput], {nullable:true})
    @Type(() => CommentCreateWithoutParentCommentInput)
    create?: Array<CommentCreateWithoutParentCommentInput>;
    @Field(() => [CommentCreateOrConnectWithoutParentCommentInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutParentCommentInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutParentCommentInput>;
    @Field(() => [CommentUpsertWithWhereUniqueWithoutParentCommentInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutParentCommentInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutParentCommentInput>;
    @Field(() => CommentCreateManyParentCommentInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyParentCommentInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyParentCommentInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentUpdateWithWhereUniqueWithoutParentCommentInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutParentCommentInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutParentCommentInput>;
    @Field(() => [CommentUpdateManyWithWhereWithoutParentCommentInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutParentCommentInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutParentCommentInput>;
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}

@InputType()
export class CommentUpdateManyWithoutUserNestedInput {
    @Field(() => [CommentCreateWithoutUserInput], {nullable:true})
    @Type(() => CommentCreateWithoutUserInput)
    create?: Array<CommentCreateWithoutUserInput>;
    @Field(() => [CommentCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutUserInput>;
    @Field(() => [CommentUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => CommentCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyUserInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [CommentUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}

@InputType()
export class CommentUpdateOneWithoutRepliesNestedInput {
    @Field(() => CommentCreateWithoutRepliesInput, {nullable:true})
    @Type(() => CommentCreateWithoutRepliesInput)
    create?: InstanceType<typeof CommentCreateWithoutRepliesInput>;
    @Field(() => CommentCreateOrConnectWithoutRepliesInput, {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutRepliesInput)
    connectOrCreate?: InstanceType<typeof CommentCreateOrConnectWithoutRepliesInput>;
    @Field(() => CommentUpsertWithoutRepliesInput, {nullable:true})
    @Type(() => CommentUpsertWithoutRepliesInput)
    upsert?: InstanceType<typeof CommentUpsertWithoutRepliesInput>;
    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    disconnect?: InstanceType<typeof CommentWhereInput>;
    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    delete?: InstanceType<typeof CommentWhereInput>;
    @Field(() => CommentWhereUniqueInput, {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => CommentUpdateToOneWithWhereWithoutRepliesInput, {nullable:true})
    @Type(() => CommentUpdateToOneWithWhereWithoutRepliesInput)
    update?: InstanceType<typeof CommentUpdateToOneWithWhereWithoutRepliesInput>;
}

@InputType()
export class CommentUpdateToOneWithWhereWithoutRepliesInput {
    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    where?: InstanceType<typeof CommentWhereInput>;
    @Field(() => CommentUpdateWithoutRepliesInput, {nullable:false})
    @Type(() => CommentUpdateWithoutRepliesInput)
    data!: InstanceType<typeof CommentUpdateWithoutRepliesInput>;
}

@InputType()
export class CommentUpdateWithWhereUniqueWithoutPageInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => CommentUpdateWithoutPageInput, {nullable:false})
    @Type(() => CommentUpdateWithoutPageInput)
    data!: InstanceType<typeof CommentUpdateWithoutPageInput>;
}

@InputType()
export class CommentUpdateWithWhereUniqueWithoutParentCommentInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => CommentUpdateWithoutParentCommentInput, {nullable:false})
    @Type(() => CommentUpdateWithoutParentCommentInput)
    data!: InstanceType<typeof CommentUpdateWithoutParentCommentInput>;
}

@InputType()
export class CommentUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => CommentUpdateWithoutUserInput, {nullable:false})
    @Type(() => CommentUpdateWithoutUserInput)
    data!: InstanceType<typeof CommentUpdateWithoutUserInput>;
}

@InputType()
export class CommentUpdateWithoutPageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutCommentsNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutCommentsNestedInput>;
    @Field(() => CommentUpdateOneWithoutRepliesNestedInput, {nullable:true})
    parentComment?: InstanceType<typeof CommentUpdateOneWithoutRepliesNestedInput>;
    @Field(() => CommentUpdateManyWithoutParentCommentNestedInput, {nullable:true})
    replies?: InstanceType<typeof CommentUpdateManyWithoutParentCommentNestedInput>;
}

@InputType()
export class CommentUpdateWithoutParentCommentInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ExitPageUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    page?: InstanceType<typeof ExitPageUpdateOneRequiredWithoutCommentsNestedInput>;
    @Field(() => UserUpdateOneWithoutCommentsNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutCommentsNestedInput>;
    @Field(() => CommentUpdateManyWithoutParentCommentNestedInput, {nullable:true})
    replies?: InstanceType<typeof CommentUpdateManyWithoutParentCommentNestedInput>;
}

@InputType()
export class CommentUpdateWithoutRepliesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ExitPageUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    page?: InstanceType<typeof ExitPageUpdateOneRequiredWithoutCommentsNestedInput>;
    @Field(() => UserUpdateOneWithoutCommentsNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutCommentsNestedInput>;
    @Field(() => CommentUpdateOneWithoutRepliesNestedInput, {nullable:true})
    parentComment?: InstanceType<typeof CommentUpdateOneWithoutRepliesNestedInput>;
}

@InputType()
export class CommentUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ExitPageUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    page?: InstanceType<typeof ExitPageUpdateOneRequiredWithoutCommentsNestedInput>;
    @Field(() => CommentUpdateOneWithoutRepliesNestedInput, {nullable:true})
    parentComment?: InstanceType<typeof CommentUpdateOneWithoutRepliesNestedInput>;
    @Field(() => CommentUpdateManyWithoutParentCommentNestedInput, {nullable:true})
    replies?: InstanceType<typeof CommentUpdateManyWithoutParentCommentNestedInput>;
}

@InputType()
export class CommentUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ExitPageUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    page?: InstanceType<typeof ExitPageUpdateOneRequiredWithoutCommentsNestedInput>;
    @Field(() => UserUpdateOneWithoutCommentsNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutCommentsNestedInput>;
    @Field(() => CommentUpdateOneWithoutRepliesNestedInput, {nullable:true})
    parentComment?: InstanceType<typeof CommentUpdateOneWithoutRepliesNestedInput>;
    @Field(() => CommentUpdateManyWithoutParentCommentNestedInput, {nullable:true})
    replies?: InstanceType<typeof CommentUpdateManyWithoutParentCommentNestedInput>;
}

@InputType()
export class CommentUpsertWithWhereUniqueWithoutPageInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => CommentUpdateWithoutPageInput, {nullable:false})
    @Type(() => CommentUpdateWithoutPageInput)
    update!: InstanceType<typeof CommentUpdateWithoutPageInput>;
    @Field(() => CommentCreateWithoutPageInput, {nullable:false})
    @Type(() => CommentCreateWithoutPageInput)
    create!: InstanceType<typeof CommentCreateWithoutPageInput>;
}

@InputType()
export class CommentUpsertWithWhereUniqueWithoutParentCommentInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => CommentUpdateWithoutParentCommentInput, {nullable:false})
    @Type(() => CommentUpdateWithoutParentCommentInput)
    update!: InstanceType<typeof CommentUpdateWithoutParentCommentInput>;
    @Field(() => CommentCreateWithoutParentCommentInput, {nullable:false})
    @Type(() => CommentCreateWithoutParentCommentInput)
    create!: InstanceType<typeof CommentCreateWithoutParentCommentInput>;
}

@InputType()
export class CommentUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => CommentUpdateWithoutUserInput, {nullable:false})
    @Type(() => CommentUpdateWithoutUserInput)
    update!: InstanceType<typeof CommentUpdateWithoutUserInput>;
    @Field(() => CommentCreateWithoutUserInput, {nullable:false})
    @Type(() => CommentCreateWithoutUserInput)
    create!: InstanceType<typeof CommentCreateWithoutUserInput>;
}

@InputType()
export class CommentUpsertWithoutRepliesInput {
    @Field(() => CommentUpdateWithoutRepliesInput, {nullable:false})
    @Type(() => CommentUpdateWithoutRepliesInput)
    update!: InstanceType<typeof CommentUpdateWithoutRepliesInput>;
    @Field(() => CommentCreateWithoutRepliesInput, {nullable:false})
    @Type(() => CommentCreateWithoutRepliesInput)
    create!: InstanceType<typeof CommentCreateWithoutRepliesInput>;
    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    where?: InstanceType<typeof CommentWhereInput>;
}

@InputType()
export class CommentWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [CommentWhereInput], {nullable:true})
    AND?: Array<CommentWhereInput>;
    @Field(() => [CommentWhereInput], {nullable:true})
    OR?: Array<CommentWhereInput>;
    @Field(() => [CommentWhereInput], {nullable:true})
    NOT?: Array<CommentWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    pageId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    userId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    parentCommentId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => ExitPageScalarRelationFilter, {nullable:true})
    page?: InstanceType<typeof ExitPageScalarRelationFilter>;
    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserNullableScalarRelationFilter>;
    @Field(() => CommentNullableScalarRelationFilter, {nullable:true})
    parentComment?: InstanceType<typeof CommentNullableScalarRelationFilter>;
    @Field(() => CommentListRelationFilter, {nullable:true})
    replies?: InstanceType<typeof CommentListRelationFilter>;
}

@InputType()
export class CommentWhereInput {
    @Field(() => [CommentWhereInput], {nullable:true})
    AND?: Array<CommentWhereInput>;
    @Field(() => [CommentWhereInput], {nullable:true})
    OR?: Array<CommentWhereInput>;
    @Field(() => [CommentWhereInput], {nullable:true})
    NOT?: Array<CommentWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    pageId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    userId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    parentCommentId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => ExitPageScalarRelationFilter, {nullable:true})
    page?: InstanceType<typeof ExitPageScalarRelationFilter>;
    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserNullableScalarRelationFilter>;
    @Field(() => CommentNullableScalarRelationFilter, {nullable:true})
    parentComment?: InstanceType<typeof CommentNullableScalarRelationFilter>;
    @Field(() => CommentListRelationFilter, {nullable:true})
    replies?: InstanceType<typeof CommentListRelationFilter>;
}

@ObjectType()
export class Comment {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => String, {nullable:true})
    userId!: string | null;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => String, {nullable:true})
    parentCommentId!: string | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => ExitPage, {nullable:false})
    page?: InstanceType<typeof ExitPage>;
    @Field(() => User, {nullable:true})
    user?: InstanceType<typeof User> | null;
    @Field(() => Comment, {nullable:true})
    parentComment?: InstanceType<typeof Comment> | null;
    @Field(() => [Comment], {nullable:true})
    replies?: Array<Comment>;
    @Field(() => CommentCount, {nullable:false})
    _count?: InstanceType<typeof CommentCount>;
}

@ArgsType()
export class CreateManyCommentArgs {
    @Field(() => [CommentCreateManyInput], {nullable:false})
    @Type(() => CommentCreateManyInput)
    data!: Array<CommentCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneCommentArgs {
    @Field(() => CommentCreateInput, {nullable:false})
    @Type(() => CommentCreateInput)
    data!: InstanceType<typeof CommentCreateInput>;
}

@ArgsType()
export class DeleteManyCommentArgs {
    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    where?: InstanceType<typeof CommentWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneCommentArgs {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstCommentOrThrowArgs {
    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    where?: InstanceType<typeof CommentWhereInput>;
    @Field(() => [CommentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommentOrderByWithRelationInput>;
    @Field(() => CommentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CommentScalarFieldEnum], {nullable:true})
    distinct?: Array<`${CommentScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstCommentArgs {
    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    where?: InstanceType<typeof CommentWhereInput>;
    @Field(() => [CommentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommentOrderByWithRelationInput>;
    @Field(() => CommentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CommentScalarFieldEnum], {nullable:true})
    distinct?: Array<`${CommentScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyCommentArgs {
    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    where?: InstanceType<typeof CommentWhereInput>;
    @Field(() => [CommentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommentOrderByWithRelationInput>;
    @Field(() => CommentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CommentScalarFieldEnum], {nullable:true})
    distinct?: Array<`${CommentScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueCommentOrThrowArgs {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueCommentArgs {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpdateManyCommentArgs {
    @Field(() => CommentUpdateManyMutationInput, {nullable:false})
    @Type(() => CommentUpdateManyMutationInput)
    data!: InstanceType<typeof CommentUpdateManyMutationInput>;
    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    where?: InstanceType<typeof CommentWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneCommentArgs {
    @Field(() => CommentUpdateInput, {nullable:false})
    @Type(() => CommentUpdateInput)
    data!: InstanceType<typeof CommentUpdateInput>;
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneCommentArgs {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => CommentCreateInput, {nullable:false})
    @Type(() => CommentCreateInput)
    create!: InstanceType<typeof CommentCreateInput>;
    @Field(() => CommentUpdateInput, {nullable:false})
    @Type(() => CommentUpdateInput)
    update!: InstanceType<typeof CommentUpdateInput>;
}

@ObjectType()
export class AggregateExitPage {
    @Field(() => ExitPageCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ExitPageCountAggregate>;
    @Field(() => ExitPageMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ExitPageMinAggregate>;
    @Field(() => ExitPageMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ExitPageMaxAggregate>;
}

@ArgsType()
export class CreateManyExitPageArgs {
    @Field(() => [ExitPageCreateManyInput], {nullable:false})
    @Type(() => ExitPageCreateManyInput)
    data!: Array<ExitPageCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneExitPageArgs {
    @Field(() => ExitPageCreateInput, {nullable:false})
    @Type(() => ExitPageCreateInput)
    data!: InstanceType<typeof ExitPageCreateInput>;
}

@ArgsType()
export class DeleteManyExitPageArgs {
    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: InstanceType<typeof ExitPageWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneExitPageArgs {
    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
}

@ArgsType()
export class ExitPageAggregateArgs {
    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: InstanceType<typeof ExitPageWhereInput>;
    @Field(() => [ExitPageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ExitPageOrderByWithRelationInput>;
    @Field(() => ExitPageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ExitPageCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ExitPageCountAggregateInput>;
    @Field(() => ExitPageMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ExitPageMinAggregateInput>;
    @Field(() => ExitPageMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ExitPageMaxAggregateInput>;
}

@InputType()
export class ExitPageCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
    @Field(() => Boolean, {nullable:true})
    tone?: true;
    @Field(() => Boolean, {nullable:true})
    templateId?: true;
    @Field(() => Boolean, {nullable:true})
    data?: true;
    @Field(() => Boolean, {nullable:true})
    slug?: true;
    @Field(() => Boolean, {nullable:true})
    isHallOfFame?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ExitPageCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    authorId!: number;
    @Field(() => Int, {nullable:false})
    tone!: number;
    @Field(() => Int, {nullable:false})
    templateId!: number;
    @Field(() => Int, {nullable:false})
    data!: number;
    @Field(() => Int, {nullable:false})
    slug!: number;
    @Field(() => Int, {nullable:false})
    isHallOfFame!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ExitPageCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    authorId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    tone?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    templateId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    data?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    slug?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isHallOfFame?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@ObjectType()
export class ExitPageCount {
    @Field(() => Int, {nullable:false})
    reactions?: number;
    @Field(() => Int, {nullable:false})
    votes?: number;
    @Field(() => Int, {nullable:false})
    comments?: number;
    @Field(() => Int, {nullable:false})
    views?: number;
    @Field(() => Int, {nullable:false})
    shares?: number;
    @Field(() => Int, {nullable:false})
    versions?: number;
    @Field(() => Int, {nullable:false})
    tags?: number;
}

@InputType()
export class ExitPageCreateManyAuthorInputEnvelope {
    @Field(() => [ExitPageCreateManyAuthorInput], {nullable:false})
    @Type(() => ExitPageCreateManyAuthorInput)
    data!: Array<ExitPageCreateManyAuthorInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ExitPageCreateManyAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Tone, {nullable:false})
    tone!: `${Tone}`;
    @Field(() => String, {nullable:false})
    templateId!: string;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Boolean, {nullable:true})
    isHallOfFame?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ExitPageCreateManyTemplateInputEnvelope {
    @Field(() => [ExitPageCreateManyTemplateInput], {nullable:false})
    @Type(() => ExitPageCreateManyTemplateInput)
    data!: Array<ExitPageCreateManyTemplateInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ExitPageCreateManyTemplateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => Tone, {nullable:false})
    tone!: `${Tone}`;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Boolean, {nullable:true})
    isHallOfFame?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ExitPageCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => Tone, {nullable:false})
    tone!: `${Tone}`;
    @Field(() => String, {nullable:false})
    templateId!: string;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Boolean, {nullable:true})
    isHallOfFame?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ExitPageCreateNestedManyWithoutAuthorInput {
    @Field(() => [ExitPageCreateWithoutAuthorInput], {nullable:true})
    @Type(() => ExitPageCreateWithoutAuthorInput)
    create?: Array<ExitPageCreateWithoutAuthorInput>;
    @Field(() => [ExitPageCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<ExitPageCreateOrConnectWithoutAuthorInput>;
    @Field(() => ExitPageCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => ExitPageCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof ExitPageCreateManyAuthorInputEnvelope>;
    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
}

@InputType()
export class ExitPageCreateNestedManyWithoutTagsInput {
    @Field(() => [ExitPageCreateWithoutTagsInput], {nullable:true})
    @Type(() => ExitPageCreateWithoutTagsInput)
    create?: Array<ExitPageCreateWithoutTagsInput>;
    @Field(() => [ExitPageCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<ExitPageCreateOrConnectWithoutTagsInput>;
    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
}

@InputType()
export class ExitPageCreateNestedManyWithoutTemplateInput {
    @Field(() => [ExitPageCreateWithoutTemplateInput], {nullable:true})
    @Type(() => ExitPageCreateWithoutTemplateInput)
    create?: Array<ExitPageCreateWithoutTemplateInput>;
    @Field(() => [ExitPageCreateOrConnectWithoutTemplateInput], {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutTemplateInput)
    connectOrCreate?: Array<ExitPageCreateOrConnectWithoutTemplateInput>;
    @Field(() => ExitPageCreateManyTemplateInputEnvelope, {nullable:true})
    @Type(() => ExitPageCreateManyTemplateInputEnvelope)
    createMany?: InstanceType<typeof ExitPageCreateManyTemplateInputEnvelope>;
    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
}

@InputType()
export class ExitPageCreateNestedOneWithoutCommentsInput {
    @Field(() => ExitPageCreateWithoutCommentsInput, {nullable:true})
    @Type(() => ExitPageCreateWithoutCommentsInput)
    create?: InstanceType<typeof ExitPageCreateWithoutCommentsInput>;
    @Field(() => ExitPageCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: InstanceType<typeof ExitPageCreateOrConnectWithoutCommentsInput>;
    @Field(() => ExitPageWhereUniqueInput, {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
}

@InputType()
export class ExitPageCreateNestedOneWithoutReactionsInput {
    @Field(() => ExitPageCreateWithoutReactionsInput, {nullable:true})
    @Type(() => ExitPageCreateWithoutReactionsInput)
    create?: InstanceType<typeof ExitPageCreateWithoutReactionsInput>;
    @Field(() => ExitPageCreateOrConnectWithoutReactionsInput, {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutReactionsInput)
    connectOrCreate?: InstanceType<typeof ExitPageCreateOrConnectWithoutReactionsInput>;
    @Field(() => ExitPageWhereUniqueInput, {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
}

@InputType()
export class ExitPageCreateNestedOneWithoutSharesInput {
    @Field(() => ExitPageCreateWithoutSharesInput, {nullable:true})
    @Type(() => ExitPageCreateWithoutSharesInput)
    create?: InstanceType<typeof ExitPageCreateWithoutSharesInput>;
    @Field(() => ExitPageCreateOrConnectWithoutSharesInput, {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutSharesInput)
    connectOrCreate?: InstanceType<typeof ExitPageCreateOrConnectWithoutSharesInput>;
    @Field(() => ExitPageWhereUniqueInput, {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
}

@InputType()
export class ExitPageCreateNestedOneWithoutVersionsInput {
    @Field(() => ExitPageCreateWithoutVersionsInput, {nullable:true})
    @Type(() => ExitPageCreateWithoutVersionsInput)
    create?: InstanceType<typeof ExitPageCreateWithoutVersionsInput>;
    @Field(() => ExitPageCreateOrConnectWithoutVersionsInput, {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutVersionsInput)
    connectOrCreate?: InstanceType<typeof ExitPageCreateOrConnectWithoutVersionsInput>;
    @Field(() => ExitPageWhereUniqueInput, {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
}

@InputType()
export class ExitPageCreateNestedOneWithoutViewsInput {
    @Field(() => ExitPageCreateWithoutViewsInput, {nullable:true})
    @Type(() => ExitPageCreateWithoutViewsInput)
    create?: InstanceType<typeof ExitPageCreateWithoutViewsInput>;
    @Field(() => ExitPageCreateOrConnectWithoutViewsInput, {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutViewsInput)
    connectOrCreate?: InstanceType<typeof ExitPageCreateOrConnectWithoutViewsInput>;
    @Field(() => ExitPageWhereUniqueInput, {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
}

@InputType()
export class ExitPageCreateNestedOneWithoutVotesInput {
    @Field(() => ExitPageCreateWithoutVotesInput, {nullable:true})
    @Type(() => ExitPageCreateWithoutVotesInput)
    create?: InstanceType<typeof ExitPageCreateWithoutVotesInput>;
    @Field(() => ExitPageCreateOrConnectWithoutVotesInput, {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutVotesInput)
    connectOrCreate?: InstanceType<typeof ExitPageCreateOrConnectWithoutVotesInput>;
    @Field(() => ExitPageWhereUniqueInput, {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
}

@InputType()
export class ExitPageCreateOrConnectWithoutAuthorInput {
    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => ExitPageCreateWithoutAuthorInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutAuthorInput)
    create!: InstanceType<typeof ExitPageCreateWithoutAuthorInput>;
}

@InputType()
export class ExitPageCreateOrConnectWithoutCommentsInput {
    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => ExitPageCreateWithoutCommentsInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutCommentsInput)
    create!: InstanceType<typeof ExitPageCreateWithoutCommentsInput>;
}

@InputType()
export class ExitPageCreateOrConnectWithoutReactionsInput {
    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => ExitPageCreateWithoutReactionsInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutReactionsInput)
    create!: InstanceType<typeof ExitPageCreateWithoutReactionsInput>;
}

@InputType()
export class ExitPageCreateOrConnectWithoutSharesInput {
    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => ExitPageCreateWithoutSharesInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutSharesInput)
    create!: InstanceType<typeof ExitPageCreateWithoutSharesInput>;
}

@InputType()
export class ExitPageCreateOrConnectWithoutTagsInput {
    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => ExitPageCreateWithoutTagsInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutTagsInput)
    create!: InstanceType<typeof ExitPageCreateWithoutTagsInput>;
}

@InputType()
export class ExitPageCreateOrConnectWithoutTemplateInput {
    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => ExitPageCreateWithoutTemplateInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutTemplateInput)
    create!: InstanceType<typeof ExitPageCreateWithoutTemplateInput>;
}

@InputType()
export class ExitPageCreateOrConnectWithoutVersionsInput {
    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => ExitPageCreateWithoutVersionsInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutVersionsInput)
    create!: InstanceType<typeof ExitPageCreateWithoutVersionsInput>;
}

@InputType()
export class ExitPageCreateOrConnectWithoutViewsInput {
    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => ExitPageCreateWithoutViewsInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutViewsInput)
    create!: InstanceType<typeof ExitPageCreateWithoutViewsInput>;
}

@InputType()
export class ExitPageCreateOrConnectWithoutVotesInput {
    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => ExitPageCreateWithoutVotesInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutVotesInput)
    create!: InstanceType<typeof ExitPageCreateWithoutVotesInput>;
}

@InputType()
export class ExitPageCreateWithoutAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Tone, {nullable:false})
    tone!: `${Tone}`;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Boolean, {nullable:true})
    isHallOfFame?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => TemplateCreateNestedOneWithoutPagesInput, {nullable:false})
    template!: InstanceType<typeof TemplateCreateNestedOneWithoutPagesInput>;
    @Field(() => ReactionCreateNestedManyWithoutPageInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionCreateNestedManyWithoutPageInput>;
    @Field(() => VoteCreateNestedManyWithoutPageInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutPageInput>;
    @Field(() => CommentCreateNestedManyWithoutPageInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutPageInput>;
    @Field(() => PageViewCreateNestedManyWithoutPageInput, {nullable:true})
    views?: InstanceType<typeof PageViewCreateNestedManyWithoutPageInput>;
    @Field(() => PageShareCreateNestedManyWithoutPageInput, {nullable:true})
    shares?: InstanceType<typeof PageShareCreateNestedManyWithoutPageInput>;
    @Field(() => PageVersionCreateNestedManyWithoutPageInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionCreateNestedManyWithoutPageInput>;
    @Field(() => TagCreateNestedManyWithoutExitPageInput, {nullable:true})
    tags?: InstanceType<typeof TagCreateNestedManyWithoutExitPageInput>;
}

@InputType()
export class ExitPageCreateWithoutCommentsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Tone, {nullable:false})
    tone!: `${Tone}`;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Boolean, {nullable:true})
    isHallOfFame?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutPagesInput, {nullable:true})
    author?: InstanceType<typeof UserCreateNestedOneWithoutPagesInput>;
    @Field(() => TemplateCreateNestedOneWithoutPagesInput, {nullable:false})
    template!: InstanceType<typeof TemplateCreateNestedOneWithoutPagesInput>;
    @Field(() => ReactionCreateNestedManyWithoutPageInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionCreateNestedManyWithoutPageInput>;
    @Field(() => VoteCreateNestedManyWithoutPageInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutPageInput>;
    @Field(() => PageViewCreateNestedManyWithoutPageInput, {nullable:true})
    views?: InstanceType<typeof PageViewCreateNestedManyWithoutPageInput>;
    @Field(() => PageShareCreateNestedManyWithoutPageInput, {nullable:true})
    shares?: InstanceType<typeof PageShareCreateNestedManyWithoutPageInput>;
    @Field(() => PageVersionCreateNestedManyWithoutPageInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionCreateNestedManyWithoutPageInput>;
    @Field(() => TagCreateNestedManyWithoutExitPageInput, {nullable:true})
    tags?: InstanceType<typeof TagCreateNestedManyWithoutExitPageInput>;
}

@InputType()
export class ExitPageCreateWithoutReactionsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Tone, {nullable:false})
    tone!: `${Tone}`;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Boolean, {nullable:true})
    isHallOfFame?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutPagesInput, {nullable:true})
    author?: InstanceType<typeof UserCreateNestedOneWithoutPagesInput>;
    @Field(() => TemplateCreateNestedOneWithoutPagesInput, {nullable:false})
    template!: InstanceType<typeof TemplateCreateNestedOneWithoutPagesInput>;
    @Field(() => VoteCreateNestedManyWithoutPageInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutPageInput>;
    @Field(() => CommentCreateNestedManyWithoutPageInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutPageInput>;
    @Field(() => PageViewCreateNestedManyWithoutPageInput, {nullable:true})
    views?: InstanceType<typeof PageViewCreateNestedManyWithoutPageInput>;
    @Field(() => PageShareCreateNestedManyWithoutPageInput, {nullable:true})
    shares?: InstanceType<typeof PageShareCreateNestedManyWithoutPageInput>;
    @Field(() => PageVersionCreateNestedManyWithoutPageInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionCreateNestedManyWithoutPageInput>;
    @Field(() => TagCreateNestedManyWithoutExitPageInput, {nullable:true})
    tags?: InstanceType<typeof TagCreateNestedManyWithoutExitPageInput>;
}

@InputType()
export class ExitPageCreateWithoutSharesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Tone, {nullable:false})
    tone!: `${Tone}`;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Boolean, {nullable:true})
    isHallOfFame?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutPagesInput, {nullable:true})
    author?: InstanceType<typeof UserCreateNestedOneWithoutPagesInput>;
    @Field(() => TemplateCreateNestedOneWithoutPagesInput, {nullable:false})
    template!: InstanceType<typeof TemplateCreateNestedOneWithoutPagesInput>;
    @Field(() => ReactionCreateNestedManyWithoutPageInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionCreateNestedManyWithoutPageInput>;
    @Field(() => VoteCreateNestedManyWithoutPageInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutPageInput>;
    @Field(() => CommentCreateNestedManyWithoutPageInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutPageInput>;
    @Field(() => PageViewCreateNestedManyWithoutPageInput, {nullable:true})
    views?: InstanceType<typeof PageViewCreateNestedManyWithoutPageInput>;
    @Field(() => PageVersionCreateNestedManyWithoutPageInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionCreateNestedManyWithoutPageInput>;
    @Field(() => TagCreateNestedManyWithoutExitPageInput, {nullable:true})
    tags?: InstanceType<typeof TagCreateNestedManyWithoutExitPageInput>;
}

@InputType()
export class ExitPageCreateWithoutTagsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Tone, {nullable:false})
    tone!: `${Tone}`;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Boolean, {nullable:true})
    isHallOfFame?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutPagesInput, {nullable:true})
    author?: InstanceType<typeof UserCreateNestedOneWithoutPagesInput>;
    @Field(() => TemplateCreateNestedOneWithoutPagesInput, {nullable:false})
    template!: InstanceType<typeof TemplateCreateNestedOneWithoutPagesInput>;
    @Field(() => ReactionCreateNestedManyWithoutPageInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionCreateNestedManyWithoutPageInput>;
    @Field(() => VoteCreateNestedManyWithoutPageInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutPageInput>;
    @Field(() => CommentCreateNestedManyWithoutPageInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutPageInput>;
    @Field(() => PageViewCreateNestedManyWithoutPageInput, {nullable:true})
    views?: InstanceType<typeof PageViewCreateNestedManyWithoutPageInput>;
    @Field(() => PageShareCreateNestedManyWithoutPageInput, {nullable:true})
    shares?: InstanceType<typeof PageShareCreateNestedManyWithoutPageInput>;
    @Field(() => PageVersionCreateNestedManyWithoutPageInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionCreateNestedManyWithoutPageInput>;
}

@InputType()
export class ExitPageCreateWithoutTemplateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Tone, {nullable:false})
    tone!: `${Tone}`;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Boolean, {nullable:true})
    isHallOfFame?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutPagesInput, {nullable:true})
    author?: InstanceType<typeof UserCreateNestedOneWithoutPagesInput>;
    @Field(() => ReactionCreateNestedManyWithoutPageInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionCreateNestedManyWithoutPageInput>;
    @Field(() => VoteCreateNestedManyWithoutPageInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutPageInput>;
    @Field(() => CommentCreateNestedManyWithoutPageInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutPageInput>;
    @Field(() => PageViewCreateNestedManyWithoutPageInput, {nullable:true})
    views?: InstanceType<typeof PageViewCreateNestedManyWithoutPageInput>;
    @Field(() => PageShareCreateNestedManyWithoutPageInput, {nullable:true})
    shares?: InstanceType<typeof PageShareCreateNestedManyWithoutPageInput>;
    @Field(() => PageVersionCreateNestedManyWithoutPageInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionCreateNestedManyWithoutPageInput>;
    @Field(() => TagCreateNestedManyWithoutExitPageInput, {nullable:true})
    tags?: InstanceType<typeof TagCreateNestedManyWithoutExitPageInput>;
}

@InputType()
export class ExitPageCreateWithoutVersionsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Tone, {nullable:false})
    tone!: `${Tone}`;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Boolean, {nullable:true})
    isHallOfFame?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutPagesInput, {nullable:true})
    author?: InstanceType<typeof UserCreateNestedOneWithoutPagesInput>;
    @Field(() => TemplateCreateNestedOneWithoutPagesInput, {nullable:false})
    template!: InstanceType<typeof TemplateCreateNestedOneWithoutPagesInput>;
    @Field(() => ReactionCreateNestedManyWithoutPageInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionCreateNestedManyWithoutPageInput>;
    @Field(() => VoteCreateNestedManyWithoutPageInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutPageInput>;
    @Field(() => CommentCreateNestedManyWithoutPageInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutPageInput>;
    @Field(() => PageViewCreateNestedManyWithoutPageInput, {nullable:true})
    views?: InstanceType<typeof PageViewCreateNestedManyWithoutPageInput>;
    @Field(() => PageShareCreateNestedManyWithoutPageInput, {nullable:true})
    shares?: InstanceType<typeof PageShareCreateNestedManyWithoutPageInput>;
    @Field(() => TagCreateNestedManyWithoutExitPageInput, {nullable:true})
    tags?: InstanceType<typeof TagCreateNestedManyWithoutExitPageInput>;
}

@InputType()
export class ExitPageCreateWithoutViewsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Tone, {nullable:false})
    tone!: `${Tone}`;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Boolean, {nullable:true})
    isHallOfFame?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutPagesInput, {nullable:true})
    author?: InstanceType<typeof UserCreateNestedOneWithoutPagesInput>;
    @Field(() => TemplateCreateNestedOneWithoutPagesInput, {nullable:false})
    template!: InstanceType<typeof TemplateCreateNestedOneWithoutPagesInput>;
    @Field(() => ReactionCreateNestedManyWithoutPageInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionCreateNestedManyWithoutPageInput>;
    @Field(() => VoteCreateNestedManyWithoutPageInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutPageInput>;
    @Field(() => CommentCreateNestedManyWithoutPageInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutPageInput>;
    @Field(() => PageShareCreateNestedManyWithoutPageInput, {nullable:true})
    shares?: InstanceType<typeof PageShareCreateNestedManyWithoutPageInput>;
    @Field(() => PageVersionCreateNestedManyWithoutPageInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionCreateNestedManyWithoutPageInput>;
    @Field(() => TagCreateNestedManyWithoutExitPageInput, {nullable:true})
    tags?: InstanceType<typeof TagCreateNestedManyWithoutExitPageInput>;
}

@InputType()
export class ExitPageCreateWithoutVotesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Tone, {nullable:false})
    tone!: `${Tone}`;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Boolean, {nullable:true})
    isHallOfFame?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutPagesInput, {nullable:true})
    author?: InstanceType<typeof UserCreateNestedOneWithoutPagesInput>;
    @Field(() => TemplateCreateNestedOneWithoutPagesInput, {nullable:false})
    template!: InstanceType<typeof TemplateCreateNestedOneWithoutPagesInput>;
    @Field(() => ReactionCreateNestedManyWithoutPageInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionCreateNestedManyWithoutPageInput>;
    @Field(() => CommentCreateNestedManyWithoutPageInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutPageInput>;
    @Field(() => PageViewCreateNestedManyWithoutPageInput, {nullable:true})
    views?: InstanceType<typeof PageViewCreateNestedManyWithoutPageInput>;
    @Field(() => PageShareCreateNestedManyWithoutPageInput, {nullable:true})
    shares?: InstanceType<typeof PageShareCreateNestedManyWithoutPageInput>;
    @Field(() => PageVersionCreateNestedManyWithoutPageInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionCreateNestedManyWithoutPageInput>;
    @Field(() => TagCreateNestedManyWithoutExitPageInput, {nullable:true})
    tags?: InstanceType<typeof TagCreateNestedManyWithoutExitPageInput>;
}

@InputType()
export class ExitPageCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Tone, {nullable:false})
    tone!: `${Tone}`;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Boolean, {nullable:true})
    isHallOfFame?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutPagesInput, {nullable:true})
    author?: InstanceType<typeof UserCreateNestedOneWithoutPagesInput>;
    @Field(() => TemplateCreateNestedOneWithoutPagesInput, {nullable:false})
    template!: InstanceType<typeof TemplateCreateNestedOneWithoutPagesInput>;
    @Field(() => ReactionCreateNestedManyWithoutPageInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionCreateNestedManyWithoutPageInput>;
    @Field(() => VoteCreateNestedManyWithoutPageInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutPageInput>;
    @Field(() => CommentCreateNestedManyWithoutPageInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutPageInput>;
    @Field(() => PageViewCreateNestedManyWithoutPageInput, {nullable:true})
    views?: InstanceType<typeof PageViewCreateNestedManyWithoutPageInput>;
    @Field(() => PageShareCreateNestedManyWithoutPageInput, {nullable:true})
    shares?: InstanceType<typeof PageShareCreateNestedManyWithoutPageInput>;
    @Field(() => PageVersionCreateNestedManyWithoutPageInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionCreateNestedManyWithoutPageInput>;
    @Field(() => TagCreateNestedManyWithoutExitPageInput, {nullable:true})
    tags?: InstanceType<typeof TagCreateNestedManyWithoutExitPageInput>;
}

@ArgsType()
export class ExitPageGroupByArgs {
    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: InstanceType<typeof ExitPageWhereInput>;
    @Field(() => [ExitPageOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ExitPageOrderByWithAggregationInput>;
    @Field(() => [ExitPageScalarFieldEnum], {nullable:false})
    by!: Array<`${ExitPageScalarFieldEnum}`>;
    @Field(() => ExitPageScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ExitPageScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ExitPageCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ExitPageCountAggregateInput>;
    @Field(() => ExitPageMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ExitPageMinAggregateInput>;
    @Field(() => ExitPageMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ExitPageMaxAggregateInput>;
}

@ObjectType()
export class ExitPageGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => Tone, {nullable:false})
    tone!: `${Tone}`;
    @Field(() => String, {nullable:false})
    templateId!: string;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Boolean, {nullable:false})
    isHallOfFame!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => ExitPageCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ExitPageCountAggregate>;
    @Field(() => ExitPageMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ExitPageMinAggregate>;
    @Field(() => ExitPageMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ExitPageMaxAggregate>;
}

@InputType()
export class ExitPageListRelationFilter {
    @Field(() => ExitPageWhereInput, {nullable:true})
    every?: InstanceType<typeof ExitPageWhereInput>;
    @Field(() => ExitPageWhereInput, {nullable:true})
    some?: InstanceType<typeof ExitPageWhereInput>;
    @Field(() => ExitPageWhereInput, {nullable:true})
    none?: InstanceType<typeof ExitPageWhereInput>;
}

@InputType()
export class ExitPageMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
    @Field(() => Boolean, {nullable:true})
    tone?: true;
    @Field(() => Boolean, {nullable:true})
    templateId?: true;
    @Field(() => Boolean, {nullable:true})
    slug?: true;
    @Field(() => Boolean, {nullable:true})
    isHallOfFame?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class ExitPageMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => Tone, {nullable:true})
    tone?: `${Tone}`;
    @Field(() => String, {nullable:true})
    templateId?: string;
    @Field(() => String, {nullable:true})
    slug?: string;
    @Field(() => Boolean, {nullable:true})
    isHallOfFame?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ExitPageMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    authorId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    tone?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    templateId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    slug?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isHallOfFame?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class ExitPageMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
    @Field(() => Boolean, {nullable:true})
    tone?: true;
    @Field(() => Boolean, {nullable:true})
    templateId?: true;
    @Field(() => Boolean, {nullable:true})
    slug?: true;
    @Field(() => Boolean, {nullable:true})
    isHallOfFame?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class ExitPageMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => Tone, {nullable:true})
    tone?: `${Tone}`;
    @Field(() => String, {nullable:true})
    templateId?: string;
    @Field(() => String, {nullable:true})
    slug?: string;
    @Field(() => Boolean, {nullable:true})
    isHallOfFame?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ExitPageMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    authorId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    tone?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    templateId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    slug?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isHallOfFame?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class ExitPageOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class ExitPageOrderByRelevanceInput {
    @Field(() => [ExitPageOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${ExitPageOrderByRelevanceFieldEnum}`>;
    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;
    @Field(() => String, {nullable:false})
    search!: string;
}

@InputType()
export class ExitPageOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    authorId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    tone?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    templateId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    data?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    slug?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isHallOfFame?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => ExitPageCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ExitPageCountOrderByAggregateInput>;
    @Field(() => ExitPageMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ExitPageMaxOrderByAggregateInput>;
    @Field(() => ExitPageMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ExitPageMinOrderByAggregateInput>;
}

@InputType()
export class ExitPageOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    authorId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    tone?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    templateId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    data?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    slug?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isHallOfFame?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    author?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => TemplateOrderByWithRelationInput, {nullable:true})
    template?: InstanceType<typeof TemplateOrderByWithRelationInput>;
    @Field(() => ReactionOrderByRelationAggregateInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionOrderByRelationAggregateInput>;
    @Field(() => VoteOrderByRelationAggregateInput, {nullable:true})
    votes?: InstanceType<typeof VoteOrderByRelationAggregateInput>;
    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    comments?: InstanceType<typeof CommentOrderByRelationAggregateInput>;
    @Field(() => PageViewOrderByRelationAggregateInput, {nullable:true})
    views?: InstanceType<typeof PageViewOrderByRelationAggregateInput>;
    @Field(() => PageShareOrderByRelationAggregateInput, {nullable:true})
    shares?: InstanceType<typeof PageShareOrderByRelationAggregateInput>;
    @Field(() => PageVersionOrderByRelationAggregateInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionOrderByRelationAggregateInput>;
    @Field(() => TagOrderByRelationAggregateInput, {nullable:true})
    tags?: InstanceType<typeof TagOrderByRelationAggregateInput>;
    @Field(() => ExitPageOrderByRelevanceInput, {nullable:true})
    _relevance?: InstanceType<typeof ExitPageOrderByRelevanceInput>;
}

@InputType()
export class ExitPageScalarRelationFilter {
    @Field(() => ExitPageWhereInput, {nullable:true})
    is?: InstanceType<typeof ExitPageWhereInput>;
    @Field(() => ExitPageWhereInput, {nullable:true})
    isNot?: InstanceType<typeof ExitPageWhereInput>;
}

@InputType()
export class ExitPageScalarWhereWithAggregatesInput {
    @Field(() => [ExitPageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ExitPageScalarWhereWithAggregatesInput>;
    @Field(() => [ExitPageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ExitPageScalarWhereWithAggregatesInput>;
    @Field(() => [ExitPageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ExitPageScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    authorId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => EnumToneWithAggregatesFilter, {nullable:true})
    tone?: InstanceType<typeof EnumToneWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    templateId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    @Type(() => JsonWithAggregatesFilter)
    data?: InstanceType<typeof JsonWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isHallOfFame?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class ExitPageScalarWhereInput {
    @Field(() => [ExitPageScalarWhereInput], {nullable:true})
    AND?: Array<ExitPageScalarWhereInput>;
    @Field(() => [ExitPageScalarWhereInput], {nullable:true})
    OR?: Array<ExitPageScalarWhereInput>;
    @Field(() => [ExitPageScalarWhereInput], {nullable:true})
    NOT?: Array<ExitPageScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    authorId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => EnumToneFilter, {nullable:true})
    tone?: InstanceType<typeof EnumToneFilter>;
    @Field(() => StringFilter, {nullable:true})
    templateId?: InstanceType<typeof StringFilter>;
    @Field(() => JsonFilter, {nullable:true})
    @Type(() => JsonFilter)
    data?: InstanceType<typeof JsonFilter>;
    @Field(() => StringFilter, {nullable:true})
    slug?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    isHallOfFame?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class ExitPageUncheckedCreateNestedManyWithoutAuthorInput {
    @Field(() => [ExitPageCreateWithoutAuthorInput], {nullable:true})
    @Type(() => ExitPageCreateWithoutAuthorInput)
    create?: Array<ExitPageCreateWithoutAuthorInput>;
    @Field(() => [ExitPageCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<ExitPageCreateOrConnectWithoutAuthorInput>;
    @Field(() => ExitPageCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => ExitPageCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof ExitPageCreateManyAuthorInputEnvelope>;
    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
}

@InputType()
export class ExitPageUncheckedCreateNestedManyWithoutTagsInput {
    @Field(() => [ExitPageCreateWithoutTagsInput], {nullable:true})
    @Type(() => ExitPageCreateWithoutTagsInput)
    create?: Array<ExitPageCreateWithoutTagsInput>;
    @Field(() => [ExitPageCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<ExitPageCreateOrConnectWithoutTagsInput>;
    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
}

@InputType()
export class ExitPageUncheckedCreateNestedManyWithoutTemplateInput {
    @Field(() => [ExitPageCreateWithoutTemplateInput], {nullable:true})
    @Type(() => ExitPageCreateWithoutTemplateInput)
    create?: Array<ExitPageCreateWithoutTemplateInput>;
    @Field(() => [ExitPageCreateOrConnectWithoutTemplateInput], {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutTemplateInput)
    connectOrCreate?: Array<ExitPageCreateOrConnectWithoutTemplateInput>;
    @Field(() => ExitPageCreateManyTemplateInputEnvelope, {nullable:true})
    @Type(() => ExitPageCreateManyTemplateInputEnvelope)
    createMany?: InstanceType<typeof ExitPageCreateManyTemplateInputEnvelope>;
    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
}

@InputType()
export class ExitPageUncheckedCreateWithoutAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Tone, {nullable:false})
    tone!: `${Tone}`;
    @Field(() => String, {nullable:false})
    templateId!: string;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Boolean, {nullable:true})
    isHallOfFame?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ReactionUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => PageViewUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => PageShareUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => PageVersionUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => TagUncheckedCreateNestedManyWithoutExitPageInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutExitPageInput>;
}

@InputType()
export class ExitPageUncheckedCreateWithoutCommentsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => Tone, {nullable:false})
    tone!: `${Tone}`;
    @Field(() => String, {nullable:false})
    templateId!: string;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Boolean, {nullable:true})
    isHallOfFame?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ReactionUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => PageViewUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => PageShareUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => PageVersionUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => TagUncheckedCreateNestedManyWithoutExitPageInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutExitPageInput>;
}

@InputType()
export class ExitPageUncheckedCreateWithoutReactionsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => Tone, {nullable:false})
    tone!: `${Tone}`;
    @Field(() => String, {nullable:false})
    templateId!: string;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Boolean, {nullable:true})
    isHallOfFame?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => VoteUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => PageViewUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => PageShareUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => PageVersionUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => TagUncheckedCreateNestedManyWithoutExitPageInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutExitPageInput>;
}

@InputType()
export class ExitPageUncheckedCreateWithoutSharesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => Tone, {nullable:false})
    tone!: `${Tone}`;
    @Field(() => String, {nullable:false})
    templateId!: string;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Boolean, {nullable:true})
    isHallOfFame?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ReactionUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => PageViewUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => PageVersionUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => TagUncheckedCreateNestedManyWithoutExitPageInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutExitPageInput>;
}

@InputType()
export class ExitPageUncheckedCreateWithoutTagsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => Tone, {nullable:false})
    tone!: `${Tone}`;
    @Field(() => String, {nullable:false})
    templateId!: string;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Boolean, {nullable:true})
    isHallOfFame?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ReactionUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => PageViewUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => PageShareUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => PageVersionUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedCreateNestedManyWithoutPageInput>;
}

@InputType()
export class ExitPageUncheckedCreateWithoutTemplateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => Tone, {nullable:false})
    tone!: `${Tone}`;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Boolean, {nullable:true})
    isHallOfFame?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ReactionUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => PageViewUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => PageShareUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => PageVersionUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => TagUncheckedCreateNestedManyWithoutExitPageInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutExitPageInput>;
}

@InputType()
export class ExitPageUncheckedCreateWithoutVersionsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => Tone, {nullable:false})
    tone!: `${Tone}`;
    @Field(() => String, {nullable:false})
    templateId!: string;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Boolean, {nullable:true})
    isHallOfFame?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ReactionUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => PageViewUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => PageShareUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => TagUncheckedCreateNestedManyWithoutExitPageInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutExitPageInput>;
}

@InputType()
export class ExitPageUncheckedCreateWithoutViewsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => Tone, {nullable:false})
    tone!: `${Tone}`;
    @Field(() => String, {nullable:false})
    templateId!: string;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Boolean, {nullable:true})
    isHallOfFame?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ReactionUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => PageShareUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => PageVersionUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => TagUncheckedCreateNestedManyWithoutExitPageInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutExitPageInput>;
}

@InputType()
export class ExitPageUncheckedCreateWithoutVotesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => Tone, {nullable:false})
    tone!: `${Tone}`;
    @Field(() => String, {nullable:false})
    templateId!: string;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Boolean, {nullable:true})
    isHallOfFame?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ReactionUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => PageViewUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => PageShareUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => PageVersionUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => TagUncheckedCreateNestedManyWithoutExitPageInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutExitPageInput>;
}

@InputType()
export class ExitPageUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => Tone, {nullable:false})
    tone!: `${Tone}`;
    @Field(() => String, {nullable:false})
    templateId!: string;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Boolean, {nullable:true})
    isHallOfFame?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ReactionUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => PageViewUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => PageShareUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => PageVersionUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedCreateNestedManyWithoutPageInput>;
    @Field(() => TagUncheckedCreateNestedManyWithoutExitPageInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutExitPageInput>;
}

@InputType()
export class ExitPageUncheckedUpdateManyWithoutAuthorNestedInput {
    @Field(() => [ExitPageCreateWithoutAuthorInput], {nullable:true})
    @Type(() => ExitPageCreateWithoutAuthorInput)
    create?: Array<ExitPageCreateWithoutAuthorInput>;
    @Field(() => [ExitPageCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<ExitPageCreateOrConnectWithoutAuthorInput>;
    @Field(() => [ExitPageUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => ExitPageUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<ExitPageUpsertWithWhereUniqueWithoutAuthorInput>;
    @Field(() => ExitPageCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => ExitPageCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof ExitPageCreateManyAuthorInputEnvelope>;
    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [ExitPageUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => ExitPageUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<ExitPageUpdateWithWhereUniqueWithoutAuthorInput>;
    @Field(() => [ExitPageUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => ExitPageUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<ExitPageUpdateManyWithWhereWithoutAuthorInput>;
    @Field(() => [ExitPageScalarWhereInput], {nullable:true})
    @Type(() => ExitPageScalarWhereInput)
    deleteMany?: Array<ExitPageScalarWhereInput>;
}

@InputType()
export class ExitPageUncheckedUpdateManyWithoutAuthorInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumToneFieldUpdateOperationsInput, {nullable:true})
    tone?: InstanceType<typeof EnumToneFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    templateId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isHallOfFame?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ExitPageUncheckedUpdateManyWithoutTagsNestedInput {
    @Field(() => [ExitPageCreateWithoutTagsInput], {nullable:true})
    @Type(() => ExitPageCreateWithoutTagsInput)
    create?: Array<ExitPageCreateWithoutTagsInput>;
    @Field(() => [ExitPageCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<ExitPageCreateOrConnectWithoutTagsInput>;
    @Field(() => [ExitPageUpsertWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => ExitPageUpsertWithWhereUniqueWithoutTagsInput)
    upsert?: Array<ExitPageUpsertWithWhereUniqueWithoutTagsInput>;
    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [ExitPageUpdateWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => ExitPageUpdateWithWhereUniqueWithoutTagsInput)
    update?: Array<ExitPageUpdateWithWhereUniqueWithoutTagsInput>;
    @Field(() => [ExitPageUpdateManyWithWhereWithoutTagsInput], {nullable:true})
    @Type(() => ExitPageUpdateManyWithWhereWithoutTagsInput)
    updateMany?: Array<ExitPageUpdateManyWithWhereWithoutTagsInput>;
    @Field(() => [ExitPageScalarWhereInput], {nullable:true})
    @Type(() => ExitPageScalarWhereInput)
    deleteMany?: Array<ExitPageScalarWhereInput>;
}

@InputType()
export class ExitPageUncheckedUpdateManyWithoutTagsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumToneFieldUpdateOperationsInput, {nullable:true})
    tone?: InstanceType<typeof EnumToneFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    templateId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isHallOfFame?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ExitPageUncheckedUpdateManyWithoutTemplateNestedInput {
    @Field(() => [ExitPageCreateWithoutTemplateInput], {nullable:true})
    @Type(() => ExitPageCreateWithoutTemplateInput)
    create?: Array<ExitPageCreateWithoutTemplateInput>;
    @Field(() => [ExitPageCreateOrConnectWithoutTemplateInput], {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutTemplateInput)
    connectOrCreate?: Array<ExitPageCreateOrConnectWithoutTemplateInput>;
    @Field(() => [ExitPageUpsertWithWhereUniqueWithoutTemplateInput], {nullable:true})
    @Type(() => ExitPageUpsertWithWhereUniqueWithoutTemplateInput)
    upsert?: Array<ExitPageUpsertWithWhereUniqueWithoutTemplateInput>;
    @Field(() => ExitPageCreateManyTemplateInputEnvelope, {nullable:true})
    @Type(() => ExitPageCreateManyTemplateInputEnvelope)
    createMany?: InstanceType<typeof ExitPageCreateManyTemplateInputEnvelope>;
    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [ExitPageUpdateWithWhereUniqueWithoutTemplateInput], {nullable:true})
    @Type(() => ExitPageUpdateWithWhereUniqueWithoutTemplateInput)
    update?: Array<ExitPageUpdateWithWhereUniqueWithoutTemplateInput>;
    @Field(() => [ExitPageUpdateManyWithWhereWithoutTemplateInput], {nullable:true})
    @Type(() => ExitPageUpdateManyWithWhereWithoutTemplateInput)
    updateMany?: Array<ExitPageUpdateManyWithWhereWithoutTemplateInput>;
    @Field(() => [ExitPageScalarWhereInput], {nullable:true})
    @Type(() => ExitPageScalarWhereInput)
    deleteMany?: Array<ExitPageScalarWhereInput>;
}

@InputType()
export class ExitPageUncheckedUpdateManyWithoutTemplateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumToneFieldUpdateOperationsInput, {nullable:true})
    tone?: InstanceType<typeof EnumToneFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isHallOfFame?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ExitPageUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumToneFieldUpdateOperationsInput, {nullable:true})
    tone?: InstanceType<typeof EnumToneFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    templateId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isHallOfFame?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ExitPageUncheckedUpdateWithoutAuthorInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumToneFieldUpdateOperationsInput, {nullable:true})
    tone?: InstanceType<typeof EnumToneFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    templateId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isHallOfFame?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ReactionUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => PageViewUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => PageShareUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => PageVersionUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => TagUncheckedUpdateManyWithoutExitPageNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutExitPageNestedInput>;
}

@InputType()
export class ExitPageUncheckedUpdateWithoutCommentsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumToneFieldUpdateOperationsInput, {nullable:true})
    tone?: InstanceType<typeof EnumToneFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    templateId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isHallOfFame?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ReactionUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => PageViewUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => PageShareUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => PageVersionUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => TagUncheckedUpdateManyWithoutExitPageNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutExitPageNestedInput>;
}

@InputType()
export class ExitPageUncheckedUpdateWithoutReactionsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumToneFieldUpdateOperationsInput, {nullable:true})
    tone?: InstanceType<typeof EnumToneFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    templateId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isHallOfFame?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => PageViewUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => PageShareUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => PageVersionUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => TagUncheckedUpdateManyWithoutExitPageNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutExitPageNestedInput>;
}

@InputType()
export class ExitPageUncheckedUpdateWithoutSharesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumToneFieldUpdateOperationsInput, {nullable:true})
    tone?: InstanceType<typeof EnumToneFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    templateId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isHallOfFame?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ReactionUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => PageViewUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => PageVersionUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => TagUncheckedUpdateManyWithoutExitPageNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutExitPageNestedInput>;
}

@InputType()
export class ExitPageUncheckedUpdateWithoutTagsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumToneFieldUpdateOperationsInput, {nullable:true})
    tone?: InstanceType<typeof EnumToneFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    templateId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isHallOfFame?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ReactionUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => PageViewUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => PageShareUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => PageVersionUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedUpdateManyWithoutPageNestedInput>;
}

@InputType()
export class ExitPageUncheckedUpdateWithoutTemplateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumToneFieldUpdateOperationsInput, {nullable:true})
    tone?: InstanceType<typeof EnumToneFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isHallOfFame?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ReactionUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => PageViewUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => PageShareUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => PageVersionUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => TagUncheckedUpdateManyWithoutExitPageNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutExitPageNestedInput>;
}

@InputType()
export class ExitPageUncheckedUpdateWithoutVersionsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumToneFieldUpdateOperationsInput, {nullable:true})
    tone?: InstanceType<typeof EnumToneFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    templateId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isHallOfFame?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ReactionUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => PageViewUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => PageShareUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => TagUncheckedUpdateManyWithoutExitPageNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutExitPageNestedInput>;
}

@InputType()
export class ExitPageUncheckedUpdateWithoutViewsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumToneFieldUpdateOperationsInput, {nullable:true})
    tone?: InstanceType<typeof EnumToneFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    templateId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isHallOfFame?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ReactionUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => PageShareUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => PageVersionUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => TagUncheckedUpdateManyWithoutExitPageNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutExitPageNestedInput>;
}

@InputType()
export class ExitPageUncheckedUpdateWithoutVotesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumToneFieldUpdateOperationsInput, {nullable:true})
    tone?: InstanceType<typeof EnumToneFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    templateId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isHallOfFame?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ReactionUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => PageViewUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => PageShareUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => PageVersionUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => TagUncheckedUpdateManyWithoutExitPageNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutExitPageNestedInput>;
}

@InputType()
export class ExitPageUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumToneFieldUpdateOperationsInput, {nullable:true})
    tone?: InstanceType<typeof EnumToneFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    templateId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isHallOfFame?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ReactionUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => PageViewUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => PageShareUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => PageVersionUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedUpdateManyWithoutPageNestedInput>;
    @Field(() => TagUncheckedUpdateManyWithoutExitPageNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutExitPageNestedInput>;
}

@InputType()
export class ExitPageUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumToneFieldUpdateOperationsInput, {nullable:true})
    tone?: InstanceType<typeof EnumToneFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isHallOfFame?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ExitPageUpdateManyWithWhereWithoutAuthorInput {
    @Field(() => ExitPageScalarWhereInput, {nullable:false})
    @Type(() => ExitPageScalarWhereInput)
    where!: InstanceType<typeof ExitPageScalarWhereInput>;
    @Field(() => ExitPageUpdateManyMutationInput, {nullable:false})
    @Type(() => ExitPageUpdateManyMutationInput)
    data!: InstanceType<typeof ExitPageUpdateManyMutationInput>;
}

@InputType()
export class ExitPageUpdateManyWithWhereWithoutTagsInput {
    @Field(() => ExitPageScalarWhereInput, {nullable:false})
    @Type(() => ExitPageScalarWhereInput)
    where!: InstanceType<typeof ExitPageScalarWhereInput>;
    @Field(() => ExitPageUpdateManyMutationInput, {nullable:false})
    @Type(() => ExitPageUpdateManyMutationInput)
    data!: InstanceType<typeof ExitPageUpdateManyMutationInput>;
}

@InputType()
export class ExitPageUpdateManyWithWhereWithoutTemplateInput {
    @Field(() => ExitPageScalarWhereInput, {nullable:false})
    @Type(() => ExitPageScalarWhereInput)
    where!: InstanceType<typeof ExitPageScalarWhereInput>;
    @Field(() => ExitPageUpdateManyMutationInput, {nullable:false})
    @Type(() => ExitPageUpdateManyMutationInput)
    data!: InstanceType<typeof ExitPageUpdateManyMutationInput>;
}

@InputType()
export class ExitPageUpdateManyWithoutAuthorNestedInput {
    @Field(() => [ExitPageCreateWithoutAuthorInput], {nullable:true})
    @Type(() => ExitPageCreateWithoutAuthorInput)
    create?: Array<ExitPageCreateWithoutAuthorInput>;
    @Field(() => [ExitPageCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<ExitPageCreateOrConnectWithoutAuthorInput>;
    @Field(() => [ExitPageUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => ExitPageUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<ExitPageUpsertWithWhereUniqueWithoutAuthorInput>;
    @Field(() => ExitPageCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => ExitPageCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof ExitPageCreateManyAuthorInputEnvelope>;
    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [ExitPageUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => ExitPageUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<ExitPageUpdateWithWhereUniqueWithoutAuthorInput>;
    @Field(() => [ExitPageUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => ExitPageUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<ExitPageUpdateManyWithWhereWithoutAuthorInput>;
    @Field(() => [ExitPageScalarWhereInput], {nullable:true})
    @Type(() => ExitPageScalarWhereInput)
    deleteMany?: Array<ExitPageScalarWhereInput>;
}

@InputType()
export class ExitPageUpdateManyWithoutTagsNestedInput {
    @Field(() => [ExitPageCreateWithoutTagsInput], {nullable:true})
    @Type(() => ExitPageCreateWithoutTagsInput)
    create?: Array<ExitPageCreateWithoutTagsInput>;
    @Field(() => [ExitPageCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<ExitPageCreateOrConnectWithoutTagsInput>;
    @Field(() => [ExitPageUpsertWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => ExitPageUpsertWithWhereUniqueWithoutTagsInput)
    upsert?: Array<ExitPageUpsertWithWhereUniqueWithoutTagsInput>;
    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [ExitPageUpdateWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => ExitPageUpdateWithWhereUniqueWithoutTagsInput)
    update?: Array<ExitPageUpdateWithWhereUniqueWithoutTagsInput>;
    @Field(() => [ExitPageUpdateManyWithWhereWithoutTagsInput], {nullable:true})
    @Type(() => ExitPageUpdateManyWithWhereWithoutTagsInput)
    updateMany?: Array<ExitPageUpdateManyWithWhereWithoutTagsInput>;
    @Field(() => [ExitPageScalarWhereInput], {nullable:true})
    @Type(() => ExitPageScalarWhereInput)
    deleteMany?: Array<ExitPageScalarWhereInput>;
}

@InputType()
export class ExitPageUpdateManyWithoutTemplateNestedInput {
    @Field(() => [ExitPageCreateWithoutTemplateInput], {nullable:true})
    @Type(() => ExitPageCreateWithoutTemplateInput)
    create?: Array<ExitPageCreateWithoutTemplateInput>;
    @Field(() => [ExitPageCreateOrConnectWithoutTemplateInput], {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutTemplateInput)
    connectOrCreate?: Array<ExitPageCreateOrConnectWithoutTemplateInput>;
    @Field(() => [ExitPageUpsertWithWhereUniqueWithoutTemplateInput], {nullable:true})
    @Type(() => ExitPageUpsertWithWhereUniqueWithoutTemplateInput)
    upsert?: Array<ExitPageUpsertWithWhereUniqueWithoutTemplateInput>;
    @Field(() => ExitPageCreateManyTemplateInputEnvelope, {nullable:true})
    @Type(() => ExitPageCreateManyTemplateInputEnvelope)
    createMany?: InstanceType<typeof ExitPageCreateManyTemplateInputEnvelope>;
    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [ExitPageUpdateWithWhereUniqueWithoutTemplateInput], {nullable:true})
    @Type(() => ExitPageUpdateWithWhereUniqueWithoutTemplateInput)
    update?: Array<ExitPageUpdateWithWhereUniqueWithoutTemplateInput>;
    @Field(() => [ExitPageUpdateManyWithWhereWithoutTemplateInput], {nullable:true})
    @Type(() => ExitPageUpdateManyWithWhereWithoutTemplateInput)
    updateMany?: Array<ExitPageUpdateManyWithWhereWithoutTemplateInput>;
    @Field(() => [ExitPageScalarWhereInput], {nullable:true})
    @Type(() => ExitPageScalarWhereInput)
    deleteMany?: Array<ExitPageScalarWhereInput>;
}

@InputType()
export class ExitPageUpdateOneRequiredWithoutCommentsNestedInput {
    @Field(() => ExitPageCreateWithoutCommentsInput, {nullable:true})
    @Type(() => ExitPageCreateWithoutCommentsInput)
    create?: InstanceType<typeof ExitPageCreateWithoutCommentsInput>;
    @Field(() => ExitPageCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: InstanceType<typeof ExitPageCreateOrConnectWithoutCommentsInput>;
    @Field(() => ExitPageUpsertWithoutCommentsInput, {nullable:true})
    @Type(() => ExitPageUpsertWithoutCommentsInput)
    upsert?: InstanceType<typeof ExitPageUpsertWithoutCommentsInput>;
    @Field(() => ExitPageWhereUniqueInput, {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => ExitPageUpdateToOneWithWhereWithoutCommentsInput, {nullable:true})
    @Type(() => ExitPageUpdateToOneWithWhereWithoutCommentsInput)
    update?: InstanceType<typeof ExitPageUpdateToOneWithWhereWithoutCommentsInput>;
}

@InputType()
export class ExitPageUpdateOneRequiredWithoutReactionsNestedInput {
    @Field(() => ExitPageCreateWithoutReactionsInput, {nullable:true})
    @Type(() => ExitPageCreateWithoutReactionsInput)
    create?: InstanceType<typeof ExitPageCreateWithoutReactionsInput>;
    @Field(() => ExitPageCreateOrConnectWithoutReactionsInput, {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutReactionsInput)
    connectOrCreate?: InstanceType<typeof ExitPageCreateOrConnectWithoutReactionsInput>;
    @Field(() => ExitPageUpsertWithoutReactionsInput, {nullable:true})
    @Type(() => ExitPageUpsertWithoutReactionsInput)
    upsert?: InstanceType<typeof ExitPageUpsertWithoutReactionsInput>;
    @Field(() => ExitPageWhereUniqueInput, {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => ExitPageUpdateToOneWithWhereWithoutReactionsInput, {nullable:true})
    @Type(() => ExitPageUpdateToOneWithWhereWithoutReactionsInput)
    update?: InstanceType<typeof ExitPageUpdateToOneWithWhereWithoutReactionsInput>;
}

@InputType()
export class ExitPageUpdateOneRequiredWithoutSharesNestedInput {
    @Field(() => ExitPageCreateWithoutSharesInput, {nullable:true})
    @Type(() => ExitPageCreateWithoutSharesInput)
    create?: InstanceType<typeof ExitPageCreateWithoutSharesInput>;
    @Field(() => ExitPageCreateOrConnectWithoutSharesInput, {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutSharesInput)
    connectOrCreate?: InstanceType<typeof ExitPageCreateOrConnectWithoutSharesInput>;
    @Field(() => ExitPageUpsertWithoutSharesInput, {nullable:true})
    @Type(() => ExitPageUpsertWithoutSharesInput)
    upsert?: InstanceType<typeof ExitPageUpsertWithoutSharesInput>;
    @Field(() => ExitPageWhereUniqueInput, {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => ExitPageUpdateToOneWithWhereWithoutSharesInput, {nullable:true})
    @Type(() => ExitPageUpdateToOneWithWhereWithoutSharesInput)
    update?: InstanceType<typeof ExitPageUpdateToOneWithWhereWithoutSharesInput>;
}

@InputType()
export class ExitPageUpdateOneRequiredWithoutVersionsNestedInput {
    @Field(() => ExitPageCreateWithoutVersionsInput, {nullable:true})
    @Type(() => ExitPageCreateWithoutVersionsInput)
    create?: InstanceType<typeof ExitPageCreateWithoutVersionsInput>;
    @Field(() => ExitPageCreateOrConnectWithoutVersionsInput, {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutVersionsInput)
    connectOrCreate?: InstanceType<typeof ExitPageCreateOrConnectWithoutVersionsInput>;
    @Field(() => ExitPageUpsertWithoutVersionsInput, {nullable:true})
    @Type(() => ExitPageUpsertWithoutVersionsInput)
    upsert?: InstanceType<typeof ExitPageUpsertWithoutVersionsInput>;
    @Field(() => ExitPageWhereUniqueInput, {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => ExitPageUpdateToOneWithWhereWithoutVersionsInput, {nullable:true})
    @Type(() => ExitPageUpdateToOneWithWhereWithoutVersionsInput)
    update?: InstanceType<typeof ExitPageUpdateToOneWithWhereWithoutVersionsInput>;
}

@InputType()
export class ExitPageUpdateOneRequiredWithoutViewsNestedInput {
    @Field(() => ExitPageCreateWithoutViewsInput, {nullable:true})
    @Type(() => ExitPageCreateWithoutViewsInput)
    create?: InstanceType<typeof ExitPageCreateWithoutViewsInput>;
    @Field(() => ExitPageCreateOrConnectWithoutViewsInput, {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutViewsInput)
    connectOrCreate?: InstanceType<typeof ExitPageCreateOrConnectWithoutViewsInput>;
    @Field(() => ExitPageUpsertWithoutViewsInput, {nullable:true})
    @Type(() => ExitPageUpsertWithoutViewsInput)
    upsert?: InstanceType<typeof ExitPageUpsertWithoutViewsInput>;
    @Field(() => ExitPageWhereUniqueInput, {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => ExitPageUpdateToOneWithWhereWithoutViewsInput, {nullable:true})
    @Type(() => ExitPageUpdateToOneWithWhereWithoutViewsInput)
    update?: InstanceType<typeof ExitPageUpdateToOneWithWhereWithoutViewsInput>;
}

@InputType()
export class ExitPageUpdateOneRequiredWithoutVotesNestedInput {
    @Field(() => ExitPageCreateWithoutVotesInput, {nullable:true})
    @Type(() => ExitPageCreateWithoutVotesInput)
    create?: InstanceType<typeof ExitPageCreateWithoutVotesInput>;
    @Field(() => ExitPageCreateOrConnectWithoutVotesInput, {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutVotesInput)
    connectOrCreate?: InstanceType<typeof ExitPageCreateOrConnectWithoutVotesInput>;
    @Field(() => ExitPageUpsertWithoutVotesInput, {nullable:true})
    @Type(() => ExitPageUpsertWithoutVotesInput)
    upsert?: InstanceType<typeof ExitPageUpsertWithoutVotesInput>;
    @Field(() => ExitPageWhereUniqueInput, {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => ExitPageUpdateToOneWithWhereWithoutVotesInput, {nullable:true})
    @Type(() => ExitPageUpdateToOneWithWhereWithoutVotesInput)
    update?: InstanceType<typeof ExitPageUpdateToOneWithWhereWithoutVotesInput>;
}

@InputType()
export class ExitPageUpdateToOneWithWhereWithoutCommentsInput {
    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: InstanceType<typeof ExitPageWhereInput>;
    @Field(() => ExitPageUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutCommentsInput)
    data!: InstanceType<typeof ExitPageUpdateWithoutCommentsInput>;
}

@InputType()
export class ExitPageUpdateToOneWithWhereWithoutReactionsInput {
    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: InstanceType<typeof ExitPageWhereInput>;
    @Field(() => ExitPageUpdateWithoutReactionsInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutReactionsInput)
    data!: InstanceType<typeof ExitPageUpdateWithoutReactionsInput>;
}

@InputType()
export class ExitPageUpdateToOneWithWhereWithoutSharesInput {
    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: InstanceType<typeof ExitPageWhereInput>;
    @Field(() => ExitPageUpdateWithoutSharesInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutSharesInput)
    data!: InstanceType<typeof ExitPageUpdateWithoutSharesInput>;
}

@InputType()
export class ExitPageUpdateToOneWithWhereWithoutVersionsInput {
    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: InstanceType<typeof ExitPageWhereInput>;
    @Field(() => ExitPageUpdateWithoutVersionsInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutVersionsInput)
    data!: InstanceType<typeof ExitPageUpdateWithoutVersionsInput>;
}

@InputType()
export class ExitPageUpdateToOneWithWhereWithoutViewsInput {
    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: InstanceType<typeof ExitPageWhereInput>;
    @Field(() => ExitPageUpdateWithoutViewsInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutViewsInput)
    data!: InstanceType<typeof ExitPageUpdateWithoutViewsInput>;
}

@InputType()
export class ExitPageUpdateToOneWithWhereWithoutVotesInput {
    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: InstanceType<typeof ExitPageWhereInput>;
    @Field(() => ExitPageUpdateWithoutVotesInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutVotesInput)
    data!: InstanceType<typeof ExitPageUpdateWithoutVotesInput>;
}

@InputType()
export class ExitPageUpdateWithWhereUniqueWithoutAuthorInput {
    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => ExitPageUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutAuthorInput)
    data!: InstanceType<typeof ExitPageUpdateWithoutAuthorInput>;
}

@InputType()
export class ExitPageUpdateWithWhereUniqueWithoutTagsInput {
    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => ExitPageUpdateWithoutTagsInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutTagsInput)
    data!: InstanceType<typeof ExitPageUpdateWithoutTagsInput>;
}

@InputType()
export class ExitPageUpdateWithWhereUniqueWithoutTemplateInput {
    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => ExitPageUpdateWithoutTemplateInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutTemplateInput)
    data!: InstanceType<typeof ExitPageUpdateWithoutTemplateInput>;
}

@InputType()
export class ExitPageUpdateWithoutAuthorInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumToneFieldUpdateOperationsInput, {nullable:true})
    tone?: InstanceType<typeof EnumToneFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isHallOfFame?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => TemplateUpdateOneRequiredWithoutPagesNestedInput, {nullable:true})
    template?: InstanceType<typeof TemplateUpdateOneRequiredWithoutPagesNestedInput>;
    @Field(() => ReactionUpdateManyWithoutPageNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUpdateManyWithoutPageNestedInput>;
    @Field(() => VoteUpdateManyWithoutPageNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutPageNestedInput>;
    @Field(() => CommentUpdateManyWithoutPageNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutPageNestedInput>;
    @Field(() => PageViewUpdateManyWithoutPageNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUpdateManyWithoutPageNestedInput>;
    @Field(() => PageShareUpdateManyWithoutPageNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUpdateManyWithoutPageNestedInput>;
    @Field(() => PageVersionUpdateManyWithoutPageNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUpdateManyWithoutPageNestedInput>;
    @Field(() => TagUpdateManyWithoutExitPageNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUpdateManyWithoutExitPageNestedInput>;
}

@InputType()
export class ExitPageUpdateWithoutCommentsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumToneFieldUpdateOperationsInput, {nullable:true})
    tone?: InstanceType<typeof EnumToneFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isHallOfFame?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutPagesNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneWithoutPagesNestedInput>;
    @Field(() => TemplateUpdateOneRequiredWithoutPagesNestedInput, {nullable:true})
    template?: InstanceType<typeof TemplateUpdateOneRequiredWithoutPagesNestedInput>;
    @Field(() => ReactionUpdateManyWithoutPageNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUpdateManyWithoutPageNestedInput>;
    @Field(() => VoteUpdateManyWithoutPageNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutPageNestedInput>;
    @Field(() => PageViewUpdateManyWithoutPageNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUpdateManyWithoutPageNestedInput>;
    @Field(() => PageShareUpdateManyWithoutPageNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUpdateManyWithoutPageNestedInput>;
    @Field(() => PageVersionUpdateManyWithoutPageNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUpdateManyWithoutPageNestedInput>;
    @Field(() => TagUpdateManyWithoutExitPageNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUpdateManyWithoutExitPageNestedInput>;
}

@InputType()
export class ExitPageUpdateWithoutReactionsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumToneFieldUpdateOperationsInput, {nullable:true})
    tone?: InstanceType<typeof EnumToneFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isHallOfFame?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutPagesNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneWithoutPagesNestedInput>;
    @Field(() => TemplateUpdateOneRequiredWithoutPagesNestedInput, {nullable:true})
    template?: InstanceType<typeof TemplateUpdateOneRequiredWithoutPagesNestedInput>;
    @Field(() => VoteUpdateManyWithoutPageNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutPageNestedInput>;
    @Field(() => CommentUpdateManyWithoutPageNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutPageNestedInput>;
    @Field(() => PageViewUpdateManyWithoutPageNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUpdateManyWithoutPageNestedInput>;
    @Field(() => PageShareUpdateManyWithoutPageNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUpdateManyWithoutPageNestedInput>;
    @Field(() => PageVersionUpdateManyWithoutPageNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUpdateManyWithoutPageNestedInput>;
    @Field(() => TagUpdateManyWithoutExitPageNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUpdateManyWithoutExitPageNestedInput>;
}

@InputType()
export class ExitPageUpdateWithoutSharesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumToneFieldUpdateOperationsInput, {nullable:true})
    tone?: InstanceType<typeof EnumToneFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isHallOfFame?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutPagesNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneWithoutPagesNestedInput>;
    @Field(() => TemplateUpdateOneRequiredWithoutPagesNestedInput, {nullable:true})
    template?: InstanceType<typeof TemplateUpdateOneRequiredWithoutPagesNestedInput>;
    @Field(() => ReactionUpdateManyWithoutPageNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUpdateManyWithoutPageNestedInput>;
    @Field(() => VoteUpdateManyWithoutPageNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutPageNestedInput>;
    @Field(() => CommentUpdateManyWithoutPageNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutPageNestedInput>;
    @Field(() => PageViewUpdateManyWithoutPageNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUpdateManyWithoutPageNestedInput>;
    @Field(() => PageVersionUpdateManyWithoutPageNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUpdateManyWithoutPageNestedInput>;
    @Field(() => TagUpdateManyWithoutExitPageNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUpdateManyWithoutExitPageNestedInput>;
}

@InputType()
export class ExitPageUpdateWithoutTagsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumToneFieldUpdateOperationsInput, {nullable:true})
    tone?: InstanceType<typeof EnumToneFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isHallOfFame?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutPagesNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneWithoutPagesNestedInput>;
    @Field(() => TemplateUpdateOneRequiredWithoutPagesNestedInput, {nullable:true})
    template?: InstanceType<typeof TemplateUpdateOneRequiredWithoutPagesNestedInput>;
    @Field(() => ReactionUpdateManyWithoutPageNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUpdateManyWithoutPageNestedInput>;
    @Field(() => VoteUpdateManyWithoutPageNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutPageNestedInput>;
    @Field(() => CommentUpdateManyWithoutPageNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutPageNestedInput>;
    @Field(() => PageViewUpdateManyWithoutPageNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUpdateManyWithoutPageNestedInput>;
    @Field(() => PageShareUpdateManyWithoutPageNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUpdateManyWithoutPageNestedInput>;
    @Field(() => PageVersionUpdateManyWithoutPageNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUpdateManyWithoutPageNestedInput>;
}

@InputType()
export class ExitPageUpdateWithoutTemplateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumToneFieldUpdateOperationsInput, {nullable:true})
    tone?: InstanceType<typeof EnumToneFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isHallOfFame?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutPagesNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneWithoutPagesNestedInput>;
    @Field(() => ReactionUpdateManyWithoutPageNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUpdateManyWithoutPageNestedInput>;
    @Field(() => VoteUpdateManyWithoutPageNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutPageNestedInput>;
    @Field(() => CommentUpdateManyWithoutPageNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutPageNestedInput>;
    @Field(() => PageViewUpdateManyWithoutPageNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUpdateManyWithoutPageNestedInput>;
    @Field(() => PageShareUpdateManyWithoutPageNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUpdateManyWithoutPageNestedInput>;
    @Field(() => PageVersionUpdateManyWithoutPageNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUpdateManyWithoutPageNestedInput>;
    @Field(() => TagUpdateManyWithoutExitPageNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUpdateManyWithoutExitPageNestedInput>;
}

@InputType()
export class ExitPageUpdateWithoutVersionsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumToneFieldUpdateOperationsInput, {nullable:true})
    tone?: InstanceType<typeof EnumToneFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isHallOfFame?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutPagesNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneWithoutPagesNestedInput>;
    @Field(() => TemplateUpdateOneRequiredWithoutPagesNestedInput, {nullable:true})
    template?: InstanceType<typeof TemplateUpdateOneRequiredWithoutPagesNestedInput>;
    @Field(() => ReactionUpdateManyWithoutPageNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUpdateManyWithoutPageNestedInput>;
    @Field(() => VoteUpdateManyWithoutPageNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutPageNestedInput>;
    @Field(() => CommentUpdateManyWithoutPageNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutPageNestedInput>;
    @Field(() => PageViewUpdateManyWithoutPageNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUpdateManyWithoutPageNestedInput>;
    @Field(() => PageShareUpdateManyWithoutPageNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUpdateManyWithoutPageNestedInput>;
    @Field(() => TagUpdateManyWithoutExitPageNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUpdateManyWithoutExitPageNestedInput>;
}

@InputType()
export class ExitPageUpdateWithoutViewsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumToneFieldUpdateOperationsInput, {nullable:true})
    tone?: InstanceType<typeof EnumToneFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isHallOfFame?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutPagesNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneWithoutPagesNestedInput>;
    @Field(() => TemplateUpdateOneRequiredWithoutPagesNestedInput, {nullable:true})
    template?: InstanceType<typeof TemplateUpdateOneRequiredWithoutPagesNestedInput>;
    @Field(() => ReactionUpdateManyWithoutPageNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUpdateManyWithoutPageNestedInput>;
    @Field(() => VoteUpdateManyWithoutPageNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutPageNestedInput>;
    @Field(() => CommentUpdateManyWithoutPageNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutPageNestedInput>;
    @Field(() => PageShareUpdateManyWithoutPageNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUpdateManyWithoutPageNestedInput>;
    @Field(() => PageVersionUpdateManyWithoutPageNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUpdateManyWithoutPageNestedInput>;
    @Field(() => TagUpdateManyWithoutExitPageNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUpdateManyWithoutExitPageNestedInput>;
}

@InputType()
export class ExitPageUpdateWithoutVotesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumToneFieldUpdateOperationsInput, {nullable:true})
    tone?: InstanceType<typeof EnumToneFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isHallOfFame?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutPagesNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneWithoutPagesNestedInput>;
    @Field(() => TemplateUpdateOneRequiredWithoutPagesNestedInput, {nullable:true})
    template?: InstanceType<typeof TemplateUpdateOneRequiredWithoutPagesNestedInput>;
    @Field(() => ReactionUpdateManyWithoutPageNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUpdateManyWithoutPageNestedInput>;
    @Field(() => CommentUpdateManyWithoutPageNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutPageNestedInput>;
    @Field(() => PageViewUpdateManyWithoutPageNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUpdateManyWithoutPageNestedInput>;
    @Field(() => PageShareUpdateManyWithoutPageNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUpdateManyWithoutPageNestedInput>;
    @Field(() => PageVersionUpdateManyWithoutPageNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUpdateManyWithoutPageNestedInput>;
    @Field(() => TagUpdateManyWithoutExitPageNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUpdateManyWithoutExitPageNestedInput>;
}

@InputType()
export class ExitPageUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumToneFieldUpdateOperationsInput, {nullable:true})
    tone?: InstanceType<typeof EnumToneFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isHallOfFame?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutPagesNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneWithoutPagesNestedInput>;
    @Field(() => TemplateUpdateOneRequiredWithoutPagesNestedInput, {nullable:true})
    template?: InstanceType<typeof TemplateUpdateOneRequiredWithoutPagesNestedInput>;
    @Field(() => ReactionUpdateManyWithoutPageNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUpdateManyWithoutPageNestedInput>;
    @Field(() => VoteUpdateManyWithoutPageNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutPageNestedInput>;
    @Field(() => CommentUpdateManyWithoutPageNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutPageNestedInput>;
    @Field(() => PageViewUpdateManyWithoutPageNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUpdateManyWithoutPageNestedInput>;
    @Field(() => PageShareUpdateManyWithoutPageNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUpdateManyWithoutPageNestedInput>;
    @Field(() => PageVersionUpdateManyWithoutPageNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUpdateManyWithoutPageNestedInput>;
    @Field(() => TagUpdateManyWithoutExitPageNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUpdateManyWithoutExitPageNestedInput>;
}

@InputType()
export class ExitPageUpsertWithWhereUniqueWithoutAuthorInput {
    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => ExitPageUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutAuthorInput)
    update!: InstanceType<typeof ExitPageUpdateWithoutAuthorInput>;
    @Field(() => ExitPageCreateWithoutAuthorInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutAuthorInput)
    create!: InstanceType<typeof ExitPageCreateWithoutAuthorInput>;
}

@InputType()
export class ExitPageUpsertWithWhereUniqueWithoutTagsInput {
    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => ExitPageUpdateWithoutTagsInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutTagsInput)
    update!: InstanceType<typeof ExitPageUpdateWithoutTagsInput>;
    @Field(() => ExitPageCreateWithoutTagsInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutTagsInput)
    create!: InstanceType<typeof ExitPageCreateWithoutTagsInput>;
}

@InputType()
export class ExitPageUpsertWithWhereUniqueWithoutTemplateInput {
    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => ExitPageUpdateWithoutTemplateInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutTemplateInput)
    update!: InstanceType<typeof ExitPageUpdateWithoutTemplateInput>;
    @Field(() => ExitPageCreateWithoutTemplateInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutTemplateInput)
    create!: InstanceType<typeof ExitPageCreateWithoutTemplateInput>;
}

@InputType()
export class ExitPageUpsertWithoutCommentsInput {
    @Field(() => ExitPageUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutCommentsInput)
    update!: InstanceType<typeof ExitPageUpdateWithoutCommentsInput>;
    @Field(() => ExitPageCreateWithoutCommentsInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutCommentsInput)
    create!: InstanceType<typeof ExitPageCreateWithoutCommentsInput>;
    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: InstanceType<typeof ExitPageWhereInput>;
}

@InputType()
export class ExitPageUpsertWithoutReactionsInput {
    @Field(() => ExitPageUpdateWithoutReactionsInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutReactionsInput)
    update!: InstanceType<typeof ExitPageUpdateWithoutReactionsInput>;
    @Field(() => ExitPageCreateWithoutReactionsInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutReactionsInput)
    create!: InstanceType<typeof ExitPageCreateWithoutReactionsInput>;
    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: InstanceType<typeof ExitPageWhereInput>;
}

@InputType()
export class ExitPageUpsertWithoutSharesInput {
    @Field(() => ExitPageUpdateWithoutSharesInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutSharesInput)
    update!: InstanceType<typeof ExitPageUpdateWithoutSharesInput>;
    @Field(() => ExitPageCreateWithoutSharesInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutSharesInput)
    create!: InstanceType<typeof ExitPageCreateWithoutSharesInput>;
    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: InstanceType<typeof ExitPageWhereInput>;
}

@InputType()
export class ExitPageUpsertWithoutVersionsInput {
    @Field(() => ExitPageUpdateWithoutVersionsInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutVersionsInput)
    update!: InstanceType<typeof ExitPageUpdateWithoutVersionsInput>;
    @Field(() => ExitPageCreateWithoutVersionsInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutVersionsInput)
    create!: InstanceType<typeof ExitPageCreateWithoutVersionsInput>;
    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: InstanceType<typeof ExitPageWhereInput>;
}

@InputType()
export class ExitPageUpsertWithoutViewsInput {
    @Field(() => ExitPageUpdateWithoutViewsInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutViewsInput)
    update!: InstanceType<typeof ExitPageUpdateWithoutViewsInput>;
    @Field(() => ExitPageCreateWithoutViewsInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutViewsInput)
    create!: InstanceType<typeof ExitPageCreateWithoutViewsInput>;
    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: InstanceType<typeof ExitPageWhereInput>;
}

@InputType()
export class ExitPageUpsertWithoutVotesInput {
    @Field(() => ExitPageUpdateWithoutVotesInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutVotesInput)
    update!: InstanceType<typeof ExitPageUpdateWithoutVotesInput>;
    @Field(() => ExitPageCreateWithoutVotesInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutVotesInput)
    create!: InstanceType<typeof ExitPageCreateWithoutVotesInput>;
    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: InstanceType<typeof ExitPageWhereInput>;
}

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
    authorId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => EnumToneFilter, {nullable:true})
    tone?: InstanceType<typeof EnumToneFilter>;
    @Field(() => StringFilter, {nullable:true})
    templateId?: InstanceType<typeof StringFilter>;
    @Field(() => JsonFilter, {nullable:true})
    @Type(() => JsonFilter)
    data?: InstanceType<typeof JsonFilter>;
    @Field(() => BoolFilter, {nullable:true})
    isHallOfFame?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    author?: InstanceType<typeof UserNullableScalarRelationFilter>;
    @Field(() => TemplateScalarRelationFilter, {nullable:true})
    template?: InstanceType<typeof TemplateScalarRelationFilter>;
    @Field(() => ReactionListRelationFilter, {nullable:true})
    reactions?: InstanceType<typeof ReactionListRelationFilter>;
    @Field(() => VoteListRelationFilter, {nullable:true})
    votes?: InstanceType<typeof VoteListRelationFilter>;
    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: InstanceType<typeof CommentListRelationFilter>;
    @Field(() => PageViewListRelationFilter, {nullable:true})
    views?: InstanceType<typeof PageViewListRelationFilter>;
    @Field(() => PageShareListRelationFilter, {nullable:true})
    shares?: InstanceType<typeof PageShareListRelationFilter>;
    @Field(() => PageVersionListRelationFilter, {nullable:true})
    versions?: InstanceType<typeof PageVersionListRelationFilter>;
    @Field(() => TagListRelationFilter, {nullable:true})
    tags?: InstanceType<typeof TagListRelationFilter>;
}

@InputType()
export class ExitPageWhereInput {
    @Field(() => [ExitPageWhereInput], {nullable:true})
    AND?: Array<ExitPageWhereInput>;
    @Field(() => [ExitPageWhereInput], {nullable:true})
    OR?: Array<ExitPageWhereInput>;
    @Field(() => [ExitPageWhereInput], {nullable:true})
    NOT?: Array<ExitPageWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    authorId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => EnumToneFilter, {nullable:true})
    tone?: InstanceType<typeof EnumToneFilter>;
    @Field(() => StringFilter, {nullable:true})
    templateId?: InstanceType<typeof StringFilter>;
    @Field(() => JsonFilter, {nullable:true})
    @Type(() => JsonFilter)
    data?: InstanceType<typeof JsonFilter>;
    @Field(() => StringFilter, {nullable:true})
    slug?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    isHallOfFame?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    author?: InstanceType<typeof UserNullableScalarRelationFilter>;
    @Field(() => TemplateScalarRelationFilter, {nullable:true})
    template?: InstanceType<typeof TemplateScalarRelationFilter>;
    @Field(() => ReactionListRelationFilter, {nullable:true})
    reactions?: InstanceType<typeof ReactionListRelationFilter>;
    @Field(() => VoteListRelationFilter, {nullable:true})
    votes?: InstanceType<typeof VoteListRelationFilter>;
    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: InstanceType<typeof CommentListRelationFilter>;
    @Field(() => PageViewListRelationFilter, {nullable:true})
    views?: InstanceType<typeof PageViewListRelationFilter>;
    @Field(() => PageShareListRelationFilter, {nullable:true})
    shares?: InstanceType<typeof PageShareListRelationFilter>;
    @Field(() => PageVersionListRelationFilter, {nullable:true})
    versions?: InstanceType<typeof PageVersionListRelationFilter>;
    @Field(() => TagListRelationFilter, {nullable:true})
    tags?: InstanceType<typeof TagListRelationFilter>;
}

@ObjectType()
export class ExitPage {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    authorId!: string | null;
    @Field(() => Tone, {nullable:false})
    tone!: `${Tone}`;
    @Field(() => String, {nullable:false})
    templateId!: string;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Boolean, {defaultValue:false,nullable:false})
    isHallOfFame!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => User, {nullable:true})
    author?: InstanceType<typeof User> | null;
    @Field(() => Template, {nullable:false})
    template?: InstanceType<typeof Template>;
    @Field(() => [Reaction], {nullable:true})
    reactions?: Array<Reaction>;
    @Field(() => [Vote], {nullable:true})
    votes?: Array<Vote>;
    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;
    @Field(() => [PageView], {nullable:true})
    views?: Array<PageView>;
    @Field(() => [PageShare], {nullable:true})
    shares?: Array<PageShare>;
    @Field(() => [PageVersion], {nullable:true})
    versions?: Array<PageVersion>;
    @Field(() => [Tag], {nullable:true})
    tags?: Array<Tag>;
    @Field(() => ExitPageCount, {nullable:false})
    _count?: InstanceType<typeof ExitPageCount>;
}

@ArgsType()
export class FindFirstExitPageOrThrowArgs {
    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: InstanceType<typeof ExitPageWhereInput>;
    @Field(() => [ExitPageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ExitPageOrderByWithRelationInput>;
    @Field(() => ExitPageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ExitPageScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ExitPageScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstExitPageArgs {
    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: InstanceType<typeof ExitPageWhereInput>;
    @Field(() => [ExitPageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ExitPageOrderByWithRelationInput>;
    @Field(() => ExitPageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ExitPageScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ExitPageScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyExitPageArgs {
    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: InstanceType<typeof ExitPageWhereInput>;
    @Field(() => [ExitPageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ExitPageOrderByWithRelationInput>;
    @Field(() => ExitPageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ExitPageScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ExitPageScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueExitPageOrThrowArgs {
    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
}

@ArgsType()
export class FindUniqueExitPageArgs {
    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
}

@ArgsType()
export class UpdateManyExitPageArgs {
    @Field(() => ExitPageUpdateManyMutationInput, {nullable:false})
    @Type(() => ExitPageUpdateManyMutationInput)
    data!: InstanceType<typeof ExitPageUpdateManyMutationInput>;
    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: InstanceType<typeof ExitPageWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneExitPageArgs {
    @Field(() => ExitPageUpdateInput, {nullable:false})
    @Type(() => ExitPageUpdateInput)
    data!: InstanceType<typeof ExitPageUpdateInput>;
    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
}

@ArgsType()
export class UpsertOneExitPageArgs {
    @Field(() => ExitPageWhereUniqueInput, {nullable:false})
    @Type(() => ExitPageWhereUniqueInput)
    where!: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => ExitPageCreateInput, {nullable:false})
    @Type(() => ExitPageCreateInput)
    create!: InstanceType<typeof ExitPageCreateInput>;
    @Field(() => ExitPageUpdateInput, {nullable:false})
    @Type(() => ExitPageUpdateInput)
    update!: InstanceType<typeof ExitPageUpdateInput>;
}

@ObjectType()
export class AggregatePageShare {
    @Field(() => PageShareCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PageShareCountAggregate>;
    @Field(() => PageShareMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PageShareMinAggregate>;
    @Field(() => PageShareMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PageShareMaxAggregate>;
}

@ArgsType()
export class CreateManyPageShareArgs {
    @Field(() => [PageShareCreateManyInput], {nullable:false})
    @Type(() => PageShareCreateManyInput)
    data!: Array<PageShareCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOnePageShareArgs {
    @Field(() => PageShareCreateInput, {nullable:false})
    @Type(() => PageShareCreateInput)
    data!: InstanceType<typeof PageShareCreateInput>;
}

@ArgsType()
export class DeleteManyPageShareArgs {
    @Field(() => PageShareWhereInput, {nullable:true})
    @Type(() => PageShareWhereInput)
    where?: InstanceType<typeof PageShareWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOnePageShareArgs {
    @Field(() => PageShareWhereUniqueInput, {nullable:false})
    @Type(() => PageShareWhereUniqueInput)
    where!: Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstPageShareOrThrowArgs {
    @Field(() => PageShareWhereInput, {nullable:true})
    @Type(() => PageShareWhereInput)
    where?: InstanceType<typeof PageShareWhereInput>;
    @Field(() => [PageShareOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PageShareOrderByWithRelationInput>;
    @Field(() => PageShareWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PageShareScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PageShareScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstPageShareArgs {
    @Field(() => PageShareWhereInput, {nullable:true})
    @Type(() => PageShareWhereInput)
    where?: InstanceType<typeof PageShareWhereInput>;
    @Field(() => [PageShareOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PageShareOrderByWithRelationInput>;
    @Field(() => PageShareWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PageShareScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PageShareScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyPageShareArgs {
    @Field(() => PageShareWhereInput, {nullable:true})
    @Type(() => PageShareWhereInput)
    where?: InstanceType<typeof PageShareWhereInput>;
    @Field(() => [PageShareOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PageShareOrderByWithRelationInput>;
    @Field(() => PageShareWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PageShareScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PageShareScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniquePageShareOrThrowArgs {
    @Field(() => PageShareWhereUniqueInput, {nullable:false})
    @Type(() => PageShareWhereUniqueInput)
    where!: Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniquePageShareArgs {
    @Field(() => PageShareWhereUniqueInput, {nullable:false})
    @Type(() => PageShareWhereUniqueInput)
    where!: Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>;
}

@ArgsType()
export class PageShareAggregateArgs {
    @Field(() => PageShareWhereInput, {nullable:true})
    @Type(() => PageShareWhereInput)
    where?: InstanceType<typeof PageShareWhereInput>;
    @Field(() => [PageShareOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PageShareOrderByWithRelationInput>;
    @Field(() => PageShareWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PageShareCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PageShareCountAggregateInput>;
    @Field(() => PageShareMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PageShareMinAggregateInput>;
    @Field(() => PageShareMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PageShareMaxAggregateInput>;
}

@InputType()
export class PageShareCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    pageId?: true;
    @Field(() => Boolean, {nullable:true})
    platform?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class PageShareCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    pageId!: number;
    @Field(() => Int, {nullable:false})
    platform!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class PageShareCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    platform?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class PageShareCreateManyPageInputEnvelope {
    @Field(() => [PageShareCreateManyPageInput], {nullable:false})
    @Type(() => PageShareCreateManyPageInput)
    data!: Array<PageShareCreateManyPageInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class PageShareCreateManyPageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    platform!: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class PageShareCreateManyUserInputEnvelope {
    @Field(() => [PageShareCreateManyUserInput], {nullable:false})
    @Type(() => PageShareCreateManyUserInput)
    data!: Array<PageShareCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class PageShareCreateManyUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => String, {nullable:false})
    platform!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class PageShareCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => String, {nullable:false})
    platform!: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class PageShareCreateNestedManyWithoutPageInput {
    @Field(() => [PageShareCreateWithoutPageInput], {nullable:true})
    @Type(() => PageShareCreateWithoutPageInput)
    create?: Array<PageShareCreateWithoutPageInput>;
    @Field(() => [PageShareCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => PageShareCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<PageShareCreateOrConnectWithoutPageInput>;
    @Field(() => PageShareCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => PageShareCreateManyPageInputEnvelope)
    createMany?: InstanceType<typeof PageShareCreateManyPageInputEnvelope>;
    @Field(() => [PageShareWhereUniqueInput], {nullable:true})
    @Type(() => PageShareWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>>;
}

@InputType()
export class PageShareCreateNestedManyWithoutUserInput {
    @Field(() => [PageShareCreateWithoutUserInput], {nullable:true})
    @Type(() => PageShareCreateWithoutUserInput)
    create?: Array<PageShareCreateWithoutUserInput>;
    @Field(() => [PageShareCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PageShareCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PageShareCreateOrConnectWithoutUserInput>;
    @Field(() => PageShareCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PageShareCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof PageShareCreateManyUserInputEnvelope>;
    @Field(() => [PageShareWhereUniqueInput], {nullable:true})
    @Type(() => PageShareWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>>;
}

@InputType()
export class PageShareCreateOrConnectWithoutPageInput {
    @Field(() => PageShareWhereUniqueInput, {nullable:false})
    @Type(() => PageShareWhereUniqueInput)
    where!: Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>;
    @Field(() => PageShareCreateWithoutPageInput, {nullable:false})
    @Type(() => PageShareCreateWithoutPageInput)
    create!: InstanceType<typeof PageShareCreateWithoutPageInput>;
}

@InputType()
export class PageShareCreateOrConnectWithoutUserInput {
    @Field(() => PageShareWhereUniqueInput, {nullable:false})
    @Type(() => PageShareWhereUniqueInput)
    where!: Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>;
    @Field(() => PageShareCreateWithoutUserInput, {nullable:false})
    @Type(() => PageShareCreateWithoutUserInput)
    create!: InstanceType<typeof PageShareCreateWithoutUserInput>;
}

@InputType()
export class PageShareCreateWithoutPageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    platform!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutSharesInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutSharesInput>;
}

@InputType()
export class PageShareCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    platform!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => ExitPageCreateNestedOneWithoutSharesInput, {nullable:false})
    page!: InstanceType<typeof ExitPageCreateNestedOneWithoutSharesInput>;
}

@InputType()
export class PageShareCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    platform!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => ExitPageCreateNestedOneWithoutSharesInput, {nullable:false})
    page!: InstanceType<typeof ExitPageCreateNestedOneWithoutSharesInput>;
    @Field(() => UserCreateNestedOneWithoutSharesInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutSharesInput>;
}

@ArgsType()
export class PageShareGroupByArgs {
    @Field(() => PageShareWhereInput, {nullable:true})
    @Type(() => PageShareWhereInput)
    where?: InstanceType<typeof PageShareWhereInput>;
    @Field(() => [PageShareOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PageShareOrderByWithAggregationInput>;
    @Field(() => [PageShareScalarFieldEnum], {nullable:false})
    by!: Array<`${PageShareScalarFieldEnum}`>;
    @Field(() => PageShareScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof PageShareScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PageShareCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PageShareCountAggregateInput>;
    @Field(() => PageShareMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PageShareMinAggregateInput>;
    @Field(() => PageShareMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PageShareMaxAggregateInput>;
}

@ObjectType()
export class PageShareGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => String, {nullable:false})
    platform!: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => PageShareCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PageShareCountAggregate>;
    @Field(() => PageShareMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PageShareMinAggregate>;
    @Field(() => PageShareMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PageShareMaxAggregate>;
}

@InputType()
export class PageShareListRelationFilter {
    @Field(() => PageShareWhereInput, {nullable:true})
    every?: InstanceType<typeof PageShareWhereInput>;
    @Field(() => PageShareWhereInput, {nullable:true})
    some?: InstanceType<typeof PageShareWhereInput>;
    @Field(() => PageShareWhereInput, {nullable:true})
    none?: InstanceType<typeof PageShareWhereInput>;
}

@InputType()
export class PageShareMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    pageId?: true;
    @Field(() => Boolean, {nullable:true})
    platform?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class PageShareMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    pageId?: string;
    @Field(() => String, {nullable:true})
    platform?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class PageShareMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    platform?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class PageShareMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    pageId?: true;
    @Field(() => Boolean, {nullable:true})
    platform?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class PageShareMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    pageId?: string;
    @Field(() => String, {nullable:true})
    platform?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class PageShareMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    platform?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class PageShareOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class PageShareOrderByRelevanceInput {
    @Field(() => [PageShareOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${PageShareOrderByRelevanceFieldEnum}`>;
    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;
    @Field(() => String, {nullable:false})
    search!: string;
}

@InputType()
export class PageShareOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    platform?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    userId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => PageShareCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PageShareCountOrderByAggregateInput>;
    @Field(() => PageShareMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PageShareMaxOrderByAggregateInput>;
    @Field(() => PageShareMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PageShareMinOrderByAggregateInput>;
}

@InputType()
export class PageShareOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    platform?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    userId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => ExitPageOrderByWithRelationInput, {nullable:true})
    page?: InstanceType<typeof ExitPageOrderByWithRelationInput>;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => PageShareOrderByRelevanceInput, {nullable:true})
    _relevance?: InstanceType<typeof PageShareOrderByRelevanceInput>;
}

@InputType()
export class PageShareScalarWhereWithAggregatesInput {
    @Field(() => [PageShareScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PageShareScalarWhereWithAggregatesInput>;
    @Field(() => [PageShareScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PageShareScalarWhereWithAggregatesInput>;
    @Field(() => [PageShareScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PageShareScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    pageId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    platform?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class PageShareScalarWhereInput {
    @Field(() => [PageShareScalarWhereInput], {nullable:true})
    AND?: Array<PageShareScalarWhereInput>;
    @Field(() => [PageShareScalarWhereInput], {nullable:true})
    OR?: Array<PageShareScalarWhereInput>;
    @Field(() => [PageShareScalarWhereInput], {nullable:true})
    NOT?: Array<PageShareScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    pageId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    platform?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    userId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class PageShareUncheckedCreateNestedManyWithoutPageInput {
    @Field(() => [PageShareCreateWithoutPageInput], {nullable:true})
    @Type(() => PageShareCreateWithoutPageInput)
    create?: Array<PageShareCreateWithoutPageInput>;
    @Field(() => [PageShareCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => PageShareCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<PageShareCreateOrConnectWithoutPageInput>;
    @Field(() => PageShareCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => PageShareCreateManyPageInputEnvelope)
    createMany?: InstanceType<typeof PageShareCreateManyPageInputEnvelope>;
    @Field(() => [PageShareWhereUniqueInput], {nullable:true})
    @Type(() => PageShareWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>>;
}

@InputType()
export class PageShareUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [PageShareCreateWithoutUserInput], {nullable:true})
    @Type(() => PageShareCreateWithoutUserInput)
    create?: Array<PageShareCreateWithoutUserInput>;
    @Field(() => [PageShareCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PageShareCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PageShareCreateOrConnectWithoutUserInput>;
    @Field(() => PageShareCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PageShareCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof PageShareCreateManyUserInputEnvelope>;
    @Field(() => [PageShareWhereUniqueInput], {nullable:true})
    @Type(() => PageShareWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>>;
}

@InputType()
export class PageShareUncheckedCreateWithoutPageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    platform!: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class PageShareUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => String, {nullable:false})
    platform!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class PageShareUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => String, {nullable:false})
    platform!: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class PageShareUncheckedUpdateManyWithoutPageNestedInput {
    @Field(() => [PageShareCreateWithoutPageInput], {nullable:true})
    @Type(() => PageShareCreateWithoutPageInput)
    create?: Array<PageShareCreateWithoutPageInput>;
    @Field(() => [PageShareCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => PageShareCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<PageShareCreateOrConnectWithoutPageInput>;
    @Field(() => [PageShareUpsertWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => PageShareUpsertWithWhereUniqueWithoutPageInput)
    upsert?: Array<PageShareUpsertWithWhereUniqueWithoutPageInput>;
    @Field(() => PageShareCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => PageShareCreateManyPageInputEnvelope)
    createMany?: InstanceType<typeof PageShareCreateManyPageInputEnvelope>;
    @Field(() => [PageShareWhereUniqueInput], {nullable:true})
    @Type(() => PageShareWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>>;
    @Field(() => [PageShareWhereUniqueInput], {nullable:true})
    @Type(() => PageShareWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>>;
    @Field(() => [PageShareWhereUniqueInput], {nullable:true})
    @Type(() => PageShareWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>>;
    @Field(() => [PageShareWhereUniqueInput], {nullable:true})
    @Type(() => PageShareWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>>;
    @Field(() => [PageShareUpdateWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => PageShareUpdateWithWhereUniqueWithoutPageInput)
    update?: Array<PageShareUpdateWithWhereUniqueWithoutPageInput>;
    @Field(() => [PageShareUpdateManyWithWhereWithoutPageInput], {nullable:true})
    @Type(() => PageShareUpdateManyWithWhereWithoutPageInput)
    updateMany?: Array<PageShareUpdateManyWithWhereWithoutPageInput>;
    @Field(() => [PageShareScalarWhereInput], {nullable:true})
    @Type(() => PageShareScalarWhereInput)
    deleteMany?: Array<PageShareScalarWhereInput>;
}

@InputType()
export class PageShareUncheckedUpdateManyWithoutPageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    platform?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PageShareUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [PageShareCreateWithoutUserInput], {nullable:true})
    @Type(() => PageShareCreateWithoutUserInput)
    create?: Array<PageShareCreateWithoutUserInput>;
    @Field(() => [PageShareCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PageShareCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PageShareCreateOrConnectWithoutUserInput>;
    @Field(() => [PageShareUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PageShareUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<PageShareUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => PageShareCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PageShareCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof PageShareCreateManyUserInputEnvelope>;
    @Field(() => [PageShareWhereUniqueInput], {nullable:true})
    @Type(() => PageShareWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>>;
    @Field(() => [PageShareWhereUniqueInput], {nullable:true})
    @Type(() => PageShareWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>>;
    @Field(() => [PageShareWhereUniqueInput], {nullable:true})
    @Type(() => PageShareWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>>;
    @Field(() => [PageShareWhereUniqueInput], {nullable:true})
    @Type(() => PageShareWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>>;
    @Field(() => [PageShareUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PageShareUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<PageShareUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [PageShareUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => PageShareUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<PageShareUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [PageShareScalarWhereInput], {nullable:true})
    @Type(() => PageShareScalarWhereInput)
    deleteMany?: Array<PageShareScalarWhereInput>;
}

@InputType()
export class PageShareUncheckedUpdateManyWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    platform?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PageShareUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    platform?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PageShareUncheckedUpdateWithoutPageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    platform?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PageShareUncheckedUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    platform?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PageShareUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    platform?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PageShareUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    platform?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PageShareUpdateManyWithWhereWithoutPageInput {
    @Field(() => PageShareScalarWhereInput, {nullable:false})
    @Type(() => PageShareScalarWhereInput)
    where!: InstanceType<typeof PageShareScalarWhereInput>;
    @Field(() => PageShareUpdateManyMutationInput, {nullable:false})
    @Type(() => PageShareUpdateManyMutationInput)
    data!: InstanceType<typeof PageShareUpdateManyMutationInput>;
}

@InputType()
export class PageShareUpdateManyWithWhereWithoutUserInput {
    @Field(() => PageShareScalarWhereInput, {nullable:false})
    @Type(() => PageShareScalarWhereInput)
    where!: InstanceType<typeof PageShareScalarWhereInput>;
    @Field(() => PageShareUpdateManyMutationInput, {nullable:false})
    @Type(() => PageShareUpdateManyMutationInput)
    data!: InstanceType<typeof PageShareUpdateManyMutationInput>;
}

@InputType()
export class PageShareUpdateManyWithoutPageNestedInput {
    @Field(() => [PageShareCreateWithoutPageInput], {nullable:true})
    @Type(() => PageShareCreateWithoutPageInput)
    create?: Array<PageShareCreateWithoutPageInput>;
    @Field(() => [PageShareCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => PageShareCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<PageShareCreateOrConnectWithoutPageInput>;
    @Field(() => [PageShareUpsertWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => PageShareUpsertWithWhereUniqueWithoutPageInput)
    upsert?: Array<PageShareUpsertWithWhereUniqueWithoutPageInput>;
    @Field(() => PageShareCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => PageShareCreateManyPageInputEnvelope)
    createMany?: InstanceType<typeof PageShareCreateManyPageInputEnvelope>;
    @Field(() => [PageShareWhereUniqueInput], {nullable:true})
    @Type(() => PageShareWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>>;
    @Field(() => [PageShareWhereUniqueInput], {nullable:true})
    @Type(() => PageShareWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>>;
    @Field(() => [PageShareWhereUniqueInput], {nullable:true})
    @Type(() => PageShareWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>>;
    @Field(() => [PageShareWhereUniqueInput], {nullable:true})
    @Type(() => PageShareWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>>;
    @Field(() => [PageShareUpdateWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => PageShareUpdateWithWhereUniqueWithoutPageInput)
    update?: Array<PageShareUpdateWithWhereUniqueWithoutPageInput>;
    @Field(() => [PageShareUpdateManyWithWhereWithoutPageInput], {nullable:true})
    @Type(() => PageShareUpdateManyWithWhereWithoutPageInput)
    updateMany?: Array<PageShareUpdateManyWithWhereWithoutPageInput>;
    @Field(() => [PageShareScalarWhereInput], {nullable:true})
    @Type(() => PageShareScalarWhereInput)
    deleteMany?: Array<PageShareScalarWhereInput>;
}

@InputType()
export class PageShareUpdateManyWithoutUserNestedInput {
    @Field(() => [PageShareCreateWithoutUserInput], {nullable:true})
    @Type(() => PageShareCreateWithoutUserInput)
    create?: Array<PageShareCreateWithoutUserInput>;
    @Field(() => [PageShareCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PageShareCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PageShareCreateOrConnectWithoutUserInput>;
    @Field(() => [PageShareUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PageShareUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<PageShareUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => PageShareCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PageShareCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof PageShareCreateManyUserInputEnvelope>;
    @Field(() => [PageShareWhereUniqueInput], {nullable:true})
    @Type(() => PageShareWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>>;
    @Field(() => [PageShareWhereUniqueInput], {nullable:true})
    @Type(() => PageShareWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>>;
    @Field(() => [PageShareWhereUniqueInput], {nullable:true})
    @Type(() => PageShareWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>>;
    @Field(() => [PageShareWhereUniqueInput], {nullable:true})
    @Type(() => PageShareWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>>;
    @Field(() => [PageShareUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PageShareUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<PageShareUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [PageShareUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => PageShareUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<PageShareUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [PageShareScalarWhereInput], {nullable:true})
    @Type(() => PageShareScalarWhereInput)
    deleteMany?: Array<PageShareScalarWhereInput>;
}

@InputType()
export class PageShareUpdateWithWhereUniqueWithoutPageInput {
    @Field(() => PageShareWhereUniqueInput, {nullable:false})
    @Type(() => PageShareWhereUniqueInput)
    where!: Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>;
    @Field(() => PageShareUpdateWithoutPageInput, {nullable:false})
    @Type(() => PageShareUpdateWithoutPageInput)
    data!: InstanceType<typeof PageShareUpdateWithoutPageInput>;
}

@InputType()
export class PageShareUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => PageShareWhereUniqueInput, {nullable:false})
    @Type(() => PageShareWhereUniqueInput)
    where!: Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>;
    @Field(() => PageShareUpdateWithoutUserInput, {nullable:false})
    @Type(() => PageShareUpdateWithoutUserInput)
    data!: InstanceType<typeof PageShareUpdateWithoutUserInput>;
}

@InputType()
export class PageShareUpdateWithoutPageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    platform?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutSharesNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutSharesNestedInput>;
}

@InputType()
export class PageShareUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    platform?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ExitPageUpdateOneRequiredWithoutSharesNestedInput, {nullable:true})
    page?: InstanceType<typeof ExitPageUpdateOneRequiredWithoutSharesNestedInput>;
}

@InputType()
export class PageShareUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    platform?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ExitPageUpdateOneRequiredWithoutSharesNestedInput, {nullable:true})
    page?: InstanceType<typeof ExitPageUpdateOneRequiredWithoutSharesNestedInput>;
    @Field(() => UserUpdateOneWithoutSharesNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutSharesNestedInput>;
}

@InputType()
export class PageShareUpsertWithWhereUniqueWithoutPageInput {
    @Field(() => PageShareWhereUniqueInput, {nullable:false})
    @Type(() => PageShareWhereUniqueInput)
    where!: Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>;
    @Field(() => PageShareUpdateWithoutPageInput, {nullable:false})
    @Type(() => PageShareUpdateWithoutPageInput)
    update!: InstanceType<typeof PageShareUpdateWithoutPageInput>;
    @Field(() => PageShareCreateWithoutPageInput, {nullable:false})
    @Type(() => PageShareCreateWithoutPageInput)
    create!: InstanceType<typeof PageShareCreateWithoutPageInput>;
}

@InputType()
export class PageShareUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => PageShareWhereUniqueInput, {nullable:false})
    @Type(() => PageShareWhereUniqueInput)
    where!: Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>;
    @Field(() => PageShareUpdateWithoutUserInput, {nullable:false})
    @Type(() => PageShareUpdateWithoutUserInput)
    update!: InstanceType<typeof PageShareUpdateWithoutUserInput>;
    @Field(() => PageShareCreateWithoutUserInput, {nullable:false})
    @Type(() => PageShareCreateWithoutUserInput)
    create!: InstanceType<typeof PageShareCreateWithoutUserInput>;
}

@InputType()
export class PageShareWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [PageShareWhereInput], {nullable:true})
    AND?: Array<PageShareWhereInput>;
    @Field(() => [PageShareWhereInput], {nullable:true})
    OR?: Array<PageShareWhereInput>;
    @Field(() => [PageShareWhereInput], {nullable:true})
    NOT?: Array<PageShareWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    pageId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    platform?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    userId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => ExitPageScalarRelationFilter, {nullable:true})
    page?: InstanceType<typeof ExitPageScalarRelationFilter>;
    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserNullableScalarRelationFilter>;
}

@InputType()
export class PageShareWhereInput {
    @Field(() => [PageShareWhereInput], {nullable:true})
    AND?: Array<PageShareWhereInput>;
    @Field(() => [PageShareWhereInput], {nullable:true})
    OR?: Array<PageShareWhereInput>;
    @Field(() => [PageShareWhereInput], {nullable:true})
    NOT?: Array<PageShareWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    pageId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    platform?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    userId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => ExitPageScalarRelationFilter, {nullable:true})
    page?: InstanceType<typeof ExitPageScalarRelationFilter>;
    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserNullableScalarRelationFilter>;
}

@ObjectType()
export class PageShare {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => String, {nullable:false})
    platform!: string;
    @Field(() => String, {nullable:true})
    userId!: string | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => ExitPage, {nullable:false})
    page?: InstanceType<typeof ExitPage>;
    @Field(() => User, {nullable:true})
    user?: InstanceType<typeof User> | null;
}

@ArgsType()
export class UpdateManyPageShareArgs {
    @Field(() => PageShareUpdateManyMutationInput, {nullable:false})
    @Type(() => PageShareUpdateManyMutationInput)
    data!: InstanceType<typeof PageShareUpdateManyMutationInput>;
    @Field(() => PageShareWhereInput, {nullable:true})
    @Type(() => PageShareWhereInput)
    where?: InstanceType<typeof PageShareWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOnePageShareArgs {
    @Field(() => PageShareUpdateInput, {nullable:false})
    @Type(() => PageShareUpdateInput)
    data!: InstanceType<typeof PageShareUpdateInput>;
    @Field(() => PageShareWhereUniqueInput, {nullable:false})
    @Type(() => PageShareWhereUniqueInput)
    where!: Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOnePageShareArgs {
    @Field(() => PageShareWhereUniqueInput, {nullable:false})
    @Type(() => PageShareWhereUniqueInput)
    where!: Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>;
    @Field(() => PageShareCreateInput, {nullable:false})
    @Type(() => PageShareCreateInput)
    create!: InstanceType<typeof PageShareCreateInput>;
    @Field(() => PageShareUpdateInput, {nullable:false})
    @Type(() => PageShareUpdateInput)
    update!: InstanceType<typeof PageShareUpdateInput>;
}

@ObjectType()
export class AggregatePageVersion {
    @Field(() => PageVersionCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PageVersionCountAggregate>;
    @Field(() => PageVersionAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PageVersionAvgAggregate>;
    @Field(() => PageVersionSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PageVersionSumAggregate>;
    @Field(() => PageVersionMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PageVersionMinAggregate>;
    @Field(() => PageVersionMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PageVersionMaxAggregate>;
}

@ArgsType()
export class CreateManyPageVersionArgs {
    @Field(() => [PageVersionCreateManyInput], {nullable:false})
    @Type(() => PageVersionCreateManyInput)
    data!: Array<PageVersionCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOnePageVersionArgs {
    @Field(() => PageVersionCreateInput, {nullable:false})
    @Type(() => PageVersionCreateInput)
    data!: InstanceType<typeof PageVersionCreateInput>;
}

@ArgsType()
export class DeleteManyPageVersionArgs {
    @Field(() => PageVersionWhereInput, {nullable:true})
    @Type(() => PageVersionWhereInput)
    where?: InstanceType<typeof PageVersionWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOnePageVersionArgs {
    @Field(() => PageVersionWhereUniqueInput, {nullable:false})
    @Type(() => PageVersionWhereUniqueInput)
    where!: Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>;
}

@ArgsType()
export class FindFirstPageVersionOrThrowArgs {
    @Field(() => PageVersionWhereInput, {nullable:true})
    @Type(() => PageVersionWhereInput)
    where?: InstanceType<typeof PageVersionWhereInput>;
    @Field(() => [PageVersionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PageVersionOrderByWithRelationInput>;
    @Field(() => PageVersionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PageVersionScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PageVersionScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstPageVersionArgs {
    @Field(() => PageVersionWhereInput, {nullable:true})
    @Type(() => PageVersionWhereInput)
    where?: InstanceType<typeof PageVersionWhereInput>;
    @Field(() => [PageVersionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PageVersionOrderByWithRelationInput>;
    @Field(() => PageVersionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PageVersionScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PageVersionScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyPageVersionArgs {
    @Field(() => PageVersionWhereInput, {nullable:true})
    @Type(() => PageVersionWhereInput)
    where?: InstanceType<typeof PageVersionWhereInput>;
    @Field(() => [PageVersionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PageVersionOrderByWithRelationInput>;
    @Field(() => PageVersionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PageVersionScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PageVersionScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniquePageVersionOrThrowArgs {
    @Field(() => PageVersionWhereUniqueInput, {nullable:false})
    @Type(() => PageVersionWhereUniqueInput)
    where!: Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>;
}

@ArgsType()
export class FindUniquePageVersionArgs {
    @Field(() => PageVersionWhereUniqueInput, {nullable:false})
    @Type(() => PageVersionWhereUniqueInput)
    where!: Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>;
}

@ArgsType()
export class PageVersionAggregateArgs {
    @Field(() => PageVersionWhereInput, {nullable:true})
    @Type(() => PageVersionWhereInput)
    where?: InstanceType<typeof PageVersionWhereInput>;
    @Field(() => [PageVersionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PageVersionOrderByWithRelationInput>;
    @Field(() => PageVersionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PageVersionCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PageVersionCountAggregateInput>;
    @Field(() => PageVersionAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PageVersionAvgAggregateInput>;
    @Field(() => PageVersionSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PageVersionSumAggregateInput>;
    @Field(() => PageVersionMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PageVersionMinAggregateInput>;
    @Field(() => PageVersionMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PageVersionMaxAggregateInput>;
}

@InputType()
export class PageVersionAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    version?: true;
}

@ObjectType()
export class PageVersionAvgAggregate {
    @Field(() => Float, {nullable:true})
    version?: number;
}

@InputType()
export class PageVersionAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    version?: `${SortOrder}`;
}

@InputType()
export class PageVersionCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    pageId?: true;
    @Field(() => Boolean, {nullable:true})
    version?: true;
    @Field(() => Boolean, {nullable:true})
    data?: true;
    @Field(() => Boolean, {nullable:true})
    updatedById?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class PageVersionCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    pageId!: number;
    @Field(() => Int, {nullable:false})
    version!: number;
    @Field(() => Int, {nullable:false})
    data!: number;
    @Field(() => Int, {nullable:false})
    updatedById!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class PageVersionCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    version?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    data?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedById?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class PageVersionCreateManyPageInputEnvelope {
    @Field(() => [PageVersionCreateManyPageInput], {nullable:false})
    @Type(() => PageVersionCreateManyPageInput)
    data!: Array<PageVersionCreateManyPageInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class PageVersionCreateManyPageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    version!: number;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:true})
    updatedById?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class PageVersionCreateManyUpdatedByInputEnvelope {
    @Field(() => [PageVersionCreateManyUpdatedByInput], {nullable:false})
    @Type(() => PageVersionCreateManyUpdatedByInput)
    data!: Array<PageVersionCreateManyUpdatedByInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class PageVersionCreateManyUpdatedByInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => Int, {nullable:false})
    version!: number;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class PageVersionCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => Int, {nullable:false})
    version!: number;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:true})
    updatedById?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class PageVersionCreateNestedManyWithoutPageInput {
    @Field(() => [PageVersionCreateWithoutPageInput], {nullable:true})
    @Type(() => PageVersionCreateWithoutPageInput)
    create?: Array<PageVersionCreateWithoutPageInput>;
    @Field(() => [PageVersionCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => PageVersionCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<PageVersionCreateOrConnectWithoutPageInput>;
    @Field(() => PageVersionCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => PageVersionCreateManyPageInputEnvelope)
    createMany?: InstanceType<typeof PageVersionCreateManyPageInputEnvelope>;
    @Field(() => [PageVersionWhereUniqueInput], {nullable:true})
    @Type(() => PageVersionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>>;
}

@InputType()
export class PageVersionCreateNestedManyWithoutUpdatedByInput {
    @Field(() => [PageVersionCreateWithoutUpdatedByInput], {nullable:true})
    @Type(() => PageVersionCreateWithoutUpdatedByInput)
    create?: Array<PageVersionCreateWithoutUpdatedByInput>;
    @Field(() => [PageVersionCreateOrConnectWithoutUpdatedByInput], {nullable:true})
    @Type(() => PageVersionCreateOrConnectWithoutUpdatedByInput)
    connectOrCreate?: Array<PageVersionCreateOrConnectWithoutUpdatedByInput>;
    @Field(() => PageVersionCreateManyUpdatedByInputEnvelope, {nullable:true})
    @Type(() => PageVersionCreateManyUpdatedByInputEnvelope)
    createMany?: InstanceType<typeof PageVersionCreateManyUpdatedByInputEnvelope>;
    @Field(() => [PageVersionWhereUniqueInput], {nullable:true})
    @Type(() => PageVersionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>>;
}

@InputType()
export class PageVersionCreateOrConnectWithoutPageInput {
    @Field(() => PageVersionWhereUniqueInput, {nullable:false})
    @Type(() => PageVersionWhereUniqueInput)
    where!: Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>;
    @Field(() => PageVersionCreateWithoutPageInput, {nullable:false})
    @Type(() => PageVersionCreateWithoutPageInput)
    create!: InstanceType<typeof PageVersionCreateWithoutPageInput>;
}

@InputType()
export class PageVersionCreateOrConnectWithoutUpdatedByInput {
    @Field(() => PageVersionWhereUniqueInput, {nullable:false})
    @Type(() => PageVersionWhereUniqueInput)
    where!: Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>;
    @Field(() => PageVersionCreateWithoutUpdatedByInput, {nullable:false})
    @Type(() => PageVersionCreateWithoutUpdatedByInput)
    create!: InstanceType<typeof PageVersionCreateWithoutUpdatedByInput>;
}

@InputType()
export class PageVersionCreateWithoutPageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    version!: number;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutVersionsInput, {nullable:true})
    updatedBy?: InstanceType<typeof UserCreateNestedOneWithoutVersionsInput>;
}

@InputType()
export class PageVersionCreateWithoutUpdatedByInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    version!: number;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => ExitPageCreateNestedOneWithoutVersionsInput, {nullable:false})
    page!: InstanceType<typeof ExitPageCreateNestedOneWithoutVersionsInput>;
}

@InputType()
export class PageVersionCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    version!: number;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => ExitPageCreateNestedOneWithoutVersionsInput, {nullable:false})
    page!: InstanceType<typeof ExitPageCreateNestedOneWithoutVersionsInput>;
    @Field(() => UserCreateNestedOneWithoutVersionsInput, {nullable:true})
    updatedBy?: InstanceType<typeof UserCreateNestedOneWithoutVersionsInput>;
}

@ArgsType()
export class PageVersionGroupByArgs {
    @Field(() => PageVersionWhereInput, {nullable:true})
    @Type(() => PageVersionWhereInput)
    where?: InstanceType<typeof PageVersionWhereInput>;
    @Field(() => [PageVersionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PageVersionOrderByWithAggregationInput>;
    @Field(() => [PageVersionScalarFieldEnum], {nullable:false})
    by!: Array<`${PageVersionScalarFieldEnum}`>;
    @Field(() => PageVersionScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof PageVersionScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PageVersionCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PageVersionCountAggregateInput>;
    @Field(() => PageVersionAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PageVersionAvgAggregateInput>;
    @Field(() => PageVersionSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PageVersionSumAggregateInput>;
    @Field(() => PageVersionMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PageVersionMinAggregateInput>;
    @Field(() => PageVersionMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PageVersionMaxAggregateInput>;
}

@ObjectType()
export class PageVersionGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => Int, {nullable:false})
    version!: number;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:true})
    updatedById?: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => PageVersionCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PageVersionCountAggregate>;
    @Field(() => PageVersionAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PageVersionAvgAggregate>;
    @Field(() => PageVersionSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PageVersionSumAggregate>;
    @Field(() => PageVersionMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PageVersionMinAggregate>;
    @Field(() => PageVersionMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PageVersionMaxAggregate>;
}

@InputType()
export class PageVersionListRelationFilter {
    @Field(() => PageVersionWhereInput, {nullable:true})
    every?: InstanceType<typeof PageVersionWhereInput>;
    @Field(() => PageVersionWhereInput, {nullable:true})
    some?: InstanceType<typeof PageVersionWhereInput>;
    @Field(() => PageVersionWhereInput, {nullable:true})
    none?: InstanceType<typeof PageVersionWhereInput>;
}

@InputType()
export class PageVersionMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    pageId?: true;
    @Field(() => Boolean, {nullable:true})
    version?: true;
    @Field(() => Boolean, {nullable:true})
    updatedById?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class PageVersionMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    pageId?: string;
    @Field(() => Int, {nullable:true})
    version?: number;
    @Field(() => String, {nullable:true})
    updatedById?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class PageVersionMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    version?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedById?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class PageVersionMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    pageId?: true;
    @Field(() => Boolean, {nullable:true})
    version?: true;
    @Field(() => Boolean, {nullable:true})
    updatedById?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class PageVersionMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    pageId?: string;
    @Field(() => Int, {nullable:true})
    version?: number;
    @Field(() => String, {nullable:true})
    updatedById?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class PageVersionMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    version?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedById?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class PageVersionOne_version_per_pageCompoundUniqueInput {
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => Int, {nullable:false})
    version!: number;
}

@InputType()
export class PageVersionOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class PageVersionOrderByRelevanceInput {
    @Field(() => [PageVersionOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${PageVersionOrderByRelevanceFieldEnum}`>;
    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;
    @Field(() => String, {nullable:false})
    search!: string;
}

@InputType()
export class PageVersionOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    version?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    data?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    updatedById?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => PageVersionCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PageVersionCountOrderByAggregateInput>;
    @Field(() => PageVersionAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PageVersionAvgOrderByAggregateInput>;
    @Field(() => PageVersionMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PageVersionMaxOrderByAggregateInput>;
    @Field(() => PageVersionMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PageVersionMinOrderByAggregateInput>;
    @Field(() => PageVersionSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PageVersionSumOrderByAggregateInput>;
}

@InputType()
export class PageVersionOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    version?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    data?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    updatedById?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => ExitPageOrderByWithRelationInput, {nullable:true})
    page?: InstanceType<typeof ExitPageOrderByWithRelationInput>;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    updatedBy?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => PageVersionOrderByRelevanceInput, {nullable:true})
    _relevance?: InstanceType<typeof PageVersionOrderByRelevanceInput>;
}

@InputType()
export class PageVersionScalarWhereWithAggregatesInput {
    @Field(() => [PageVersionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PageVersionScalarWhereWithAggregatesInput>;
    @Field(() => [PageVersionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PageVersionScalarWhereWithAggregatesInput>;
    @Field(() => [PageVersionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PageVersionScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    pageId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    version?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    @Type(() => JsonWithAggregatesFilter)
    data?: InstanceType<typeof JsonWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    updatedById?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class PageVersionScalarWhereInput {
    @Field(() => [PageVersionScalarWhereInput], {nullable:true})
    AND?: Array<PageVersionScalarWhereInput>;
    @Field(() => [PageVersionScalarWhereInput], {nullable:true})
    OR?: Array<PageVersionScalarWhereInput>;
    @Field(() => [PageVersionScalarWhereInput], {nullable:true})
    NOT?: Array<PageVersionScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    pageId?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    version?: InstanceType<typeof IntFilter>;
    @Field(() => JsonFilter, {nullable:true})
    @Type(() => JsonFilter)
    data?: InstanceType<typeof JsonFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    updatedById?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class PageVersionSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    version?: true;
}

@ObjectType()
export class PageVersionSumAggregate {
    @Field(() => Int, {nullable:true})
    version?: number;
}

@InputType()
export class PageVersionSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    version?: `${SortOrder}`;
}

@InputType()
export class PageVersionUncheckedCreateNestedManyWithoutPageInput {
    @Field(() => [PageVersionCreateWithoutPageInput], {nullable:true})
    @Type(() => PageVersionCreateWithoutPageInput)
    create?: Array<PageVersionCreateWithoutPageInput>;
    @Field(() => [PageVersionCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => PageVersionCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<PageVersionCreateOrConnectWithoutPageInput>;
    @Field(() => PageVersionCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => PageVersionCreateManyPageInputEnvelope)
    createMany?: InstanceType<typeof PageVersionCreateManyPageInputEnvelope>;
    @Field(() => [PageVersionWhereUniqueInput], {nullable:true})
    @Type(() => PageVersionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>>;
}

@InputType()
export class PageVersionUncheckedCreateNestedManyWithoutUpdatedByInput {
    @Field(() => [PageVersionCreateWithoutUpdatedByInput], {nullable:true})
    @Type(() => PageVersionCreateWithoutUpdatedByInput)
    create?: Array<PageVersionCreateWithoutUpdatedByInput>;
    @Field(() => [PageVersionCreateOrConnectWithoutUpdatedByInput], {nullable:true})
    @Type(() => PageVersionCreateOrConnectWithoutUpdatedByInput)
    connectOrCreate?: Array<PageVersionCreateOrConnectWithoutUpdatedByInput>;
    @Field(() => PageVersionCreateManyUpdatedByInputEnvelope, {nullable:true})
    @Type(() => PageVersionCreateManyUpdatedByInputEnvelope)
    createMany?: InstanceType<typeof PageVersionCreateManyUpdatedByInputEnvelope>;
    @Field(() => [PageVersionWhereUniqueInput], {nullable:true})
    @Type(() => PageVersionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>>;
}

@InputType()
export class PageVersionUncheckedCreateWithoutPageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    version!: number;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:true})
    updatedById?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class PageVersionUncheckedCreateWithoutUpdatedByInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => Int, {nullable:false})
    version!: number;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class PageVersionUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => Int, {nullable:false})
    version!: number;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:true})
    updatedById?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class PageVersionUncheckedUpdateManyWithoutPageNestedInput {
    @Field(() => [PageVersionCreateWithoutPageInput], {nullable:true})
    @Type(() => PageVersionCreateWithoutPageInput)
    create?: Array<PageVersionCreateWithoutPageInput>;
    @Field(() => [PageVersionCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => PageVersionCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<PageVersionCreateOrConnectWithoutPageInput>;
    @Field(() => [PageVersionUpsertWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => PageVersionUpsertWithWhereUniqueWithoutPageInput)
    upsert?: Array<PageVersionUpsertWithWhereUniqueWithoutPageInput>;
    @Field(() => PageVersionCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => PageVersionCreateManyPageInputEnvelope)
    createMany?: InstanceType<typeof PageVersionCreateManyPageInputEnvelope>;
    @Field(() => [PageVersionWhereUniqueInput], {nullable:true})
    @Type(() => PageVersionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>>;
    @Field(() => [PageVersionWhereUniqueInput], {nullable:true})
    @Type(() => PageVersionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>>;
    @Field(() => [PageVersionWhereUniqueInput], {nullable:true})
    @Type(() => PageVersionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>>;
    @Field(() => [PageVersionWhereUniqueInput], {nullable:true})
    @Type(() => PageVersionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>>;
    @Field(() => [PageVersionUpdateWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => PageVersionUpdateWithWhereUniqueWithoutPageInput)
    update?: Array<PageVersionUpdateWithWhereUniqueWithoutPageInput>;
    @Field(() => [PageVersionUpdateManyWithWhereWithoutPageInput], {nullable:true})
    @Type(() => PageVersionUpdateManyWithWhereWithoutPageInput)
    updateMany?: Array<PageVersionUpdateManyWithWhereWithoutPageInput>;
    @Field(() => [PageVersionScalarWhereInput], {nullable:true})
    @Type(() => PageVersionScalarWhereInput)
    deleteMany?: Array<PageVersionScalarWhereInput>;
}

@InputType()
export class PageVersionUncheckedUpdateManyWithoutPageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    version?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    updatedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PageVersionUncheckedUpdateManyWithoutUpdatedByNestedInput {
    @Field(() => [PageVersionCreateWithoutUpdatedByInput], {nullable:true})
    @Type(() => PageVersionCreateWithoutUpdatedByInput)
    create?: Array<PageVersionCreateWithoutUpdatedByInput>;
    @Field(() => [PageVersionCreateOrConnectWithoutUpdatedByInput], {nullable:true})
    @Type(() => PageVersionCreateOrConnectWithoutUpdatedByInput)
    connectOrCreate?: Array<PageVersionCreateOrConnectWithoutUpdatedByInput>;
    @Field(() => [PageVersionUpsertWithWhereUniqueWithoutUpdatedByInput], {nullable:true})
    @Type(() => PageVersionUpsertWithWhereUniqueWithoutUpdatedByInput)
    upsert?: Array<PageVersionUpsertWithWhereUniqueWithoutUpdatedByInput>;
    @Field(() => PageVersionCreateManyUpdatedByInputEnvelope, {nullable:true})
    @Type(() => PageVersionCreateManyUpdatedByInputEnvelope)
    createMany?: InstanceType<typeof PageVersionCreateManyUpdatedByInputEnvelope>;
    @Field(() => [PageVersionWhereUniqueInput], {nullable:true})
    @Type(() => PageVersionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>>;
    @Field(() => [PageVersionWhereUniqueInput], {nullable:true})
    @Type(() => PageVersionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>>;
    @Field(() => [PageVersionWhereUniqueInput], {nullable:true})
    @Type(() => PageVersionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>>;
    @Field(() => [PageVersionWhereUniqueInput], {nullable:true})
    @Type(() => PageVersionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>>;
    @Field(() => [PageVersionUpdateWithWhereUniqueWithoutUpdatedByInput], {nullable:true})
    @Type(() => PageVersionUpdateWithWhereUniqueWithoutUpdatedByInput)
    update?: Array<PageVersionUpdateWithWhereUniqueWithoutUpdatedByInput>;
    @Field(() => [PageVersionUpdateManyWithWhereWithoutUpdatedByInput], {nullable:true})
    @Type(() => PageVersionUpdateManyWithWhereWithoutUpdatedByInput)
    updateMany?: Array<PageVersionUpdateManyWithWhereWithoutUpdatedByInput>;
    @Field(() => [PageVersionScalarWhereInput], {nullable:true})
    @Type(() => PageVersionScalarWhereInput)
    deleteMany?: Array<PageVersionScalarWhereInput>;
}

@InputType()
export class PageVersionUncheckedUpdateManyWithoutUpdatedByInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    version?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PageVersionUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    version?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    updatedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PageVersionUncheckedUpdateWithoutPageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    version?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    updatedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PageVersionUncheckedUpdateWithoutUpdatedByInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    version?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PageVersionUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    version?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    updatedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PageVersionUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    version?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PageVersionUpdateManyWithWhereWithoutPageInput {
    @Field(() => PageVersionScalarWhereInput, {nullable:false})
    @Type(() => PageVersionScalarWhereInput)
    where!: InstanceType<typeof PageVersionScalarWhereInput>;
    @Field(() => PageVersionUpdateManyMutationInput, {nullable:false})
    @Type(() => PageVersionUpdateManyMutationInput)
    data!: InstanceType<typeof PageVersionUpdateManyMutationInput>;
}

@InputType()
export class PageVersionUpdateManyWithWhereWithoutUpdatedByInput {
    @Field(() => PageVersionScalarWhereInput, {nullable:false})
    @Type(() => PageVersionScalarWhereInput)
    where!: InstanceType<typeof PageVersionScalarWhereInput>;
    @Field(() => PageVersionUpdateManyMutationInput, {nullable:false})
    @Type(() => PageVersionUpdateManyMutationInput)
    data!: InstanceType<typeof PageVersionUpdateManyMutationInput>;
}

@InputType()
export class PageVersionUpdateManyWithoutPageNestedInput {
    @Field(() => [PageVersionCreateWithoutPageInput], {nullable:true})
    @Type(() => PageVersionCreateWithoutPageInput)
    create?: Array<PageVersionCreateWithoutPageInput>;
    @Field(() => [PageVersionCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => PageVersionCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<PageVersionCreateOrConnectWithoutPageInput>;
    @Field(() => [PageVersionUpsertWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => PageVersionUpsertWithWhereUniqueWithoutPageInput)
    upsert?: Array<PageVersionUpsertWithWhereUniqueWithoutPageInput>;
    @Field(() => PageVersionCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => PageVersionCreateManyPageInputEnvelope)
    createMany?: InstanceType<typeof PageVersionCreateManyPageInputEnvelope>;
    @Field(() => [PageVersionWhereUniqueInput], {nullable:true})
    @Type(() => PageVersionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>>;
    @Field(() => [PageVersionWhereUniqueInput], {nullable:true})
    @Type(() => PageVersionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>>;
    @Field(() => [PageVersionWhereUniqueInput], {nullable:true})
    @Type(() => PageVersionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>>;
    @Field(() => [PageVersionWhereUniqueInput], {nullable:true})
    @Type(() => PageVersionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>>;
    @Field(() => [PageVersionUpdateWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => PageVersionUpdateWithWhereUniqueWithoutPageInput)
    update?: Array<PageVersionUpdateWithWhereUniqueWithoutPageInput>;
    @Field(() => [PageVersionUpdateManyWithWhereWithoutPageInput], {nullable:true})
    @Type(() => PageVersionUpdateManyWithWhereWithoutPageInput)
    updateMany?: Array<PageVersionUpdateManyWithWhereWithoutPageInput>;
    @Field(() => [PageVersionScalarWhereInput], {nullable:true})
    @Type(() => PageVersionScalarWhereInput)
    deleteMany?: Array<PageVersionScalarWhereInput>;
}

@InputType()
export class PageVersionUpdateManyWithoutUpdatedByNestedInput {
    @Field(() => [PageVersionCreateWithoutUpdatedByInput], {nullable:true})
    @Type(() => PageVersionCreateWithoutUpdatedByInput)
    create?: Array<PageVersionCreateWithoutUpdatedByInput>;
    @Field(() => [PageVersionCreateOrConnectWithoutUpdatedByInput], {nullable:true})
    @Type(() => PageVersionCreateOrConnectWithoutUpdatedByInput)
    connectOrCreate?: Array<PageVersionCreateOrConnectWithoutUpdatedByInput>;
    @Field(() => [PageVersionUpsertWithWhereUniqueWithoutUpdatedByInput], {nullable:true})
    @Type(() => PageVersionUpsertWithWhereUniqueWithoutUpdatedByInput)
    upsert?: Array<PageVersionUpsertWithWhereUniqueWithoutUpdatedByInput>;
    @Field(() => PageVersionCreateManyUpdatedByInputEnvelope, {nullable:true})
    @Type(() => PageVersionCreateManyUpdatedByInputEnvelope)
    createMany?: InstanceType<typeof PageVersionCreateManyUpdatedByInputEnvelope>;
    @Field(() => [PageVersionWhereUniqueInput], {nullable:true})
    @Type(() => PageVersionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>>;
    @Field(() => [PageVersionWhereUniqueInput], {nullable:true})
    @Type(() => PageVersionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>>;
    @Field(() => [PageVersionWhereUniqueInput], {nullable:true})
    @Type(() => PageVersionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>>;
    @Field(() => [PageVersionWhereUniqueInput], {nullable:true})
    @Type(() => PageVersionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>>;
    @Field(() => [PageVersionUpdateWithWhereUniqueWithoutUpdatedByInput], {nullable:true})
    @Type(() => PageVersionUpdateWithWhereUniqueWithoutUpdatedByInput)
    update?: Array<PageVersionUpdateWithWhereUniqueWithoutUpdatedByInput>;
    @Field(() => [PageVersionUpdateManyWithWhereWithoutUpdatedByInput], {nullable:true})
    @Type(() => PageVersionUpdateManyWithWhereWithoutUpdatedByInput)
    updateMany?: Array<PageVersionUpdateManyWithWhereWithoutUpdatedByInput>;
    @Field(() => [PageVersionScalarWhereInput], {nullable:true})
    @Type(() => PageVersionScalarWhereInput)
    deleteMany?: Array<PageVersionScalarWhereInput>;
}

@InputType()
export class PageVersionUpdateWithWhereUniqueWithoutPageInput {
    @Field(() => PageVersionWhereUniqueInput, {nullable:false})
    @Type(() => PageVersionWhereUniqueInput)
    where!: Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>;
    @Field(() => PageVersionUpdateWithoutPageInput, {nullable:false})
    @Type(() => PageVersionUpdateWithoutPageInput)
    data!: InstanceType<typeof PageVersionUpdateWithoutPageInput>;
}

@InputType()
export class PageVersionUpdateWithWhereUniqueWithoutUpdatedByInput {
    @Field(() => PageVersionWhereUniqueInput, {nullable:false})
    @Type(() => PageVersionWhereUniqueInput)
    where!: Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>;
    @Field(() => PageVersionUpdateWithoutUpdatedByInput, {nullable:false})
    @Type(() => PageVersionUpdateWithoutUpdatedByInput)
    data!: InstanceType<typeof PageVersionUpdateWithoutUpdatedByInput>;
}

@InputType()
export class PageVersionUpdateWithoutPageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    version?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutVersionsNestedInput, {nullable:true})
    updatedBy?: InstanceType<typeof UserUpdateOneWithoutVersionsNestedInput>;
}

@InputType()
export class PageVersionUpdateWithoutUpdatedByInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    version?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ExitPageUpdateOneRequiredWithoutVersionsNestedInput, {nullable:true})
    page?: InstanceType<typeof ExitPageUpdateOneRequiredWithoutVersionsNestedInput>;
}

@InputType()
export class PageVersionUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    version?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ExitPageUpdateOneRequiredWithoutVersionsNestedInput, {nullable:true})
    page?: InstanceType<typeof ExitPageUpdateOneRequiredWithoutVersionsNestedInput>;
    @Field(() => UserUpdateOneWithoutVersionsNestedInput, {nullable:true})
    updatedBy?: InstanceType<typeof UserUpdateOneWithoutVersionsNestedInput>;
}

@InputType()
export class PageVersionUpsertWithWhereUniqueWithoutPageInput {
    @Field(() => PageVersionWhereUniqueInput, {nullable:false})
    @Type(() => PageVersionWhereUniqueInput)
    where!: Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>;
    @Field(() => PageVersionUpdateWithoutPageInput, {nullable:false})
    @Type(() => PageVersionUpdateWithoutPageInput)
    update!: InstanceType<typeof PageVersionUpdateWithoutPageInput>;
    @Field(() => PageVersionCreateWithoutPageInput, {nullable:false})
    @Type(() => PageVersionCreateWithoutPageInput)
    create!: InstanceType<typeof PageVersionCreateWithoutPageInput>;
}

@InputType()
export class PageVersionUpsertWithWhereUniqueWithoutUpdatedByInput {
    @Field(() => PageVersionWhereUniqueInput, {nullable:false})
    @Type(() => PageVersionWhereUniqueInput)
    where!: Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>;
    @Field(() => PageVersionUpdateWithoutUpdatedByInput, {nullable:false})
    @Type(() => PageVersionUpdateWithoutUpdatedByInput)
    update!: InstanceType<typeof PageVersionUpdateWithoutUpdatedByInput>;
    @Field(() => PageVersionCreateWithoutUpdatedByInput, {nullable:false})
    @Type(() => PageVersionCreateWithoutUpdatedByInput)
    create!: InstanceType<typeof PageVersionCreateWithoutUpdatedByInput>;
}

@InputType()
export class PageVersionWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => PageVersionOne_version_per_pageCompoundUniqueInput, {nullable:true})
    one_version_per_page?: InstanceType<typeof PageVersionOne_version_per_pageCompoundUniqueInput>;
    @Field(() => [PageVersionWhereInput], {nullable:true})
    AND?: Array<PageVersionWhereInput>;
    @Field(() => [PageVersionWhereInput], {nullable:true})
    OR?: Array<PageVersionWhereInput>;
    @Field(() => [PageVersionWhereInput], {nullable:true})
    NOT?: Array<PageVersionWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    pageId?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    version?: InstanceType<typeof IntFilter>;
    @Field(() => JsonFilter, {nullable:true})
    @Type(() => JsonFilter)
    data?: InstanceType<typeof JsonFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    updatedById?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => ExitPageScalarRelationFilter, {nullable:true})
    page?: InstanceType<typeof ExitPageScalarRelationFilter>;
    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    updatedBy?: InstanceType<typeof UserNullableScalarRelationFilter>;
}

@InputType()
export class PageVersionWhereInput {
    @Field(() => [PageVersionWhereInput], {nullable:true})
    AND?: Array<PageVersionWhereInput>;
    @Field(() => [PageVersionWhereInput], {nullable:true})
    OR?: Array<PageVersionWhereInput>;
    @Field(() => [PageVersionWhereInput], {nullable:true})
    NOT?: Array<PageVersionWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    pageId?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    version?: InstanceType<typeof IntFilter>;
    @Field(() => JsonFilter, {nullable:true})
    @Type(() => JsonFilter)
    data?: InstanceType<typeof JsonFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    updatedById?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => ExitPageScalarRelationFilter, {nullable:true})
    page?: InstanceType<typeof ExitPageScalarRelationFilter>;
    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    updatedBy?: InstanceType<typeof UserNullableScalarRelationFilter>;
}

@ObjectType()
export class PageVersion {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => Int, {nullable:false})
    version!: number;
    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;
    @Field(() => String, {nullable:true})
    updatedById!: string | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => ExitPage, {nullable:false})
    page?: InstanceType<typeof ExitPage>;
    @Field(() => User, {nullable:true})
    updatedBy?: InstanceType<typeof User> | null;
}

@ArgsType()
export class UpdateManyPageVersionArgs {
    @Field(() => PageVersionUpdateManyMutationInput, {nullable:false})
    @Type(() => PageVersionUpdateManyMutationInput)
    data!: InstanceType<typeof PageVersionUpdateManyMutationInput>;
    @Field(() => PageVersionWhereInput, {nullable:true})
    @Type(() => PageVersionWhereInput)
    where?: InstanceType<typeof PageVersionWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOnePageVersionArgs {
    @Field(() => PageVersionUpdateInput, {nullable:false})
    @Type(() => PageVersionUpdateInput)
    data!: InstanceType<typeof PageVersionUpdateInput>;
    @Field(() => PageVersionWhereUniqueInput, {nullable:false})
    @Type(() => PageVersionWhereUniqueInput)
    where!: Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>;
}

@ArgsType()
export class UpsertOnePageVersionArgs {
    @Field(() => PageVersionWhereUniqueInput, {nullable:false})
    @Type(() => PageVersionWhereUniqueInput)
    where!: Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>;
    @Field(() => PageVersionCreateInput, {nullable:false})
    @Type(() => PageVersionCreateInput)
    create!: InstanceType<typeof PageVersionCreateInput>;
    @Field(() => PageVersionUpdateInput, {nullable:false})
    @Type(() => PageVersionUpdateInput)
    update!: InstanceType<typeof PageVersionUpdateInput>;
}

@ObjectType()
export class AggregatePageView {
    @Field(() => PageViewCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PageViewCountAggregate>;
    @Field(() => PageViewMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PageViewMinAggregate>;
    @Field(() => PageViewMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PageViewMaxAggregate>;
}

@ArgsType()
export class CreateManyPageViewArgs {
    @Field(() => [PageViewCreateManyInput], {nullable:false})
    @Type(() => PageViewCreateManyInput)
    data!: Array<PageViewCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOnePageViewArgs {
    @Field(() => PageViewCreateInput, {nullable:false})
    @Type(() => PageViewCreateInput)
    data!: InstanceType<typeof PageViewCreateInput>;
}

@ArgsType()
export class DeleteManyPageViewArgs {
    @Field(() => PageViewWhereInput, {nullable:true})
    @Type(() => PageViewWhereInput)
    where?: InstanceType<typeof PageViewWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOnePageViewArgs {
    @Field(() => PageViewWhereUniqueInput, {nullable:false})
    @Type(() => PageViewWhereUniqueInput)
    where!: Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstPageViewOrThrowArgs {
    @Field(() => PageViewWhereInput, {nullable:true})
    @Type(() => PageViewWhereInput)
    where?: InstanceType<typeof PageViewWhereInput>;
    @Field(() => [PageViewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PageViewOrderByWithRelationInput>;
    @Field(() => PageViewWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PageViewScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PageViewScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstPageViewArgs {
    @Field(() => PageViewWhereInput, {nullable:true})
    @Type(() => PageViewWhereInput)
    where?: InstanceType<typeof PageViewWhereInput>;
    @Field(() => [PageViewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PageViewOrderByWithRelationInput>;
    @Field(() => PageViewWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PageViewScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PageViewScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyPageViewArgs {
    @Field(() => PageViewWhereInput, {nullable:true})
    @Type(() => PageViewWhereInput)
    where?: InstanceType<typeof PageViewWhereInput>;
    @Field(() => [PageViewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PageViewOrderByWithRelationInput>;
    @Field(() => PageViewWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PageViewScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PageViewScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniquePageViewOrThrowArgs {
    @Field(() => PageViewWhereUniqueInput, {nullable:false})
    @Type(() => PageViewWhereUniqueInput)
    where!: Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniquePageViewArgs {
    @Field(() => PageViewWhereUniqueInput, {nullable:false})
    @Type(() => PageViewWhereUniqueInput)
    where!: Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>;
}

@ArgsType()
export class PageViewAggregateArgs {
    @Field(() => PageViewWhereInput, {nullable:true})
    @Type(() => PageViewWhereInput)
    where?: InstanceType<typeof PageViewWhereInput>;
    @Field(() => [PageViewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PageViewOrderByWithRelationInput>;
    @Field(() => PageViewWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PageViewCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PageViewCountAggregateInput>;
    @Field(() => PageViewMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PageViewMinAggregateInput>;
    @Field(() => PageViewMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PageViewMaxAggregateInput>;
}

@InputType()
export class PageViewCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    pageId?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    sessionId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class PageViewCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    pageId!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    sessionId!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class PageViewCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    sessionId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class PageViewCreateManyPageInputEnvelope {
    @Field(() => [PageViewCreateManyPageInput], {nullable:false})
    @Type(() => PageViewCreateManyPageInput)
    data!: Array<PageViewCreateManyPageInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class PageViewCreateManyPageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    sessionId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class PageViewCreateManyUserInputEnvelope {
    @Field(() => [PageViewCreateManyUserInput], {nullable:false})
    @Type(() => PageViewCreateManyUserInput)
    data!: Array<PageViewCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class PageViewCreateManyUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => String, {nullable:true})
    sessionId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class PageViewCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    sessionId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class PageViewCreateNestedManyWithoutPageInput {
    @Field(() => [PageViewCreateWithoutPageInput], {nullable:true})
    @Type(() => PageViewCreateWithoutPageInput)
    create?: Array<PageViewCreateWithoutPageInput>;
    @Field(() => [PageViewCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => PageViewCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<PageViewCreateOrConnectWithoutPageInput>;
    @Field(() => PageViewCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => PageViewCreateManyPageInputEnvelope)
    createMany?: InstanceType<typeof PageViewCreateManyPageInputEnvelope>;
    @Field(() => [PageViewWhereUniqueInput], {nullable:true})
    @Type(() => PageViewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>>;
}

@InputType()
export class PageViewCreateNestedManyWithoutUserInput {
    @Field(() => [PageViewCreateWithoutUserInput], {nullable:true})
    @Type(() => PageViewCreateWithoutUserInput)
    create?: Array<PageViewCreateWithoutUserInput>;
    @Field(() => [PageViewCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PageViewCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PageViewCreateOrConnectWithoutUserInput>;
    @Field(() => PageViewCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PageViewCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof PageViewCreateManyUserInputEnvelope>;
    @Field(() => [PageViewWhereUniqueInput], {nullable:true})
    @Type(() => PageViewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>>;
}

@InputType()
export class PageViewCreateOrConnectWithoutPageInput {
    @Field(() => PageViewWhereUniqueInput, {nullable:false})
    @Type(() => PageViewWhereUniqueInput)
    where!: Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>;
    @Field(() => PageViewCreateWithoutPageInput, {nullable:false})
    @Type(() => PageViewCreateWithoutPageInput)
    create!: InstanceType<typeof PageViewCreateWithoutPageInput>;
}

@InputType()
export class PageViewCreateOrConnectWithoutUserInput {
    @Field(() => PageViewWhereUniqueInput, {nullable:false})
    @Type(() => PageViewWhereUniqueInput)
    where!: Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>;
    @Field(() => PageViewCreateWithoutUserInput, {nullable:false})
    @Type(() => PageViewCreateWithoutUserInput)
    create!: InstanceType<typeof PageViewCreateWithoutUserInput>;
}

@InputType()
export class PageViewCreateWithoutPageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    sessionId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutViewsInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutViewsInput>;
}

@InputType()
export class PageViewCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    sessionId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => ExitPageCreateNestedOneWithoutViewsInput, {nullable:false})
    page!: InstanceType<typeof ExitPageCreateNestedOneWithoutViewsInput>;
}

@InputType()
export class PageViewCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    sessionId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => ExitPageCreateNestedOneWithoutViewsInput, {nullable:false})
    page!: InstanceType<typeof ExitPageCreateNestedOneWithoutViewsInput>;
    @Field(() => UserCreateNestedOneWithoutViewsInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutViewsInput>;
}

@ArgsType()
export class PageViewGroupByArgs {
    @Field(() => PageViewWhereInput, {nullable:true})
    @Type(() => PageViewWhereInput)
    where?: InstanceType<typeof PageViewWhereInput>;
    @Field(() => [PageViewOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PageViewOrderByWithAggregationInput>;
    @Field(() => [PageViewScalarFieldEnum], {nullable:false})
    by!: Array<`${PageViewScalarFieldEnum}`>;
    @Field(() => PageViewScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof PageViewScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PageViewCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PageViewCountAggregateInput>;
    @Field(() => PageViewMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PageViewMinAggregateInput>;
    @Field(() => PageViewMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PageViewMaxAggregateInput>;
}

@ObjectType()
export class PageViewGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    sessionId?: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => PageViewCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PageViewCountAggregate>;
    @Field(() => PageViewMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PageViewMinAggregate>;
    @Field(() => PageViewMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PageViewMaxAggregate>;
}

@InputType()
export class PageViewListRelationFilter {
    @Field(() => PageViewWhereInput, {nullable:true})
    every?: InstanceType<typeof PageViewWhereInput>;
    @Field(() => PageViewWhereInput, {nullable:true})
    some?: InstanceType<typeof PageViewWhereInput>;
    @Field(() => PageViewWhereInput, {nullable:true})
    none?: InstanceType<typeof PageViewWhereInput>;
}

@InputType()
export class PageViewMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    pageId?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    sessionId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class PageViewMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    pageId?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    sessionId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class PageViewMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    sessionId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class PageViewMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    pageId?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    sessionId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class PageViewMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    pageId?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    sessionId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class PageViewMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    sessionId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class PageViewOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class PageViewOrderByRelevanceInput {
    @Field(() => [PageViewOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${PageViewOrderByRelevanceFieldEnum}`>;
    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;
    @Field(() => String, {nullable:false})
    search!: string;
}

@InputType()
export class PageViewOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    userId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    sessionId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => PageViewCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PageViewCountOrderByAggregateInput>;
    @Field(() => PageViewMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PageViewMaxOrderByAggregateInput>;
    @Field(() => PageViewMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PageViewMinOrderByAggregateInput>;
}

@InputType()
export class PageViewOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    userId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    sessionId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => ExitPageOrderByWithRelationInput, {nullable:true})
    page?: InstanceType<typeof ExitPageOrderByWithRelationInput>;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => PageViewOrderByRelevanceInput, {nullable:true})
    _relevance?: InstanceType<typeof PageViewOrderByRelevanceInput>;
}

@InputType()
export class PageViewScalarWhereWithAggregatesInput {
    @Field(() => [PageViewScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PageViewScalarWhereWithAggregatesInput>;
    @Field(() => [PageViewScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PageViewScalarWhereWithAggregatesInput>;
    @Field(() => [PageViewScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PageViewScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    pageId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    sessionId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class PageViewScalarWhereInput {
    @Field(() => [PageViewScalarWhereInput], {nullable:true})
    AND?: Array<PageViewScalarWhereInput>;
    @Field(() => [PageViewScalarWhereInput], {nullable:true})
    OR?: Array<PageViewScalarWhereInput>;
    @Field(() => [PageViewScalarWhereInput], {nullable:true})
    NOT?: Array<PageViewScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    pageId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    userId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    sessionId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class PageViewUncheckedCreateNestedManyWithoutPageInput {
    @Field(() => [PageViewCreateWithoutPageInput], {nullable:true})
    @Type(() => PageViewCreateWithoutPageInput)
    create?: Array<PageViewCreateWithoutPageInput>;
    @Field(() => [PageViewCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => PageViewCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<PageViewCreateOrConnectWithoutPageInput>;
    @Field(() => PageViewCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => PageViewCreateManyPageInputEnvelope)
    createMany?: InstanceType<typeof PageViewCreateManyPageInputEnvelope>;
    @Field(() => [PageViewWhereUniqueInput], {nullable:true})
    @Type(() => PageViewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>>;
}

@InputType()
export class PageViewUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [PageViewCreateWithoutUserInput], {nullable:true})
    @Type(() => PageViewCreateWithoutUserInput)
    create?: Array<PageViewCreateWithoutUserInput>;
    @Field(() => [PageViewCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PageViewCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PageViewCreateOrConnectWithoutUserInput>;
    @Field(() => PageViewCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PageViewCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof PageViewCreateManyUserInputEnvelope>;
    @Field(() => [PageViewWhereUniqueInput], {nullable:true})
    @Type(() => PageViewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>>;
}

@InputType()
export class PageViewUncheckedCreateWithoutPageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    sessionId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class PageViewUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => String, {nullable:true})
    sessionId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class PageViewUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    sessionId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class PageViewUncheckedUpdateManyWithoutPageNestedInput {
    @Field(() => [PageViewCreateWithoutPageInput], {nullable:true})
    @Type(() => PageViewCreateWithoutPageInput)
    create?: Array<PageViewCreateWithoutPageInput>;
    @Field(() => [PageViewCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => PageViewCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<PageViewCreateOrConnectWithoutPageInput>;
    @Field(() => [PageViewUpsertWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => PageViewUpsertWithWhereUniqueWithoutPageInput)
    upsert?: Array<PageViewUpsertWithWhereUniqueWithoutPageInput>;
    @Field(() => PageViewCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => PageViewCreateManyPageInputEnvelope)
    createMany?: InstanceType<typeof PageViewCreateManyPageInputEnvelope>;
    @Field(() => [PageViewWhereUniqueInput], {nullable:true})
    @Type(() => PageViewWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>>;
    @Field(() => [PageViewWhereUniqueInput], {nullable:true})
    @Type(() => PageViewWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>>;
    @Field(() => [PageViewWhereUniqueInput], {nullable:true})
    @Type(() => PageViewWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>>;
    @Field(() => [PageViewWhereUniqueInput], {nullable:true})
    @Type(() => PageViewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>>;
    @Field(() => [PageViewUpdateWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => PageViewUpdateWithWhereUniqueWithoutPageInput)
    update?: Array<PageViewUpdateWithWhereUniqueWithoutPageInput>;
    @Field(() => [PageViewUpdateManyWithWhereWithoutPageInput], {nullable:true})
    @Type(() => PageViewUpdateManyWithWhereWithoutPageInput)
    updateMany?: Array<PageViewUpdateManyWithWhereWithoutPageInput>;
    @Field(() => [PageViewScalarWhereInput], {nullable:true})
    @Type(() => PageViewScalarWhereInput)
    deleteMany?: Array<PageViewScalarWhereInput>;
}

@InputType()
export class PageViewUncheckedUpdateManyWithoutPageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    sessionId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PageViewUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [PageViewCreateWithoutUserInput], {nullable:true})
    @Type(() => PageViewCreateWithoutUserInput)
    create?: Array<PageViewCreateWithoutUserInput>;
    @Field(() => [PageViewCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PageViewCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PageViewCreateOrConnectWithoutUserInput>;
    @Field(() => [PageViewUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PageViewUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<PageViewUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => PageViewCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PageViewCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof PageViewCreateManyUserInputEnvelope>;
    @Field(() => [PageViewWhereUniqueInput], {nullable:true})
    @Type(() => PageViewWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>>;
    @Field(() => [PageViewWhereUniqueInput], {nullable:true})
    @Type(() => PageViewWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>>;
    @Field(() => [PageViewWhereUniqueInput], {nullable:true})
    @Type(() => PageViewWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>>;
    @Field(() => [PageViewWhereUniqueInput], {nullable:true})
    @Type(() => PageViewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>>;
    @Field(() => [PageViewUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PageViewUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<PageViewUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [PageViewUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => PageViewUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<PageViewUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [PageViewScalarWhereInput], {nullable:true})
    @Type(() => PageViewScalarWhereInput)
    deleteMany?: Array<PageViewScalarWhereInput>;
}

@InputType()
export class PageViewUncheckedUpdateManyWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    sessionId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PageViewUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    sessionId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PageViewUncheckedUpdateWithoutPageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    sessionId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PageViewUncheckedUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    sessionId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PageViewUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    sessionId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PageViewUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    sessionId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PageViewUpdateManyWithWhereWithoutPageInput {
    @Field(() => PageViewScalarWhereInput, {nullable:false})
    @Type(() => PageViewScalarWhereInput)
    where!: InstanceType<typeof PageViewScalarWhereInput>;
    @Field(() => PageViewUpdateManyMutationInput, {nullable:false})
    @Type(() => PageViewUpdateManyMutationInput)
    data!: InstanceType<typeof PageViewUpdateManyMutationInput>;
}

@InputType()
export class PageViewUpdateManyWithWhereWithoutUserInput {
    @Field(() => PageViewScalarWhereInput, {nullable:false})
    @Type(() => PageViewScalarWhereInput)
    where!: InstanceType<typeof PageViewScalarWhereInput>;
    @Field(() => PageViewUpdateManyMutationInput, {nullable:false})
    @Type(() => PageViewUpdateManyMutationInput)
    data!: InstanceType<typeof PageViewUpdateManyMutationInput>;
}

@InputType()
export class PageViewUpdateManyWithoutPageNestedInput {
    @Field(() => [PageViewCreateWithoutPageInput], {nullable:true})
    @Type(() => PageViewCreateWithoutPageInput)
    create?: Array<PageViewCreateWithoutPageInput>;
    @Field(() => [PageViewCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => PageViewCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<PageViewCreateOrConnectWithoutPageInput>;
    @Field(() => [PageViewUpsertWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => PageViewUpsertWithWhereUniqueWithoutPageInput)
    upsert?: Array<PageViewUpsertWithWhereUniqueWithoutPageInput>;
    @Field(() => PageViewCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => PageViewCreateManyPageInputEnvelope)
    createMany?: InstanceType<typeof PageViewCreateManyPageInputEnvelope>;
    @Field(() => [PageViewWhereUniqueInput], {nullable:true})
    @Type(() => PageViewWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>>;
    @Field(() => [PageViewWhereUniqueInput], {nullable:true})
    @Type(() => PageViewWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>>;
    @Field(() => [PageViewWhereUniqueInput], {nullable:true})
    @Type(() => PageViewWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>>;
    @Field(() => [PageViewWhereUniqueInput], {nullable:true})
    @Type(() => PageViewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>>;
    @Field(() => [PageViewUpdateWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => PageViewUpdateWithWhereUniqueWithoutPageInput)
    update?: Array<PageViewUpdateWithWhereUniqueWithoutPageInput>;
    @Field(() => [PageViewUpdateManyWithWhereWithoutPageInput], {nullable:true})
    @Type(() => PageViewUpdateManyWithWhereWithoutPageInput)
    updateMany?: Array<PageViewUpdateManyWithWhereWithoutPageInput>;
    @Field(() => [PageViewScalarWhereInput], {nullable:true})
    @Type(() => PageViewScalarWhereInput)
    deleteMany?: Array<PageViewScalarWhereInput>;
}

@InputType()
export class PageViewUpdateManyWithoutUserNestedInput {
    @Field(() => [PageViewCreateWithoutUserInput], {nullable:true})
    @Type(() => PageViewCreateWithoutUserInput)
    create?: Array<PageViewCreateWithoutUserInput>;
    @Field(() => [PageViewCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PageViewCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PageViewCreateOrConnectWithoutUserInput>;
    @Field(() => [PageViewUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PageViewUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<PageViewUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => PageViewCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PageViewCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof PageViewCreateManyUserInputEnvelope>;
    @Field(() => [PageViewWhereUniqueInput], {nullable:true})
    @Type(() => PageViewWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>>;
    @Field(() => [PageViewWhereUniqueInput], {nullable:true})
    @Type(() => PageViewWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>>;
    @Field(() => [PageViewWhereUniqueInput], {nullable:true})
    @Type(() => PageViewWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>>;
    @Field(() => [PageViewWhereUniqueInput], {nullable:true})
    @Type(() => PageViewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>>;
    @Field(() => [PageViewUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PageViewUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<PageViewUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [PageViewUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => PageViewUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<PageViewUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [PageViewScalarWhereInput], {nullable:true})
    @Type(() => PageViewScalarWhereInput)
    deleteMany?: Array<PageViewScalarWhereInput>;
}

@InputType()
export class PageViewUpdateWithWhereUniqueWithoutPageInput {
    @Field(() => PageViewWhereUniqueInput, {nullable:false})
    @Type(() => PageViewWhereUniqueInput)
    where!: Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>;
    @Field(() => PageViewUpdateWithoutPageInput, {nullable:false})
    @Type(() => PageViewUpdateWithoutPageInput)
    data!: InstanceType<typeof PageViewUpdateWithoutPageInput>;
}

@InputType()
export class PageViewUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => PageViewWhereUniqueInput, {nullable:false})
    @Type(() => PageViewWhereUniqueInput)
    where!: Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>;
    @Field(() => PageViewUpdateWithoutUserInput, {nullable:false})
    @Type(() => PageViewUpdateWithoutUserInput)
    data!: InstanceType<typeof PageViewUpdateWithoutUserInput>;
}

@InputType()
export class PageViewUpdateWithoutPageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    sessionId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutViewsNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutViewsNestedInput>;
}

@InputType()
export class PageViewUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    sessionId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ExitPageUpdateOneRequiredWithoutViewsNestedInput, {nullable:true})
    page?: InstanceType<typeof ExitPageUpdateOneRequiredWithoutViewsNestedInput>;
}

@InputType()
export class PageViewUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    sessionId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ExitPageUpdateOneRequiredWithoutViewsNestedInput, {nullable:true})
    page?: InstanceType<typeof ExitPageUpdateOneRequiredWithoutViewsNestedInput>;
    @Field(() => UserUpdateOneWithoutViewsNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutViewsNestedInput>;
}

@InputType()
export class PageViewUpsertWithWhereUniqueWithoutPageInput {
    @Field(() => PageViewWhereUniqueInput, {nullable:false})
    @Type(() => PageViewWhereUniqueInput)
    where!: Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>;
    @Field(() => PageViewUpdateWithoutPageInput, {nullable:false})
    @Type(() => PageViewUpdateWithoutPageInput)
    update!: InstanceType<typeof PageViewUpdateWithoutPageInput>;
    @Field(() => PageViewCreateWithoutPageInput, {nullable:false})
    @Type(() => PageViewCreateWithoutPageInput)
    create!: InstanceType<typeof PageViewCreateWithoutPageInput>;
}

@InputType()
export class PageViewUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => PageViewWhereUniqueInput, {nullable:false})
    @Type(() => PageViewWhereUniqueInput)
    where!: Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>;
    @Field(() => PageViewUpdateWithoutUserInput, {nullable:false})
    @Type(() => PageViewUpdateWithoutUserInput)
    update!: InstanceType<typeof PageViewUpdateWithoutUserInput>;
    @Field(() => PageViewCreateWithoutUserInput, {nullable:false})
    @Type(() => PageViewCreateWithoutUserInput)
    create!: InstanceType<typeof PageViewCreateWithoutUserInput>;
}

@InputType()
export class PageViewWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [PageViewWhereInput], {nullable:true})
    AND?: Array<PageViewWhereInput>;
    @Field(() => [PageViewWhereInput], {nullable:true})
    OR?: Array<PageViewWhereInput>;
    @Field(() => [PageViewWhereInput], {nullable:true})
    NOT?: Array<PageViewWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    pageId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    userId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    sessionId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => ExitPageScalarRelationFilter, {nullable:true})
    page?: InstanceType<typeof ExitPageScalarRelationFilter>;
    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserNullableScalarRelationFilter>;
}

@InputType()
export class PageViewWhereInput {
    @Field(() => [PageViewWhereInput], {nullable:true})
    AND?: Array<PageViewWhereInput>;
    @Field(() => [PageViewWhereInput], {nullable:true})
    OR?: Array<PageViewWhereInput>;
    @Field(() => [PageViewWhereInput], {nullable:true})
    NOT?: Array<PageViewWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    pageId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    userId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    sessionId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => ExitPageScalarRelationFilter, {nullable:true})
    page?: InstanceType<typeof ExitPageScalarRelationFilter>;
    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserNullableScalarRelationFilter>;
}

@ObjectType()
export class PageView {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => String, {nullable:true})
    userId!: string | null;
    @Field(() => String, {nullable:true})
    sessionId!: string | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => ExitPage, {nullable:false})
    page?: InstanceType<typeof ExitPage>;
    @Field(() => User, {nullable:true})
    user?: InstanceType<typeof User> | null;
}

@ArgsType()
export class UpdateManyPageViewArgs {
    @Field(() => PageViewUpdateManyMutationInput, {nullable:false})
    @Type(() => PageViewUpdateManyMutationInput)
    data!: InstanceType<typeof PageViewUpdateManyMutationInput>;
    @Field(() => PageViewWhereInput, {nullable:true})
    @Type(() => PageViewWhereInput)
    where?: InstanceType<typeof PageViewWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOnePageViewArgs {
    @Field(() => PageViewUpdateInput, {nullable:false})
    @Type(() => PageViewUpdateInput)
    data!: InstanceType<typeof PageViewUpdateInput>;
    @Field(() => PageViewWhereUniqueInput, {nullable:false})
    @Type(() => PageViewWhereUniqueInput)
    where!: Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOnePageViewArgs {
    @Field(() => PageViewWhereUniqueInput, {nullable:false})
    @Type(() => PageViewWhereUniqueInput)
    where!: Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>;
    @Field(() => PageViewCreateInput, {nullable:false})
    @Type(() => PageViewCreateInput)
    create!: InstanceType<typeof PageViewCreateInput>;
    @Field(() => PageViewUpdateInput, {nullable:false})
    @Type(() => PageViewUpdateInput)
    update!: InstanceType<typeof PageViewUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class BoolFieldUpdateOperationsInput {
    @Field(() => Boolean, {nullable:true})
    set?: boolean;
}

@InputType()
export class BoolFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class BoolNullableFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolNullableFilter>;
}

@InputType()
export class BoolNullableWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedBoolNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedBoolNullableFilter>;
    @Field(() => NestedBoolNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedBoolNullableFilter>;
}

@InputType()
export class BoolWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _min?: InstanceType<typeof NestedBoolFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class DateTimeFieldUpdateOperationsInput {
    @Field(() => Date, {nullable:true})
    set?: Date | string;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class EnumReactionTypeFieldUpdateOperationsInput {
    @Field(() => ReactionType, {nullable:true})
    set?: `${ReactionType}`;
}

@InputType()
export class EnumReactionTypeFilter {
    @Field(() => ReactionType, {nullable:true})
    equals?: `${ReactionType}`;
    @Field(() => [ReactionType], {nullable:true})
    in?: Array<`${ReactionType}`>;
    @Field(() => [ReactionType], {nullable:true})
    notIn?: Array<`${ReactionType}`>;
    @Field(() => NestedEnumReactionTypeFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumReactionTypeFilter>;
}

@InputType()
export class EnumReactionTypeWithAggregatesFilter {
    @Field(() => ReactionType, {nullable:true})
    equals?: `${ReactionType}`;
    @Field(() => [ReactionType], {nullable:true})
    in?: Array<`${ReactionType}`>;
    @Field(() => [ReactionType], {nullable:true})
    notIn?: Array<`${ReactionType}`>;
    @Field(() => NestedEnumReactionTypeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumReactionTypeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumReactionTypeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumReactionTypeFilter>;
    @Field(() => NestedEnumReactionTypeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumReactionTypeFilter>;
}

@InputType()
export class EnumToneFieldUpdateOperationsInput {
    @Field(() => Tone, {nullable:true})
    set?: `${Tone}`;
}

@InputType()
export class EnumToneFilter {
    @Field(() => Tone, {nullable:true})
    equals?: `${Tone}`;
    @Field(() => [Tone], {nullable:true})
    in?: Array<`${Tone}`>;
    @Field(() => [Tone], {nullable:true})
    notIn?: Array<`${Tone}`>;
    @Field(() => NestedEnumToneFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumToneFilter>;
}

@InputType()
export class EnumToneWithAggregatesFilter {
    @Field(() => Tone, {nullable:true})
    equals?: `${Tone}`;
    @Field(() => [Tone], {nullable:true})
    in?: Array<`${Tone}`>;
    @Field(() => [Tone], {nullable:true})
    notIn?: Array<`${Tone}`>;
    @Field(() => NestedEnumToneWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumToneWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumToneFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumToneFilter>;
    @Field(() => NestedEnumToneFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumToneFilter>;
}

@InputType()
export class IntFieldUpdateOperationsInput {
    @Field(() => Int, {nullable:true})
    set?: number;
    @Field(() => Int, {nullable:true})
    increment?: number;
    @Field(() => Int, {nullable:true})
    decrement?: number;
    @Field(() => Int, {nullable:true})
    multiply?: number;
    @Field(() => Int, {nullable:true})
    divide?: number;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class JsonFilter {
    @Field(() => GraphQLJSON, {nullable:true})
    equals?: any;
    @Field(() => String, {nullable:true})
    path?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: `${QueryMode}`;
    @Field(() => String, {nullable:true})
    string_contains?: string;
    @Field(() => String, {nullable:true})
    string_starts_with?: string;
    @Field(() => String, {nullable:true})
    string_ends_with?: string;
    @Field(() => GraphQLJSON, {nullable:true})
    array_starts_with?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    array_ends_with?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    array_contains?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    lt?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    lte?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    gt?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    gte?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    not?: any;
}

@InputType()
export class JsonWithAggregatesFilter {
    @Field(() => GraphQLJSON, {nullable:true})
    equals?: any;
    @Field(() => String, {nullable:true})
    path?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: `${QueryMode}`;
    @Field(() => String, {nullable:true})
    string_contains?: string;
    @Field(() => String, {nullable:true})
    string_starts_with?: string;
    @Field(() => String, {nullable:true})
    string_ends_with?: string;
    @Field(() => GraphQLJSON, {nullable:true})
    array_starts_with?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    array_ends_with?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    array_contains?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    lt?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    lte?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    gt?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    gte?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    not?: any;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedJsonFilter, {nullable:true})
    _min?: InstanceType<typeof NestedJsonFilter>;
    @Field(() => NestedJsonFilter, {nullable:true})
    _max?: InstanceType<typeof NestedJsonFilter>;
}

@InputType()
export class NestedBoolFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedBoolNullableFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolNullableFilter>;
}

@InputType()
export class NestedBoolNullableWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedBoolNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedBoolNullableFilter>;
    @Field(() => NestedBoolNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedBoolNullableFilter>;
}

@InputType()
export class NestedBoolWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _min?: InstanceType<typeof NestedBoolFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedDateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedDateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedEnumReactionTypeFilter {
    @Field(() => ReactionType, {nullable:true})
    equals?: `${ReactionType}`;
    @Field(() => [ReactionType], {nullable:true})
    in?: Array<`${ReactionType}`>;
    @Field(() => [ReactionType], {nullable:true})
    notIn?: Array<`${ReactionType}`>;
    @Field(() => NestedEnumReactionTypeFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumReactionTypeFilter>;
}

@InputType()
export class NestedEnumReactionTypeWithAggregatesFilter {
    @Field(() => ReactionType, {nullable:true})
    equals?: `${ReactionType}`;
    @Field(() => [ReactionType], {nullable:true})
    in?: Array<`${ReactionType}`>;
    @Field(() => [ReactionType], {nullable:true})
    notIn?: Array<`${ReactionType}`>;
    @Field(() => NestedEnumReactionTypeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumReactionTypeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumReactionTypeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumReactionTypeFilter>;
    @Field(() => NestedEnumReactionTypeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumReactionTypeFilter>;
}

@InputType()
export class NestedEnumToneFilter {
    @Field(() => Tone, {nullable:true})
    equals?: `${Tone}`;
    @Field(() => [Tone], {nullable:true})
    in?: Array<`${Tone}`>;
    @Field(() => [Tone], {nullable:true})
    notIn?: Array<`${Tone}`>;
    @Field(() => NestedEnumToneFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumToneFilter>;
}

@InputType()
export class NestedEnumToneWithAggregatesFilter {
    @Field(() => Tone, {nullable:true})
    equals?: `${Tone}`;
    @Field(() => [Tone], {nullable:true})
    in?: Array<`${Tone}`>;
    @Field(() => [Tone], {nullable:true})
    notIn?: Array<`${Tone}`>;
    @Field(() => NestedEnumToneWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumToneWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumToneFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumToneFilter>;
    @Field(() => NestedEnumToneFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumToneFilter>;
}

@InputType()
export class NestedFloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedIntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedIntNullableFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedJsonFilter {
    @Field(() => GraphQLJSON, {nullable:true})
    equals?: any;
    @Field(() => String, {nullable:true})
    path?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: `${QueryMode}`;
    @Field(() => String, {nullable:true})
    string_contains?: string;
    @Field(() => String, {nullable:true})
    string_starts_with?: string;
    @Field(() => String, {nullable:true})
    string_ends_with?: string;
    @Field(() => GraphQLJSON, {nullable:true})
    array_starts_with?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    array_ends_with?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    array_contains?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    lt?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    lte?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    gt?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    gte?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    not?: any;
}

@InputType()
export class NestedStringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => String, {nullable:true})
    search?: string;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => String, {nullable:true})
    search?: string;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => String, {nullable:true})
    search?: string;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => String, {nullable:true})
    search?: string;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NullableBoolFieldUpdateOperationsInput {
    @Field(() => Boolean, {nullable:true})
    set?: boolean;
}

@InputType()
export class NullableStringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class SortOrderInput {
    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;
    @Field(() => NullsOrder, {nullable:true})
    nulls?: `${NullsOrder}`;
}

@InputType()
export class StringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => String, {nullable:true})
    search?: string;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => String, {nullable:true})
    search?: string;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => String, {nullable:true})
    search?: string;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => String, {nullable:true})
    search?: string;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@ObjectType()
export class AggregateReaction {
    @Field(() => ReactionCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ReactionCountAggregate>;
    @Field(() => ReactionMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ReactionMinAggregate>;
    @Field(() => ReactionMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ReactionMaxAggregate>;
}

@ArgsType()
export class CreateManyReactionArgs {
    @Field(() => [ReactionCreateManyInput], {nullable:false})
    @Type(() => ReactionCreateManyInput)
    data!: Array<ReactionCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneReactionArgs {
    @Field(() => ReactionCreateInput, {nullable:false})
    @Type(() => ReactionCreateInput)
    data!: InstanceType<typeof ReactionCreateInput>;
}

@ArgsType()
export class DeleteManyReactionArgs {
    @Field(() => ReactionWhereInput, {nullable:true})
    @Type(() => ReactionWhereInput)
    where?: InstanceType<typeof ReactionWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneReactionArgs {
    @Field(() => ReactionWhereUniqueInput, {nullable:false})
    @Type(() => ReactionWhereUniqueInput)
    where!: Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstReactionOrThrowArgs {
    @Field(() => ReactionWhereInput, {nullable:true})
    @Type(() => ReactionWhereInput)
    where?: InstanceType<typeof ReactionWhereInput>;
    @Field(() => [ReactionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReactionOrderByWithRelationInput>;
    @Field(() => ReactionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ReactionScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ReactionScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstReactionArgs {
    @Field(() => ReactionWhereInput, {nullable:true})
    @Type(() => ReactionWhereInput)
    where?: InstanceType<typeof ReactionWhereInput>;
    @Field(() => [ReactionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReactionOrderByWithRelationInput>;
    @Field(() => ReactionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ReactionScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ReactionScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyReactionArgs {
    @Field(() => ReactionWhereInput, {nullable:true})
    @Type(() => ReactionWhereInput)
    where?: InstanceType<typeof ReactionWhereInput>;
    @Field(() => [ReactionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReactionOrderByWithRelationInput>;
    @Field(() => ReactionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ReactionScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ReactionScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueReactionOrThrowArgs {
    @Field(() => ReactionWhereUniqueInput, {nullable:false})
    @Type(() => ReactionWhereUniqueInput)
    where!: Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueReactionArgs {
    @Field(() => ReactionWhereUniqueInput, {nullable:false})
    @Type(() => ReactionWhereUniqueInput)
    where!: Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>;
}

@ArgsType()
export class ReactionAggregateArgs {
    @Field(() => ReactionWhereInput, {nullable:true})
    @Type(() => ReactionWhereInput)
    where?: InstanceType<typeof ReactionWhereInput>;
    @Field(() => [ReactionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReactionOrderByWithRelationInput>;
    @Field(() => ReactionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ReactionCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ReactionCountAggregateInput>;
    @Field(() => ReactionMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ReactionMinAggregateInput>;
    @Field(() => ReactionMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ReactionMaxAggregateInput>;
}

@InputType()
export class ReactionCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    pageId?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    type?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ReactionCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    pageId!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    type!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ReactionCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class ReactionCreateManyPageInputEnvelope {
    @Field(() => [ReactionCreateManyPageInput], {nullable:false})
    @Type(() => ReactionCreateManyPageInput)
    data!: Array<ReactionCreateManyPageInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ReactionCreateManyPageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => ReactionType, {nullable:false})
    type!: `${ReactionType}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class ReactionCreateManyUserInputEnvelope {
    @Field(() => [ReactionCreateManyUserInput], {nullable:false})
    @Type(() => ReactionCreateManyUserInput)
    data!: Array<ReactionCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ReactionCreateManyUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => ReactionType, {nullable:false})
    type!: `${ReactionType}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class ReactionCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => ReactionType, {nullable:false})
    type!: `${ReactionType}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class ReactionCreateNestedManyWithoutPageInput {
    @Field(() => [ReactionCreateWithoutPageInput], {nullable:true})
    @Type(() => ReactionCreateWithoutPageInput)
    create?: Array<ReactionCreateWithoutPageInput>;
    @Field(() => [ReactionCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => ReactionCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<ReactionCreateOrConnectWithoutPageInput>;
    @Field(() => ReactionCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => ReactionCreateManyPageInputEnvelope)
    createMany?: InstanceType<typeof ReactionCreateManyPageInputEnvelope>;
    @Field(() => [ReactionWhereUniqueInput], {nullable:true})
    @Type(() => ReactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>>;
}

@InputType()
export class ReactionCreateNestedManyWithoutUserInput {
    @Field(() => [ReactionCreateWithoutUserInput], {nullable:true})
    @Type(() => ReactionCreateWithoutUserInput)
    create?: Array<ReactionCreateWithoutUserInput>;
    @Field(() => [ReactionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReactionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ReactionCreateOrConnectWithoutUserInput>;
    @Field(() => ReactionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReactionCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof ReactionCreateManyUserInputEnvelope>;
    @Field(() => [ReactionWhereUniqueInput], {nullable:true})
    @Type(() => ReactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>>;
}

@InputType()
export class ReactionCreateOrConnectWithoutPageInput {
    @Field(() => ReactionWhereUniqueInput, {nullable:false})
    @Type(() => ReactionWhereUniqueInput)
    where!: Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>;
    @Field(() => ReactionCreateWithoutPageInput, {nullable:false})
    @Type(() => ReactionCreateWithoutPageInput)
    create!: InstanceType<typeof ReactionCreateWithoutPageInput>;
}

@InputType()
export class ReactionCreateOrConnectWithoutUserInput {
    @Field(() => ReactionWhereUniqueInput, {nullable:false})
    @Type(() => ReactionWhereUniqueInput)
    where!: Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>;
    @Field(() => ReactionCreateWithoutUserInput, {nullable:false})
    @Type(() => ReactionCreateWithoutUserInput)
    create!: InstanceType<typeof ReactionCreateWithoutUserInput>;
}

@InputType()
export class ReactionCreateWithoutPageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => ReactionType, {nullable:false})
    type!: `${ReactionType}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutReactionsInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutReactionsInput>;
}

@InputType()
export class ReactionCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => ReactionType, {nullable:false})
    type!: `${ReactionType}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => ExitPageCreateNestedOneWithoutReactionsInput, {nullable:false})
    page!: InstanceType<typeof ExitPageCreateNestedOneWithoutReactionsInput>;
}

@InputType()
export class ReactionCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => ReactionType, {nullable:false})
    type!: `${ReactionType}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => ExitPageCreateNestedOneWithoutReactionsInput, {nullable:false})
    page!: InstanceType<typeof ExitPageCreateNestedOneWithoutReactionsInput>;
    @Field(() => UserCreateNestedOneWithoutReactionsInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutReactionsInput>;
}

@ArgsType()
export class ReactionGroupByArgs {
    @Field(() => ReactionWhereInput, {nullable:true})
    @Type(() => ReactionWhereInput)
    where?: InstanceType<typeof ReactionWhereInput>;
    @Field(() => [ReactionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ReactionOrderByWithAggregationInput>;
    @Field(() => [ReactionScalarFieldEnum], {nullable:false})
    by!: Array<`${ReactionScalarFieldEnum}`>;
    @Field(() => ReactionScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ReactionScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ReactionCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ReactionCountAggregateInput>;
    @Field(() => ReactionMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ReactionMinAggregateInput>;
    @Field(() => ReactionMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ReactionMaxAggregateInput>;
}

@ObjectType()
export class ReactionGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => ReactionType, {nullable:false})
    type!: `${ReactionType}`;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => ReactionCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ReactionCountAggregate>;
    @Field(() => ReactionMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ReactionMinAggregate>;
    @Field(() => ReactionMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ReactionMaxAggregate>;
}

@InputType()
export class ReactionListRelationFilter {
    @Field(() => ReactionWhereInput, {nullable:true})
    every?: InstanceType<typeof ReactionWhereInput>;
    @Field(() => ReactionWhereInput, {nullable:true})
    some?: InstanceType<typeof ReactionWhereInput>;
    @Field(() => ReactionWhereInput, {nullable:true})
    none?: InstanceType<typeof ReactionWhereInput>;
}

@InputType()
export class ReactionMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    pageId?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    type?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class ReactionMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    pageId?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => ReactionType, {nullable:true})
    type?: `${ReactionType}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class ReactionMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class ReactionMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    pageId?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    type?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class ReactionMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    pageId?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => ReactionType, {nullable:true})
    type?: `${ReactionType}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class ReactionMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class ReactionOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class ReactionOrderByRelevanceInput {
    @Field(() => [ReactionOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${ReactionOrderByRelevanceFieldEnum}`>;
    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;
    @Field(() => String, {nullable:false})
    search!: string;
}

@InputType()
export class ReactionOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    userId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => ReactionCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ReactionCountOrderByAggregateInput>;
    @Field(() => ReactionMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ReactionMaxOrderByAggregateInput>;
    @Field(() => ReactionMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ReactionMinOrderByAggregateInput>;
}

@InputType()
export class ReactionOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    userId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => ExitPageOrderByWithRelationInput, {nullable:true})
    page?: InstanceType<typeof ExitPageOrderByWithRelationInput>;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => ReactionOrderByRelevanceInput, {nullable:true})
    _relevance?: InstanceType<typeof ReactionOrderByRelevanceInput>;
}

@InputType()
export class ReactionScalarWhereWithAggregatesInput {
    @Field(() => [ReactionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ReactionScalarWhereWithAggregatesInput>;
    @Field(() => [ReactionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ReactionScalarWhereWithAggregatesInput>;
    @Field(() => [ReactionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ReactionScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    pageId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => EnumReactionTypeWithAggregatesFilter, {nullable:true})
    type?: InstanceType<typeof EnumReactionTypeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class ReactionScalarWhereInput {
    @Field(() => [ReactionScalarWhereInput], {nullable:true})
    AND?: Array<ReactionScalarWhereInput>;
    @Field(() => [ReactionScalarWhereInput], {nullable:true})
    OR?: Array<ReactionScalarWhereInput>;
    @Field(() => [ReactionScalarWhereInput], {nullable:true})
    NOT?: Array<ReactionScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    pageId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    userId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => EnumReactionTypeFilter, {nullable:true})
    type?: InstanceType<typeof EnumReactionTypeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class ReactionUncheckedCreateNestedManyWithoutPageInput {
    @Field(() => [ReactionCreateWithoutPageInput], {nullable:true})
    @Type(() => ReactionCreateWithoutPageInput)
    create?: Array<ReactionCreateWithoutPageInput>;
    @Field(() => [ReactionCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => ReactionCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<ReactionCreateOrConnectWithoutPageInput>;
    @Field(() => ReactionCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => ReactionCreateManyPageInputEnvelope)
    createMany?: InstanceType<typeof ReactionCreateManyPageInputEnvelope>;
    @Field(() => [ReactionWhereUniqueInput], {nullable:true})
    @Type(() => ReactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>>;
}

@InputType()
export class ReactionUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [ReactionCreateWithoutUserInput], {nullable:true})
    @Type(() => ReactionCreateWithoutUserInput)
    create?: Array<ReactionCreateWithoutUserInput>;
    @Field(() => [ReactionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReactionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ReactionCreateOrConnectWithoutUserInput>;
    @Field(() => ReactionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReactionCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof ReactionCreateManyUserInputEnvelope>;
    @Field(() => [ReactionWhereUniqueInput], {nullable:true})
    @Type(() => ReactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>>;
}

@InputType()
export class ReactionUncheckedCreateWithoutPageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => ReactionType, {nullable:false})
    type!: `${ReactionType}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class ReactionUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => ReactionType, {nullable:false})
    type!: `${ReactionType}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class ReactionUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => ReactionType, {nullable:false})
    type!: `${ReactionType}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class ReactionUncheckedUpdateManyWithoutPageNestedInput {
    @Field(() => [ReactionCreateWithoutPageInput], {nullable:true})
    @Type(() => ReactionCreateWithoutPageInput)
    create?: Array<ReactionCreateWithoutPageInput>;
    @Field(() => [ReactionCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => ReactionCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<ReactionCreateOrConnectWithoutPageInput>;
    @Field(() => [ReactionUpsertWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => ReactionUpsertWithWhereUniqueWithoutPageInput)
    upsert?: Array<ReactionUpsertWithWhereUniqueWithoutPageInput>;
    @Field(() => ReactionCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => ReactionCreateManyPageInputEnvelope)
    createMany?: InstanceType<typeof ReactionCreateManyPageInputEnvelope>;
    @Field(() => [ReactionWhereUniqueInput], {nullable:true})
    @Type(() => ReactionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>>;
    @Field(() => [ReactionWhereUniqueInput], {nullable:true})
    @Type(() => ReactionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>>;
    @Field(() => [ReactionWhereUniqueInput], {nullable:true})
    @Type(() => ReactionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>>;
    @Field(() => [ReactionWhereUniqueInput], {nullable:true})
    @Type(() => ReactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>>;
    @Field(() => [ReactionUpdateWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => ReactionUpdateWithWhereUniqueWithoutPageInput)
    update?: Array<ReactionUpdateWithWhereUniqueWithoutPageInput>;
    @Field(() => [ReactionUpdateManyWithWhereWithoutPageInput], {nullable:true})
    @Type(() => ReactionUpdateManyWithWhereWithoutPageInput)
    updateMany?: Array<ReactionUpdateManyWithWhereWithoutPageInput>;
    @Field(() => [ReactionScalarWhereInput], {nullable:true})
    @Type(() => ReactionScalarWhereInput)
    deleteMany?: Array<ReactionScalarWhereInput>;
}

@InputType()
export class ReactionUncheckedUpdateManyWithoutPageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumReactionTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumReactionTypeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ReactionUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [ReactionCreateWithoutUserInput], {nullable:true})
    @Type(() => ReactionCreateWithoutUserInput)
    create?: Array<ReactionCreateWithoutUserInput>;
    @Field(() => [ReactionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReactionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ReactionCreateOrConnectWithoutUserInput>;
    @Field(() => [ReactionUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReactionUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ReactionUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => ReactionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReactionCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof ReactionCreateManyUserInputEnvelope>;
    @Field(() => [ReactionWhereUniqueInput], {nullable:true})
    @Type(() => ReactionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>>;
    @Field(() => [ReactionWhereUniqueInput], {nullable:true})
    @Type(() => ReactionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>>;
    @Field(() => [ReactionWhereUniqueInput], {nullable:true})
    @Type(() => ReactionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>>;
    @Field(() => [ReactionWhereUniqueInput], {nullable:true})
    @Type(() => ReactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>>;
    @Field(() => [ReactionUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReactionUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ReactionUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [ReactionUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ReactionUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ReactionUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [ReactionScalarWhereInput], {nullable:true})
    @Type(() => ReactionScalarWhereInput)
    deleteMany?: Array<ReactionScalarWhereInput>;
}

@InputType()
export class ReactionUncheckedUpdateManyWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumReactionTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumReactionTypeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ReactionUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumReactionTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumReactionTypeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ReactionUncheckedUpdateWithoutPageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumReactionTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumReactionTypeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ReactionUncheckedUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumReactionTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumReactionTypeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ReactionUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumReactionTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumReactionTypeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ReactionUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumReactionTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumReactionTypeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ReactionUpdateManyWithWhereWithoutPageInput {
    @Field(() => ReactionScalarWhereInput, {nullable:false})
    @Type(() => ReactionScalarWhereInput)
    where!: InstanceType<typeof ReactionScalarWhereInput>;
    @Field(() => ReactionUpdateManyMutationInput, {nullable:false})
    @Type(() => ReactionUpdateManyMutationInput)
    data!: InstanceType<typeof ReactionUpdateManyMutationInput>;
}

@InputType()
export class ReactionUpdateManyWithWhereWithoutUserInput {
    @Field(() => ReactionScalarWhereInput, {nullable:false})
    @Type(() => ReactionScalarWhereInput)
    where!: InstanceType<typeof ReactionScalarWhereInput>;
    @Field(() => ReactionUpdateManyMutationInput, {nullable:false})
    @Type(() => ReactionUpdateManyMutationInput)
    data!: InstanceType<typeof ReactionUpdateManyMutationInput>;
}

@InputType()
export class ReactionUpdateManyWithoutPageNestedInput {
    @Field(() => [ReactionCreateWithoutPageInput], {nullable:true})
    @Type(() => ReactionCreateWithoutPageInput)
    create?: Array<ReactionCreateWithoutPageInput>;
    @Field(() => [ReactionCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => ReactionCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<ReactionCreateOrConnectWithoutPageInput>;
    @Field(() => [ReactionUpsertWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => ReactionUpsertWithWhereUniqueWithoutPageInput)
    upsert?: Array<ReactionUpsertWithWhereUniqueWithoutPageInput>;
    @Field(() => ReactionCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => ReactionCreateManyPageInputEnvelope)
    createMany?: InstanceType<typeof ReactionCreateManyPageInputEnvelope>;
    @Field(() => [ReactionWhereUniqueInput], {nullable:true})
    @Type(() => ReactionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>>;
    @Field(() => [ReactionWhereUniqueInput], {nullable:true})
    @Type(() => ReactionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>>;
    @Field(() => [ReactionWhereUniqueInput], {nullable:true})
    @Type(() => ReactionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>>;
    @Field(() => [ReactionWhereUniqueInput], {nullable:true})
    @Type(() => ReactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>>;
    @Field(() => [ReactionUpdateWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => ReactionUpdateWithWhereUniqueWithoutPageInput)
    update?: Array<ReactionUpdateWithWhereUniqueWithoutPageInput>;
    @Field(() => [ReactionUpdateManyWithWhereWithoutPageInput], {nullable:true})
    @Type(() => ReactionUpdateManyWithWhereWithoutPageInput)
    updateMany?: Array<ReactionUpdateManyWithWhereWithoutPageInput>;
    @Field(() => [ReactionScalarWhereInput], {nullable:true})
    @Type(() => ReactionScalarWhereInput)
    deleteMany?: Array<ReactionScalarWhereInput>;
}

@InputType()
export class ReactionUpdateManyWithoutUserNestedInput {
    @Field(() => [ReactionCreateWithoutUserInput], {nullable:true})
    @Type(() => ReactionCreateWithoutUserInput)
    create?: Array<ReactionCreateWithoutUserInput>;
    @Field(() => [ReactionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReactionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ReactionCreateOrConnectWithoutUserInput>;
    @Field(() => [ReactionUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReactionUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ReactionUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => ReactionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReactionCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof ReactionCreateManyUserInputEnvelope>;
    @Field(() => [ReactionWhereUniqueInput], {nullable:true})
    @Type(() => ReactionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>>;
    @Field(() => [ReactionWhereUniqueInput], {nullable:true})
    @Type(() => ReactionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>>;
    @Field(() => [ReactionWhereUniqueInput], {nullable:true})
    @Type(() => ReactionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>>;
    @Field(() => [ReactionWhereUniqueInput], {nullable:true})
    @Type(() => ReactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>>;
    @Field(() => [ReactionUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReactionUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ReactionUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [ReactionUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ReactionUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ReactionUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [ReactionScalarWhereInput], {nullable:true})
    @Type(() => ReactionScalarWhereInput)
    deleteMany?: Array<ReactionScalarWhereInput>;
}

@InputType()
export class ReactionUpdateWithWhereUniqueWithoutPageInput {
    @Field(() => ReactionWhereUniqueInput, {nullable:false})
    @Type(() => ReactionWhereUniqueInput)
    where!: Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>;
    @Field(() => ReactionUpdateWithoutPageInput, {nullable:false})
    @Type(() => ReactionUpdateWithoutPageInput)
    data!: InstanceType<typeof ReactionUpdateWithoutPageInput>;
}

@InputType()
export class ReactionUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => ReactionWhereUniqueInput, {nullable:false})
    @Type(() => ReactionWhereUniqueInput)
    where!: Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>;
    @Field(() => ReactionUpdateWithoutUserInput, {nullable:false})
    @Type(() => ReactionUpdateWithoutUserInput)
    data!: InstanceType<typeof ReactionUpdateWithoutUserInput>;
}

@InputType()
export class ReactionUpdateWithoutPageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumReactionTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumReactionTypeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutReactionsNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutReactionsNestedInput>;
}

@InputType()
export class ReactionUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumReactionTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumReactionTypeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ExitPageUpdateOneRequiredWithoutReactionsNestedInput, {nullable:true})
    page?: InstanceType<typeof ExitPageUpdateOneRequiredWithoutReactionsNestedInput>;
}

@InputType()
export class ReactionUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumReactionTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumReactionTypeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ExitPageUpdateOneRequiredWithoutReactionsNestedInput, {nullable:true})
    page?: InstanceType<typeof ExitPageUpdateOneRequiredWithoutReactionsNestedInput>;
    @Field(() => UserUpdateOneWithoutReactionsNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutReactionsNestedInput>;
}

@InputType()
export class ReactionUpsertWithWhereUniqueWithoutPageInput {
    @Field(() => ReactionWhereUniqueInput, {nullable:false})
    @Type(() => ReactionWhereUniqueInput)
    where!: Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>;
    @Field(() => ReactionUpdateWithoutPageInput, {nullable:false})
    @Type(() => ReactionUpdateWithoutPageInput)
    update!: InstanceType<typeof ReactionUpdateWithoutPageInput>;
    @Field(() => ReactionCreateWithoutPageInput, {nullable:false})
    @Type(() => ReactionCreateWithoutPageInput)
    create!: InstanceType<typeof ReactionCreateWithoutPageInput>;
}

@InputType()
export class ReactionUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => ReactionWhereUniqueInput, {nullable:false})
    @Type(() => ReactionWhereUniqueInput)
    where!: Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>;
    @Field(() => ReactionUpdateWithoutUserInput, {nullable:false})
    @Type(() => ReactionUpdateWithoutUserInput)
    update!: InstanceType<typeof ReactionUpdateWithoutUserInput>;
    @Field(() => ReactionCreateWithoutUserInput, {nullable:false})
    @Type(() => ReactionCreateWithoutUserInput)
    create!: InstanceType<typeof ReactionCreateWithoutUserInput>;
}

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
    pageId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    userId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => EnumReactionTypeFilter, {nullable:true})
    type?: InstanceType<typeof EnumReactionTypeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => ExitPageScalarRelationFilter, {nullable:true})
    page?: InstanceType<typeof ExitPageScalarRelationFilter>;
    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserNullableScalarRelationFilter>;
}

@InputType()
export class ReactionWhereInput {
    @Field(() => [ReactionWhereInput], {nullable:true})
    AND?: Array<ReactionWhereInput>;
    @Field(() => [ReactionWhereInput], {nullable:true})
    OR?: Array<ReactionWhereInput>;
    @Field(() => [ReactionWhereInput], {nullable:true})
    NOT?: Array<ReactionWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    pageId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    userId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => EnumReactionTypeFilter, {nullable:true})
    type?: InstanceType<typeof EnumReactionTypeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => ExitPageScalarRelationFilter, {nullable:true})
    page?: InstanceType<typeof ExitPageScalarRelationFilter>;
    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserNullableScalarRelationFilter>;
}

@ObjectType()
export class Reaction {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => String, {nullable:true})
    userId!: string | null;
    @Field(() => ReactionType, {nullable:false})
    type!: `${ReactionType}`;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => ExitPage, {nullable:false})
    page?: InstanceType<typeof ExitPage>;
    @Field(() => User, {nullable:true})
    user?: InstanceType<typeof User> | null;
}

@ArgsType()
export class UpdateManyReactionArgs {
    @Field(() => ReactionUpdateManyMutationInput, {nullable:false})
    @Type(() => ReactionUpdateManyMutationInput)
    data!: InstanceType<typeof ReactionUpdateManyMutationInput>;
    @Field(() => ReactionWhereInput, {nullable:true})
    @Type(() => ReactionWhereInput)
    where?: InstanceType<typeof ReactionWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneReactionArgs {
    @Field(() => ReactionUpdateInput, {nullable:false})
    @Type(() => ReactionUpdateInput)
    data!: InstanceType<typeof ReactionUpdateInput>;
    @Field(() => ReactionWhereUniqueInput, {nullable:false})
    @Type(() => ReactionWhereUniqueInput)
    where!: Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneReactionArgs {
    @Field(() => ReactionWhereUniqueInput, {nullable:false})
    @Type(() => ReactionWhereUniqueInput)
    where!: Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>;
    @Field(() => ReactionCreateInput, {nullable:false})
    @Type(() => ReactionCreateInput)
    create!: InstanceType<typeof ReactionCreateInput>;
    @Field(() => ReactionUpdateInput, {nullable:false})
    @Type(() => ReactionUpdateInput)
    update!: InstanceType<typeof ReactionUpdateInput>;
}

@ObjectType()
export class AggregateRefreshToken {
    @Field(() => RefreshTokenCountAggregate, {nullable:true})
    _count?: InstanceType<typeof RefreshTokenCountAggregate>;
    @Field(() => RefreshTokenMinAggregate, {nullable:true})
    _min?: InstanceType<typeof RefreshTokenMinAggregate>;
    @Field(() => RefreshTokenMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof RefreshTokenMaxAggregate>;
}

@ArgsType()
export class CreateManyRefreshTokenArgs {
    @Field(() => [RefreshTokenCreateManyInput], {nullable:false})
    @Type(() => RefreshTokenCreateManyInput)
    data!: Array<RefreshTokenCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneRefreshTokenArgs {
    @Field(() => RefreshTokenCreateInput, {nullable:false})
    @Type(() => RefreshTokenCreateInput)
    data!: InstanceType<typeof RefreshTokenCreateInput>;
}

@ArgsType()
export class DeleteManyRefreshTokenArgs {
    @Field(() => RefreshTokenWhereInput, {nullable:true})
    @Type(() => RefreshTokenWhereInput)
    where?: InstanceType<typeof RefreshTokenWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneRefreshTokenArgs {
    @Field(() => RefreshTokenWhereUniqueInput, {nullable:false})
    @Type(() => RefreshTokenWhereUniqueInput)
    where!: Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>;
}

@ArgsType()
export class FindFirstRefreshTokenOrThrowArgs {
    @Field(() => RefreshTokenWhereInput, {nullable:true})
    @Type(() => RefreshTokenWhereInput)
    where?: InstanceType<typeof RefreshTokenWhereInput>;
    @Field(() => [RefreshTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RefreshTokenOrderByWithRelationInput>;
    @Field(() => RefreshTokenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RefreshTokenScalarFieldEnum], {nullable:true})
    distinct?: Array<`${RefreshTokenScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstRefreshTokenArgs {
    @Field(() => RefreshTokenWhereInput, {nullable:true})
    @Type(() => RefreshTokenWhereInput)
    where?: InstanceType<typeof RefreshTokenWhereInput>;
    @Field(() => [RefreshTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RefreshTokenOrderByWithRelationInput>;
    @Field(() => RefreshTokenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RefreshTokenScalarFieldEnum], {nullable:true})
    distinct?: Array<`${RefreshTokenScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyRefreshTokenArgs {
    @Field(() => RefreshTokenWhereInput, {nullable:true})
    @Type(() => RefreshTokenWhereInput)
    where?: InstanceType<typeof RefreshTokenWhereInput>;
    @Field(() => [RefreshTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RefreshTokenOrderByWithRelationInput>;
    @Field(() => RefreshTokenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RefreshTokenScalarFieldEnum], {nullable:true})
    distinct?: Array<`${RefreshTokenScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueRefreshTokenOrThrowArgs {
    @Field(() => RefreshTokenWhereUniqueInput, {nullable:false})
    @Type(() => RefreshTokenWhereUniqueInput)
    where!: Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>;
}

@ArgsType()
export class FindUniqueRefreshTokenArgs {
    @Field(() => RefreshTokenWhereUniqueInput, {nullable:false})
    @Type(() => RefreshTokenWhereUniqueInput)
    where!: Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>;
}

@ArgsType()
export class RefreshTokenAggregateArgs {
    @Field(() => RefreshTokenWhereInput, {nullable:true})
    @Type(() => RefreshTokenWhereInput)
    where?: InstanceType<typeof RefreshTokenWhereInput>;
    @Field(() => [RefreshTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RefreshTokenOrderByWithRelationInput>;
    @Field(() => RefreshTokenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => RefreshTokenCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RefreshTokenCountAggregateInput>;
    @Field(() => RefreshTokenMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RefreshTokenMinAggregateInput>;
    @Field(() => RefreshTokenMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RefreshTokenMaxAggregateInput>;
}

@InputType()
export class RefreshTokenCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    token?: true;
    @Field(() => Boolean, {nullable:true})
    expiresAt?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class RefreshTokenCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    token!: number;
    @Field(() => Int, {nullable:false})
    expiresAt!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class RefreshTokenCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expiresAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class RefreshTokenCreateManyUserInputEnvelope {
    @Field(() => [RefreshTokenCreateManyUserInput], {nullable:false})
    @Type(() => RefreshTokenCreateManyUserInput)
    data!: Array<RefreshTokenCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class RefreshTokenCreateManyUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class RefreshTokenCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class RefreshTokenCreateNestedManyWithoutUserInput {
    @Field(() => [RefreshTokenCreateWithoutUserInput], {nullable:true})
    @Type(() => RefreshTokenCreateWithoutUserInput)
    create?: Array<RefreshTokenCreateWithoutUserInput>;
    @Field(() => [RefreshTokenCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => RefreshTokenCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<RefreshTokenCreateOrConnectWithoutUserInput>;
    @Field(() => RefreshTokenCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => RefreshTokenCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof RefreshTokenCreateManyUserInputEnvelope>;
    @Field(() => [RefreshTokenWhereUniqueInput], {nullable:true})
    @Type(() => RefreshTokenWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>>;
}

@InputType()
export class RefreshTokenCreateOrConnectWithoutUserInput {
    @Field(() => RefreshTokenWhereUniqueInput, {nullable:false})
    @Type(() => RefreshTokenWhereUniqueInput)
    where!: Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>;
    @Field(() => RefreshTokenCreateWithoutUserInput, {nullable:false})
    @Type(() => RefreshTokenCreateWithoutUserInput)
    create!: InstanceType<typeof RefreshTokenCreateWithoutUserInput>;
}

@InputType()
export class RefreshTokenCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class RefreshTokenCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutTokensInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutTokensInput>;
}

@ArgsType()
export class RefreshTokenGroupByArgs {
    @Field(() => RefreshTokenWhereInput, {nullable:true})
    @Type(() => RefreshTokenWhereInput)
    where?: InstanceType<typeof RefreshTokenWhereInput>;
    @Field(() => [RefreshTokenOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RefreshTokenOrderByWithAggregationInput>;
    @Field(() => [RefreshTokenScalarFieldEnum], {nullable:false})
    by!: Array<`${RefreshTokenScalarFieldEnum}`>;
    @Field(() => RefreshTokenScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof RefreshTokenScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => RefreshTokenCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RefreshTokenCountAggregateInput>;
    @Field(() => RefreshTokenMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RefreshTokenMinAggregateInput>;
    @Field(() => RefreshTokenMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RefreshTokenMaxAggregateInput>;
}

@ObjectType()
export class RefreshTokenGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => RefreshTokenCountAggregate, {nullable:true})
    _count?: InstanceType<typeof RefreshTokenCountAggregate>;
    @Field(() => RefreshTokenMinAggregate, {nullable:true})
    _min?: InstanceType<typeof RefreshTokenMinAggregate>;
    @Field(() => RefreshTokenMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof RefreshTokenMaxAggregate>;
}

@InputType()
export class RefreshTokenListRelationFilter {
    @Field(() => RefreshTokenWhereInput, {nullable:true})
    every?: InstanceType<typeof RefreshTokenWhereInput>;
    @Field(() => RefreshTokenWhereInput, {nullable:true})
    some?: InstanceType<typeof RefreshTokenWhereInput>;
    @Field(() => RefreshTokenWhereInput, {nullable:true})
    none?: InstanceType<typeof RefreshTokenWhereInput>;
}

@InputType()
export class RefreshTokenMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    token?: true;
    @Field(() => Boolean, {nullable:true})
    expiresAt?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class RefreshTokenMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class RefreshTokenMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expiresAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class RefreshTokenMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    token?: true;
    @Field(() => Boolean, {nullable:true})
    expiresAt?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class RefreshTokenMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class RefreshTokenMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expiresAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class RefreshTokenOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class RefreshTokenOrderByRelevanceInput {
    @Field(() => [RefreshTokenOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${RefreshTokenOrderByRelevanceFieldEnum}`>;
    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;
    @Field(() => String, {nullable:false})
    search!: string;
}

@InputType()
export class RefreshTokenOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expiresAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => RefreshTokenCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RefreshTokenCountOrderByAggregateInput>;
    @Field(() => RefreshTokenMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RefreshTokenMaxOrderByAggregateInput>;
    @Field(() => RefreshTokenMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RefreshTokenMinOrderByAggregateInput>;
}

@InputType()
export class RefreshTokenOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expiresAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => RefreshTokenOrderByRelevanceInput, {nullable:true})
    _relevance?: InstanceType<typeof RefreshTokenOrderByRelevanceInput>;
}

@InputType()
export class RefreshTokenScalarWhereWithAggregatesInput {
    @Field(() => [RefreshTokenScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RefreshTokenScalarWhereWithAggregatesInput>;
    @Field(() => [RefreshTokenScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RefreshTokenScalarWhereWithAggregatesInput>;
    @Field(() => [RefreshTokenScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RefreshTokenScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    token?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class RefreshTokenScalarWhereInput {
    @Field(() => [RefreshTokenScalarWhereInput], {nullable:true})
    AND?: Array<RefreshTokenScalarWhereInput>;
    @Field(() => [RefreshTokenScalarWhereInput], {nullable:true})
    OR?: Array<RefreshTokenScalarWhereInput>;
    @Field(() => [RefreshTokenScalarWhereInput], {nullable:true})
    NOT?: Array<RefreshTokenScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    token?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class RefreshTokenUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [RefreshTokenCreateWithoutUserInput], {nullable:true})
    @Type(() => RefreshTokenCreateWithoutUserInput)
    create?: Array<RefreshTokenCreateWithoutUserInput>;
    @Field(() => [RefreshTokenCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => RefreshTokenCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<RefreshTokenCreateOrConnectWithoutUserInput>;
    @Field(() => RefreshTokenCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => RefreshTokenCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof RefreshTokenCreateManyUserInputEnvelope>;
    @Field(() => [RefreshTokenWhereUniqueInput], {nullable:true})
    @Type(() => RefreshTokenWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>>;
}

@InputType()
export class RefreshTokenUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class RefreshTokenUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class RefreshTokenUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [RefreshTokenCreateWithoutUserInput], {nullable:true})
    @Type(() => RefreshTokenCreateWithoutUserInput)
    create?: Array<RefreshTokenCreateWithoutUserInput>;
    @Field(() => [RefreshTokenCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => RefreshTokenCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<RefreshTokenCreateOrConnectWithoutUserInput>;
    @Field(() => [RefreshTokenUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => RefreshTokenUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<RefreshTokenUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => RefreshTokenCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => RefreshTokenCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof RefreshTokenCreateManyUserInputEnvelope>;
    @Field(() => [RefreshTokenWhereUniqueInput], {nullable:true})
    @Type(() => RefreshTokenWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [RefreshTokenWhereUniqueInput], {nullable:true})
    @Type(() => RefreshTokenWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [RefreshTokenWhereUniqueInput], {nullable:true})
    @Type(() => RefreshTokenWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [RefreshTokenWhereUniqueInput], {nullable:true})
    @Type(() => RefreshTokenWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [RefreshTokenUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => RefreshTokenUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<RefreshTokenUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [RefreshTokenUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => RefreshTokenUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<RefreshTokenUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [RefreshTokenScalarWhereInput], {nullable:true})
    @Type(() => RefreshTokenScalarWhereInput)
    deleteMany?: Array<RefreshTokenScalarWhereInput>;
}

@InputType()
export class RefreshTokenUncheckedUpdateManyWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class RefreshTokenUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class RefreshTokenUncheckedUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class RefreshTokenUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class RefreshTokenUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class RefreshTokenUpdateManyWithWhereWithoutUserInput {
    @Field(() => RefreshTokenScalarWhereInput, {nullable:false})
    @Type(() => RefreshTokenScalarWhereInput)
    where!: InstanceType<typeof RefreshTokenScalarWhereInput>;
    @Field(() => RefreshTokenUpdateManyMutationInput, {nullable:false})
    @Type(() => RefreshTokenUpdateManyMutationInput)
    data!: InstanceType<typeof RefreshTokenUpdateManyMutationInput>;
}

@InputType()
export class RefreshTokenUpdateManyWithoutUserNestedInput {
    @Field(() => [RefreshTokenCreateWithoutUserInput], {nullable:true})
    @Type(() => RefreshTokenCreateWithoutUserInput)
    create?: Array<RefreshTokenCreateWithoutUserInput>;
    @Field(() => [RefreshTokenCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => RefreshTokenCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<RefreshTokenCreateOrConnectWithoutUserInput>;
    @Field(() => [RefreshTokenUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => RefreshTokenUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<RefreshTokenUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => RefreshTokenCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => RefreshTokenCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof RefreshTokenCreateManyUserInputEnvelope>;
    @Field(() => [RefreshTokenWhereUniqueInput], {nullable:true})
    @Type(() => RefreshTokenWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [RefreshTokenWhereUniqueInput], {nullable:true})
    @Type(() => RefreshTokenWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [RefreshTokenWhereUniqueInput], {nullable:true})
    @Type(() => RefreshTokenWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [RefreshTokenWhereUniqueInput], {nullable:true})
    @Type(() => RefreshTokenWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [RefreshTokenUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => RefreshTokenUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<RefreshTokenUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [RefreshTokenUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => RefreshTokenUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<RefreshTokenUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [RefreshTokenScalarWhereInput], {nullable:true})
    @Type(() => RefreshTokenScalarWhereInput)
    deleteMany?: Array<RefreshTokenScalarWhereInput>;
}

@InputType()
export class RefreshTokenUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => RefreshTokenWhereUniqueInput, {nullable:false})
    @Type(() => RefreshTokenWhereUniqueInput)
    where!: Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>;
    @Field(() => RefreshTokenUpdateWithoutUserInput, {nullable:false})
    @Type(() => RefreshTokenUpdateWithoutUserInput)
    data!: InstanceType<typeof RefreshTokenUpdateWithoutUserInput>;
}

@InputType()
export class RefreshTokenUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class RefreshTokenUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutTokensNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutTokensNestedInput>;
}

@InputType()
export class RefreshTokenUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => RefreshTokenWhereUniqueInput, {nullable:false})
    @Type(() => RefreshTokenWhereUniqueInput)
    where!: Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>;
    @Field(() => RefreshTokenUpdateWithoutUserInput, {nullable:false})
    @Type(() => RefreshTokenUpdateWithoutUserInput)
    update!: InstanceType<typeof RefreshTokenUpdateWithoutUserInput>;
    @Field(() => RefreshTokenCreateWithoutUserInput, {nullable:false})
    @Type(() => RefreshTokenCreateWithoutUserInput)
    create!: InstanceType<typeof RefreshTokenCreateWithoutUserInput>;
}

@InputType()
export class RefreshTokenWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => [RefreshTokenWhereInput], {nullable:true})
    AND?: Array<RefreshTokenWhereInput>;
    @Field(() => [RefreshTokenWhereInput], {nullable:true})
    OR?: Array<RefreshTokenWhereInput>;
    @Field(() => [RefreshTokenWhereInput], {nullable:true})
    NOT?: Array<RefreshTokenWhereInput>;
    @Field(() => DateTimeFilter, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserScalarRelationFilter>;
}

@InputType()
export class RefreshTokenWhereInput {
    @Field(() => [RefreshTokenWhereInput], {nullable:true})
    AND?: Array<RefreshTokenWhereInput>;
    @Field(() => [RefreshTokenWhereInput], {nullable:true})
    OR?: Array<RefreshTokenWhereInput>;
    @Field(() => [RefreshTokenWhereInput], {nullable:true})
    NOT?: Array<RefreshTokenWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    token?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserScalarRelationFilter>;
}

@ObjectType()
export class RefreshToken {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expiresAt!: Date;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => User, {nullable:false})
    user?: InstanceType<typeof User>;
}

@ArgsType()
export class UpdateManyRefreshTokenArgs {
    @Field(() => RefreshTokenUpdateManyMutationInput, {nullable:false})
    @Type(() => RefreshTokenUpdateManyMutationInput)
    data!: InstanceType<typeof RefreshTokenUpdateManyMutationInput>;
    @Field(() => RefreshTokenWhereInput, {nullable:true})
    @Type(() => RefreshTokenWhereInput)
    where?: InstanceType<typeof RefreshTokenWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneRefreshTokenArgs {
    @Field(() => RefreshTokenUpdateInput, {nullable:false})
    @Type(() => RefreshTokenUpdateInput)
    data!: InstanceType<typeof RefreshTokenUpdateInput>;
    @Field(() => RefreshTokenWhereUniqueInput, {nullable:false})
    @Type(() => RefreshTokenWhereUniqueInput)
    where!: Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>;
}

@ArgsType()
export class UpsertOneRefreshTokenArgs {
    @Field(() => RefreshTokenWhereUniqueInput, {nullable:false})
    @Type(() => RefreshTokenWhereUniqueInput)
    where!: Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>;
    @Field(() => RefreshTokenCreateInput, {nullable:false})
    @Type(() => RefreshTokenCreateInput)
    create!: InstanceType<typeof RefreshTokenCreateInput>;
    @Field(() => RefreshTokenUpdateInput, {nullable:false})
    @Type(() => RefreshTokenUpdateInput)
    update!: InstanceType<typeof RefreshTokenUpdateInput>;
}

@ObjectType()
export class AggregateRole {
    @Field(() => RoleCountAggregate, {nullable:true})
    _count?: InstanceType<typeof RoleCountAggregate>;
    @Field(() => RoleMinAggregate, {nullable:true})
    _min?: InstanceType<typeof RoleMinAggregate>;
    @Field(() => RoleMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof RoleMaxAggregate>;
}

@ArgsType()
export class CreateManyRoleArgs {
    @Field(() => [RoleCreateManyInput], {nullable:false})
    @Type(() => RoleCreateManyInput)
    data!: Array<RoleCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneRoleArgs {
    @Field(() => RoleCreateInput, {nullable:false})
    @Type(() => RoleCreateInput)
    data!: InstanceType<typeof RoleCreateInput>;
}

@ArgsType()
export class DeleteManyRoleArgs {
    @Field(() => RoleWhereInput, {nullable:true})
    @Type(() => RoleWhereInput)
    where?: InstanceType<typeof RoleWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneRoleArgs {
    @Field(() => RoleWhereUniqueInput, {nullable:false})
    @Type(() => RoleWhereUniqueInput)
    where!: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class FindFirstRoleOrThrowArgs {
    @Field(() => RoleWhereInput, {nullable:true})
    @Type(() => RoleWhereInput)
    where?: InstanceType<typeof RoleWhereInput>;
    @Field(() => [RoleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RoleOrderByWithRelationInput>;
    @Field(() => RoleWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RoleScalarFieldEnum], {nullable:true})
    distinct?: Array<`${RoleScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstRoleArgs {
    @Field(() => RoleWhereInput, {nullable:true})
    @Type(() => RoleWhereInput)
    where?: InstanceType<typeof RoleWhereInput>;
    @Field(() => [RoleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RoleOrderByWithRelationInput>;
    @Field(() => RoleWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RoleScalarFieldEnum], {nullable:true})
    distinct?: Array<`${RoleScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyRoleArgs {
    @Field(() => RoleWhereInput, {nullable:true})
    @Type(() => RoleWhereInput)
    where?: InstanceType<typeof RoleWhereInput>;
    @Field(() => [RoleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RoleOrderByWithRelationInput>;
    @Field(() => RoleWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RoleScalarFieldEnum], {nullable:true})
    distinct?: Array<`${RoleScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueRoleOrThrowArgs {
    @Field(() => RoleWhereUniqueInput, {nullable:false})
    @Type(() => RoleWhereUniqueInput)
    where!: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class FindUniqueRoleArgs {
    @Field(() => RoleWhereUniqueInput, {nullable:false})
    @Type(() => RoleWhereUniqueInput)
    where!: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class RoleAggregateArgs {
    @Field(() => RoleWhereInput, {nullable:true})
    @Type(() => RoleWhereInput)
    where?: InstanceType<typeof RoleWhereInput>;
    @Field(() => [RoleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RoleOrderByWithRelationInput>;
    @Field(() => RoleWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => RoleCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RoleCountAggregateInput>;
    @Field(() => RoleMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RoleMinAggregateInput>;
    @Field(() => RoleMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RoleMaxAggregateInput>;
}

@InputType()
export class RoleCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class RoleCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class RoleCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
}

@ObjectType()
export class RoleCount {
    @Field(() => Int, {nullable:false})
    users?: number;
}

@InputType()
export class RoleCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
}

@InputType()
export class RoleCreateNestedManyWithoutUsersInput {
    @Field(() => [RoleCreateWithoutUsersInput], {nullable:true})
    @Type(() => RoleCreateWithoutUsersInput)
    create?: Array<RoleCreateWithoutUsersInput>;
    @Field(() => [RoleCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => RoleCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<RoleCreateOrConnectWithoutUsersInput>;
    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>>;
}

@InputType()
export class RoleCreateOrConnectWithoutUsersInput {
    @Field(() => RoleWhereUniqueInput, {nullable:false})
    @Type(() => RoleWhereUniqueInput)
    where!: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>;
    @Field(() => RoleCreateWithoutUsersInput, {nullable:false})
    @Type(() => RoleCreateWithoutUsersInput)
    create!: InstanceType<typeof RoleCreateWithoutUsersInput>;
}

@InputType()
export class RoleCreateWithoutUsersInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
}

@InputType()
export class RoleCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => UserCreateNestedManyWithoutRoleInput, {nullable:true})
    users?: InstanceType<typeof UserCreateNestedManyWithoutRoleInput>;
}

@ArgsType()
export class RoleGroupByArgs {
    @Field(() => RoleWhereInput, {nullable:true})
    @Type(() => RoleWhereInput)
    where?: InstanceType<typeof RoleWhereInput>;
    @Field(() => [RoleOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RoleOrderByWithAggregationInput>;
    @Field(() => [RoleScalarFieldEnum], {nullable:false})
    by!: Array<`${RoleScalarFieldEnum}`>;
    @Field(() => RoleScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof RoleScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => RoleCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RoleCountAggregateInput>;
    @Field(() => RoleMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RoleMinAggregateInput>;
    @Field(() => RoleMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RoleMaxAggregateInput>;
}

@ObjectType()
export class RoleGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => RoleCountAggregate, {nullable:true})
    _count?: InstanceType<typeof RoleCountAggregate>;
    @Field(() => RoleMinAggregate, {nullable:true})
    _min?: InstanceType<typeof RoleMinAggregate>;
    @Field(() => RoleMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof RoleMaxAggregate>;
}

@InputType()
export class RoleListRelationFilter {
    @Field(() => RoleWhereInput, {nullable:true})
    every?: InstanceType<typeof RoleWhereInput>;
    @Field(() => RoleWhereInput, {nullable:true})
    some?: InstanceType<typeof RoleWhereInput>;
    @Field(() => RoleWhereInput, {nullable:true})
    none?: InstanceType<typeof RoleWhereInput>;
}

@InputType()
export class RoleMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
}

@ObjectType()
export class RoleMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class RoleMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
}

@InputType()
export class RoleMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
}

@ObjectType()
export class RoleMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class RoleMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
}

@InputType()
export class RoleOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class RoleOrderByRelevanceInput {
    @Field(() => [RoleOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${RoleOrderByRelevanceFieldEnum}`>;
    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;
    @Field(() => String, {nullable:false})
    search!: string;
}

@InputType()
export class RoleOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => RoleCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RoleCountOrderByAggregateInput>;
    @Field(() => RoleMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RoleMaxOrderByAggregateInput>;
    @Field(() => RoleMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RoleMinOrderByAggregateInput>;
}

@InputType()
export class RoleOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    users?: InstanceType<typeof UserOrderByRelationAggregateInput>;
    @Field(() => RoleOrderByRelevanceInput, {nullable:true})
    _relevance?: InstanceType<typeof RoleOrderByRelevanceInput>;
}

@InputType()
export class RoleScalarWhereWithAggregatesInput {
    @Field(() => [RoleScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RoleScalarWhereWithAggregatesInput>;
    @Field(() => [RoleScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RoleScalarWhereWithAggregatesInput>;
    @Field(() => [RoleScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RoleScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class RoleScalarWhereInput {
    @Field(() => [RoleScalarWhereInput], {nullable:true})
    AND?: Array<RoleScalarWhereInput>;
    @Field(() => [RoleScalarWhereInput], {nullable:true})
    OR?: Array<RoleScalarWhereInput>;
    @Field(() => [RoleScalarWhereInput], {nullable:true})
    NOT?: Array<RoleScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
}

@InputType()
export class RoleUncheckedCreateNestedManyWithoutUsersInput {
    @Field(() => [RoleCreateWithoutUsersInput], {nullable:true})
    @Type(() => RoleCreateWithoutUsersInput)
    create?: Array<RoleCreateWithoutUsersInput>;
    @Field(() => [RoleCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => RoleCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<RoleCreateOrConnectWithoutUsersInput>;
    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>>;
}

@InputType()
export class RoleUncheckedCreateWithoutUsersInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
}

@InputType()
export class RoleUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => UserUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    users?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutRoleInput>;
}

@InputType()
export class RoleUncheckedUpdateManyWithoutUsersNestedInput {
    @Field(() => [RoleCreateWithoutUsersInput], {nullable:true})
    @Type(() => RoleCreateWithoutUsersInput)
    create?: Array<RoleCreateWithoutUsersInput>;
    @Field(() => [RoleCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => RoleCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<RoleCreateOrConnectWithoutUsersInput>;
    @Field(() => [RoleUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => RoleUpsertWithWhereUniqueWithoutUsersInput)
    upsert?: Array<RoleUpsertWithWhereUniqueWithoutUsersInput>;
    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [RoleUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => RoleUpdateWithWhereUniqueWithoutUsersInput)
    update?: Array<RoleUpdateWithWhereUniqueWithoutUsersInput>;
    @Field(() => [RoleUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    @Type(() => RoleUpdateManyWithWhereWithoutUsersInput)
    updateMany?: Array<RoleUpdateManyWithWhereWithoutUsersInput>;
    @Field(() => [RoleScalarWhereInput], {nullable:true})
    @Type(() => RoleScalarWhereInput)
    deleteMany?: Array<RoleScalarWhereInput>;
}

@InputType()
export class RoleUncheckedUpdateManyWithoutUsersInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class RoleUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class RoleUncheckedUpdateWithoutUsersInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class RoleUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => UserUncheckedUpdateManyWithoutRoleNestedInput, {nullable:true})
    users?: InstanceType<typeof UserUncheckedUpdateManyWithoutRoleNestedInput>;
}

@InputType()
export class RoleUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class RoleUpdateManyWithWhereWithoutUsersInput {
    @Field(() => RoleScalarWhereInput, {nullable:false})
    @Type(() => RoleScalarWhereInput)
    where!: InstanceType<typeof RoleScalarWhereInput>;
    @Field(() => RoleUpdateManyMutationInput, {nullable:false})
    @Type(() => RoleUpdateManyMutationInput)
    data!: InstanceType<typeof RoleUpdateManyMutationInput>;
}

@InputType()
export class RoleUpdateManyWithoutUsersNestedInput {
    @Field(() => [RoleCreateWithoutUsersInput], {nullable:true})
    @Type(() => RoleCreateWithoutUsersInput)
    create?: Array<RoleCreateWithoutUsersInput>;
    @Field(() => [RoleCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => RoleCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<RoleCreateOrConnectWithoutUsersInput>;
    @Field(() => [RoleUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => RoleUpsertWithWhereUniqueWithoutUsersInput)
    upsert?: Array<RoleUpsertWithWhereUniqueWithoutUsersInput>;
    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [RoleUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => RoleUpdateWithWhereUniqueWithoutUsersInput)
    update?: Array<RoleUpdateWithWhereUniqueWithoutUsersInput>;
    @Field(() => [RoleUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    @Type(() => RoleUpdateManyWithWhereWithoutUsersInput)
    updateMany?: Array<RoleUpdateManyWithWhereWithoutUsersInput>;
    @Field(() => [RoleScalarWhereInput], {nullable:true})
    @Type(() => RoleScalarWhereInput)
    deleteMany?: Array<RoleScalarWhereInput>;
}

@InputType()
export class RoleUpdateWithWhereUniqueWithoutUsersInput {
    @Field(() => RoleWhereUniqueInput, {nullable:false})
    @Type(() => RoleWhereUniqueInput)
    where!: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>;
    @Field(() => RoleUpdateWithoutUsersInput, {nullable:false})
    @Type(() => RoleUpdateWithoutUsersInput)
    data!: InstanceType<typeof RoleUpdateWithoutUsersInput>;
}

@InputType()
export class RoleUpdateWithoutUsersInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class RoleUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => UserUpdateManyWithoutRoleNestedInput, {nullable:true})
    users?: InstanceType<typeof UserUpdateManyWithoutRoleNestedInput>;
}

@InputType()
export class RoleUpsertWithWhereUniqueWithoutUsersInput {
    @Field(() => RoleWhereUniqueInput, {nullable:false})
    @Type(() => RoleWhereUniqueInput)
    where!: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>;
    @Field(() => RoleUpdateWithoutUsersInput, {nullable:false})
    @Type(() => RoleUpdateWithoutUsersInput)
    update!: InstanceType<typeof RoleUpdateWithoutUsersInput>;
    @Field(() => RoleCreateWithoutUsersInput, {nullable:false})
    @Type(() => RoleCreateWithoutUsersInput)
    create!: InstanceType<typeof RoleCreateWithoutUsersInput>;
}

@InputType()
export class RoleWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => [RoleWhereInput], {nullable:true})
    AND?: Array<RoleWhereInput>;
    @Field(() => [RoleWhereInput], {nullable:true})
    OR?: Array<RoleWhereInput>;
    @Field(() => [RoleWhereInput], {nullable:true})
    NOT?: Array<RoleWhereInput>;
    @Field(() => UserListRelationFilter, {nullable:true})
    users?: InstanceType<typeof UserListRelationFilter>;
}

@InputType()
export class RoleWhereInput {
    @Field(() => [RoleWhereInput], {nullable:true})
    AND?: Array<RoleWhereInput>;
    @Field(() => [RoleWhereInput], {nullable:true})
    OR?: Array<RoleWhereInput>;
    @Field(() => [RoleWhereInput], {nullable:true})
    NOT?: Array<RoleWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => UserListRelationFilter, {nullable:true})
    users?: InstanceType<typeof UserListRelationFilter>;
}

@ObjectType()
export class Role {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => [User], {nullable:true})
    users?: Array<User>;
    @Field(() => RoleCount, {nullable:false})
    _count?: InstanceType<typeof RoleCount>;
}

@ArgsType()
export class UpdateManyRoleArgs {
    @Field(() => RoleUpdateManyMutationInput, {nullable:false})
    @Type(() => RoleUpdateManyMutationInput)
    data!: InstanceType<typeof RoleUpdateManyMutationInput>;
    @Field(() => RoleWhereInput, {nullable:true})
    @Type(() => RoleWhereInput)
    where?: InstanceType<typeof RoleWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneRoleArgs {
    @Field(() => RoleUpdateInput, {nullable:false})
    @Type(() => RoleUpdateInput)
    data!: InstanceType<typeof RoleUpdateInput>;
    @Field(() => RoleWhereUniqueInput, {nullable:false})
    @Type(() => RoleWhereUniqueInput)
    where!: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class UpsertOneRoleArgs {
    @Field(() => RoleWhereUniqueInput, {nullable:false})
    @Type(() => RoleWhereUniqueInput)
    where!: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>;
    @Field(() => RoleCreateInput, {nullable:false})
    @Type(() => RoleCreateInput)
    create!: InstanceType<typeof RoleCreateInput>;
    @Field(() => RoleUpdateInput, {nullable:false})
    @Type(() => RoleUpdateInput)
    update!: InstanceType<typeof RoleUpdateInput>;
}

@ObjectType()
export class AggregateTag {
    @Field(() => TagCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TagCountAggregate>;
    @Field(() => TagMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TagMinAggregate>;
    @Field(() => TagMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TagMaxAggregate>;
}

@ArgsType()
export class CreateManyTagArgs {
    @Field(() => [TagCreateManyInput], {nullable:false})
    @Type(() => TagCreateManyInput)
    data!: Array<TagCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneTagArgs {
    @Field(() => TagCreateInput, {nullable:false})
    @Type(() => TagCreateInput)
    data!: InstanceType<typeof TagCreateInput>;
}

@ArgsType()
export class DeleteManyTagArgs {
    @Field(() => TagWhereInput, {nullable:true})
    @Type(() => TagWhereInput)
    where?: InstanceType<typeof TagWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneTagArgs {
    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstTagOrThrowArgs {
    @Field(() => TagWhereInput, {nullable:true})
    @Type(() => TagWhereInput)
    where?: InstanceType<typeof TagWhereInput>;
    @Field(() => [TagOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TagOrderByWithRelationInput>;
    @Field(() => TagWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TagScalarFieldEnum], {nullable:true})
    distinct?: Array<`${TagScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstTagArgs {
    @Field(() => TagWhereInput, {nullable:true})
    @Type(() => TagWhereInput)
    where?: InstanceType<typeof TagWhereInput>;
    @Field(() => [TagOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TagOrderByWithRelationInput>;
    @Field(() => TagWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TagScalarFieldEnum], {nullable:true})
    distinct?: Array<`${TagScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyTagArgs {
    @Field(() => TagWhereInput, {nullable:true})
    @Type(() => TagWhereInput)
    where?: InstanceType<typeof TagWhereInput>;
    @Field(() => [TagOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TagOrderByWithRelationInput>;
    @Field(() => TagWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TagScalarFieldEnum], {nullable:true})
    distinct?: Array<`${TagScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueTagOrThrowArgs {
    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueTagArgs {
    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;
}

@ArgsType()
export class TagAggregateArgs {
    @Field(() => TagWhereInput, {nullable:true})
    @Type(() => TagWhereInput)
    where?: InstanceType<typeof TagWhereInput>;
    @Field(() => [TagOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TagOrderByWithRelationInput>;
    @Field(() => TagWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TagCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TagCountAggregateInput>;
    @Field(() => TagMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TagMinAggregateInput>;
    @Field(() => TagMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TagMaxAggregateInput>;
}

@InputType()
export class TagCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    pageId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class TagCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    pageId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class TagCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
}

@ObjectType()
export class TagCount {
    @Field(() => Int, {nullable:false})
    ExitPage?: number;
}

@InputType()
export class TagCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
}

@InputType()
export class TagCreateNestedManyWithoutExitPageInput {
    @Field(() => [TagCreateWithoutExitPageInput], {nullable:true})
    @Type(() => TagCreateWithoutExitPageInput)
    create?: Array<TagCreateWithoutExitPageInput>;
    @Field(() => [TagCreateOrConnectWithoutExitPageInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutExitPageInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutExitPageInput>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;
}

@InputType()
export class TagCreateOrConnectWithoutExitPageInput {
    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;
    @Field(() => TagCreateWithoutExitPageInput, {nullable:false})
    @Type(() => TagCreateWithoutExitPageInput)
    create!: InstanceType<typeof TagCreateWithoutExitPageInput>;
}

@InputType()
export class TagCreateWithoutExitPageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
}

@InputType()
export class TagCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => ExitPageCreateNestedManyWithoutTagsInput, {nullable:true})
    ExitPage?: InstanceType<typeof ExitPageCreateNestedManyWithoutTagsInput>;
}

@ArgsType()
export class TagGroupByArgs {
    @Field(() => TagWhereInput, {nullable:true})
    @Type(() => TagWhereInput)
    where?: InstanceType<typeof TagWhereInput>;
    @Field(() => [TagOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TagOrderByWithAggregationInput>;
    @Field(() => [TagScalarFieldEnum], {nullable:false})
    by!: Array<`${TagScalarFieldEnum}`>;
    @Field(() => TagScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof TagScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TagCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TagCountAggregateInput>;
    @Field(() => TagMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TagMinAggregateInput>;
    @Field(() => TagMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TagMaxAggregateInput>;
}

@ObjectType()
export class TagGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => TagCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TagCountAggregate>;
    @Field(() => TagMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TagMinAggregate>;
    @Field(() => TagMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TagMaxAggregate>;
}

@InputType()
export class TagListRelationFilter {
    @Field(() => TagWhereInput, {nullable:true})
    every?: InstanceType<typeof TagWhereInput>;
    @Field(() => TagWhereInput, {nullable:true})
    some?: InstanceType<typeof TagWhereInput>;
    @Field(() => TagWhereInput, {nullable:true})
    none?: InstanceType<typeof TagWhereInput>;
}

@InputType()
export class TagMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    pageId?: true;
}

@ObjectType()
export class TagMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    pageId?: string;
}

@InputType()
export class TagMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
}

@InputType()
export class TagMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    pageId?: true;
}

@ObjectType()
export class TagMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    pageId?: string;
}

@InputType()
export class TagMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
}

@InputType()
export class TagOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class TagOrderByRelevanceInput {
    @Field(() => [TagOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${TagOrderByRelevanceFieldEnum}`>;
    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;
    @Field(() => String, {nullable:false})
    search!: string;
}

@InputType()
export class TagOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => TagCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TagCountOrderByAggregateInput>;
    @Field(() => TagMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TagMaxOrderByAggregateInput>;
    @Field(() => TagMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TagMinOrderByAggregateInput>;
}

@InputType()
export class TagOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => ExitPageOrderByRelationAggregateInput, {nullable:true})
    ExitPage?: InstanceType<typeof ExitPageOrderByRelationAggregateInput>;
    @Field(() => TagOrderByRelevanceInput, {nullable:true})
    _relevance?: InstanceType<typeof TagOrderByRelevanceInput>;
}

@InputType()
export class TagScalarWhereWithAggregatesInput {
    @Field(() => [TagScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TagScalarWhereWithAggregatesInput>;
    @Field(() => [TagScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TagScalarWhereWithAggregatesInput>;
    @Field(() => [TagScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TagScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    pageId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class TagScalarWhereInput {
    @Field(() => [TagScalarWhereInput], {nullable:true})
    AND?: Array<TagScalarWhereInput>;
    @Field(() => [TagScalarWhereInput], {nullable:true})
    OR?: Array<TagScalarWhereInput>;
    @Field(() => [TagScalarWhereInput], {nullable:true})
    NOT?: Array<TagScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    pageId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class TagUncheckedCreateNestedManyWithoutExitPageInput {
    @Field(() => [TagCreateWithoutExitPageInput], {nullable:true})
    @Type(() => TagCreateWithoutExitPageInput)
    create?: Array<TagCreateWithoutExitPageInput>;
    @Field(() => [TagCreateOrConnectWithoutExitPageInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutExitPageInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutExitPageInput>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;
}

@InputType()
export class TagUncheckedCreateWithoutExitPageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
}

@InputType()
export class TagUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => ExitPageUncheckedCreateNestedManyWithoutTagsInput, {nullable:true})
    ExitPage?: InstanceType<typeof ExitPageUncheckedCreateNestedManyWithoutTagsInput>;
}

@InputType()
export class TagUncheckedUpdateManyWithoutExitPageNestedInput {
    @Field(() => [TagCreateWithoutExitPageInput], {nullable:true})
    @Type(() => TagCreateWithoutExitPageInput)
    create?: Array<TagCreateWithoutExitPageInput>;
    @Field(() => [TagCreateOrConnectWithoutExitPageInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutExitPageInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutExitPageInput>;
    @Field(() => [TagUpsertWithWhereUniqueWithoutExitPageInput], {nullable:true})
    @Type(() => TagUpsertWithWhereUniqueWithoutExitPageInput)
    upsert?: Array<TagUpsertWithWhereUniqueWithoutExitPageInput>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;
    @Field(() => [TagUpdateWithWhereUniqueWithoutExitPageInput], {nullable:true})
    @Type(() => TagUpdateWithWhereUniqueWithoutExitPageInput)
    update?: Array<TagUpdateWithWhereUniqueWithoutExitPageInput>;
    @Field(() => [TagUpdateManyWithWhereWithoutExitPageInput], {nullable:true})
    @Type(() => TagUpdateManyWithWhereWithoutExitPageInput)
    updateMany?: Array<TagUpdateManyWithWhereWithoutExitPageInput>;
    @Field(() => [TagScalarWhereInput], {nullable:true})
    @Type(() => TagScalarWhereInput)
    deleteMany?: Array<TagScalarWhereInput>;
}

@InputType()
export class TagUncheckedUpdateManyWithoutExitPageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class TagUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class TagUncheckedUpdateWithoutExitPageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class TagUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ExitPageUncheckedUpdateManyWithoutTagsNestedInput, {nullable:true})
    ExitPage?: InstanceType<typeof ExitPageUncheckedUpdateManyWithoutTagsNestedInput>;
}

@InputType()
export class TagUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class TagUpdateManyWithWhereWithoutExitPageInput {
    @Field(() => TagScalarWhereInput, {nullable:false})
    @Type(() => TagScalarWhereInput)
    where!: InstanceType<typeof TagScalarWhereInput>;
    @Field(() => TagUpdateManyMutationInput, {nullable:false})
    @Type(() => TagUpdateManyMutationInput)
    data!: InstanceType<typeof TagUpdateManyMutationInput>;
}

@InputType()
export class TagUpdateManyWithoutExitPageNestedInput {
    @Field(() => [TagCreateWithoutExitPageInput], {nullable:true})
    @Type(() => TagCreateWithoutExitPageInput)
    create?: Array<TagCreateWithoutExitPageInput>;
    @Field(() => [TagCreateOrConnectWithoutExitPageInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutExitPageInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutExitPageInput>;
    @Field(() => [TagUpsertWithWhereUniqueWithoutExitPageInput], {nullable:true})
    @Type(() => TagUpsertWithWhereUniqueWithoutExitPageInput)
    upsert?: Array<TagUpsertWithWhereUniqueWithoutExitPageInput>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;
    @Field(() => [TagUpdateWithWhereUniqueWithoutExitPageInput], {nullable:true})
    @Type(() => TagUpdateWithWhereUniqueWithoutExitPageInput)
    update?: Array<TagUpdateWithWhereUniqueWithoutExitPageInput>;
    @Field(() => [TagUpdateManyWithWhereWithoutExitPageInput], {nullable:true})
    @Type(() => TagUpdateManyWithWhereWithoutExitPageInput)
    updateMany?: Array<TagUpdateManyWithWhereWithoutExitPageInput>;
    @Field(() => [TagScalarWhereInput], {nullable:true})
    @Type(() => TagScalarWhereInput)
    deleteMany?: Array<TagScalarWhereInput>;
}

@InputType()
export class TagUpdateWithWhereUniqueWithoutExitPageInput {
    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;
    @Field(() => TagUpdateWithoutExitPageInput, {nullable:false})
    @Type(() => TagUpdateWithoutExitPageInput)
    data!: InstanceType<typeof TagUpdateWithoutExitPageInput>;
}

@InputType()
export class TagUpdateWithoutExitPageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class TagUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ExitPageUpdateManyWithoutTagsNestedInput, {nullable:true})
    ExitPage?: InstanceType<typeof ExitPageUpdateManyWithoutTagsNestedInput>;
}

@InputType()
export class TagUpsertWithWhereUniqueWithoutExitPageInput {
    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;
    @Field(() => TagUpdateWithoutExitPageInput, {nullable:false})
    @Type(() => TagUpdateWithoutExitPageInput)
    update!: InstanceType<typeof TagUpdateWithoutExitPageInput>;
    @Field(() => TagCreateWithoutExitPageInput, {nullable:false})
    @Type(() => TagCreateWithoutExitPageInput)
    create!: InstanceType<typeof TagCreateWithoutExitPageInput>;
}

@InputType()
export class TagWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [TagWhereInput], {nullable:true})
    AND?: Array<TagWhereInput>;
    @Field(() => [TagWhereInput], {nullable:true})
    OR?: Array<TagWhereInput>;
    @Field(() => [TagWhereInput], {nullable:true})
    NOT?: Array<TagWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    pageId?: InstanceType<typeof StringFilter>;
    @Field(() => ExitPageListRelationFilter, {nullable:true})
    ExitPage?: InstanceType<typeof ExitPageListRelationFilter>;
}

@InputType()
export class TagWhereInput {
    @Field(() => [TagWhereInput], {nullable:true})
    AND?: Array<TagWhereInput>;
    @Field(() => [TagWhereInput], {nullable:true})
    OR?: Array<TagWhereInput>;
    @Field(() => [TagWhereInput], {nullable:true})
    NOT?: Array<TagWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    pageId?: InstanceType<typeof StringFilter>;
    @Field(() => ExitPageListRelationFilter, {nullable:true})
    ExitPage?: InstanceType<typeof ExitPageListRelationFilter>;
}

@ObjectType()
export class Tag {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => [ExitPage], {nullable:true})
    ExitPage?: Array<ExitPage>;
    @Field(() => TagCount, {nullable:false})
    _count?: InstanceType<typeof TagCount>;
}

@ArgsType()
export class UpdateManyTagArgs {
    @Field(() => TagUpdateManyMutationInput, {nullable:false})
    @Type(() => TagUpdateManyMutationInput)
    data!: InstanceType<typeof TagUpdateManyMutationInput>;
    @Field(() => TagWhereInput, {nullable:true})
    @Type(() => TagWhereInput)
    where?: InstanceType<typeof TagWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneTagArgs {
    @Field(() => TagUpdateInput, {nullable:false})
    @Type(() => TagUpdateInput)
    data!: InstanceType<typeof TagUpdateInput>;
    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneTagArgs {
    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;
    @Field(() => TagCreateInput, {nullable:false})
    @Type(() => TagCreateInput)
    create!: InstanceType<typeof TagCreateInput>;
    @Field(() => TagUpdateInput, {nullable:false})
    @Type(() => TagUpdateInput)
    update!: InstanceType<typeof TagUpdateInput>;
}

@ObjectType()
export class AggregateTemplate {
    @Field(() => TemplateCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TemplateCountAggregate>;
    @Field(() => TemplateMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TemplateMinAggregate>;
    @Field(() => TemplateMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TemplateMaxAggregate>;
}

@ArgsType()
export class CreateManyTemplateArgs {
    @Field(() => [TemplateCreateManyInput], {nullable:false})
    @Type(() => TemplateCreateManyInput)
    data!: Array<TemplateCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneTemplateArgs {
    @Field(() => TemplateCreateInput, {nullable:false})
    @Type(() => TemplateCreateInput)
    data!: InstanceType<typeof TemplateCreateInput>;
}

@ArgsType()
export class DeleteManyTemplateArgs {
    @Field(() => TemplateWhereInput, {nullable:true})
    @Type(() => TemplateWhereInput)
    where?: InstanceType<typeof TemplateWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneTemplateArgs {
    @Field(() => TemplateWhereUniqueInput, {nullable:false})
    @Type(() => TemplateWhereUniqueInput)
    where!: Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>;
}

@ArgsType()
export class FindFirstTemplateOrThrowArgs {
    @Field(() => TemplateWhereInput, {nullable:true})
    @Type(() => TemplateWhereInput)
    where?: InstanceType<typeof TemplateWhereInput>;
    @Field(() => [TemplateOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TemplateOrderByWithRelationInput>;
    @Field(() => TemplateWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TemplateScalarFieldEnum], {nullable:true})
    distinct?: Array<`${TemplateScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstTemplateArgs {
    @Field(() => TemplateWhereInput, {nullable:true})
    @Type(() => TemplateWhereInput)
    where?: InstanceType<typeof TemplateWhereInput>;
    @Field(() => [TemplateOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TemplateOrderByWithRelationInput>;
    @Field(() => TemplateWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TemplateScalarFieldEnum], {nullable:true})
    distinct?: Array<`${TemplateScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyTemplateArgs {
    @Field(() => TemplateWhereInput, {nullable:true})
    @Type(() => TemplateWhereInput)
    where?: InstanceType<typeof TemplateWhereInput>;
    @Field(() => [TemplateOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TemplateOrderByWithRelationInput>;
    @Field(() => TemplateWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TemplateScalarFieldEnum], {nullable:true})
    distinct?: Array<`${TemplateScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueTemplateOrThrowArgs {
    @Field(() => TemplateWhereUniqueInput, {nullable:false})
    @Type(() => TemplateWhereUniqueInput)
    where!: Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>;
}

@ArgsType()
export class FindUniqueTemplateArgs {
    @Field(() => TemplateWhereUniqueInput, {nullable:false})
    @Type(() => TemplateWhereUniqueInput)
    where!: Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>;
}

@ArgsType()
export class TemplateAggregateArgs {
    @Field(() => TemplateWhereInput, {nullable:true})
    @Type(() => TemplateWhereInput)
    where?: InstanceType<typeof TemplateWhereInput>;
    @Field(() => [TemplateOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TemplateOrderByWithRelationInput>;
    @Field(() => TemplateWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TemplateCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TemplateCountAggregateInput>;
    @Field(() => TemplateMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TemplateMinAggregateInput>;
    @Field(() => TemplateMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TemplateMaxAggregateInput>;
}

@InputType()
export class TemplateCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    uniqueKey?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    placeholders?: true;
    @Field(() => Boolean, {nullable:true})
    isGlobal?: true;
    @Field(() => Boolean, {nullable:true})
    isPublished?: true;
    @Field(() => Boolean, {nullable:true})
    isDraft?: true;
    @Field(() => Boolean, {nullable:true})
    isDeleted?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class TemplateCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    uniqueKey!: number;
    @Field(() => Int, {nullable:false})
    authorId!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    description!: number;
    @Field(() => Int, {nullable:false})
    placeholders!: number;
    @Field(() => Int, {nullable:false})
    isGlobal!: number;
    @Field(() => Int, {nullable:false})
    isPublished!: number;
    @Field(() => Int, {nullable:false})
    isDraft!: number;
    @Field(() => Int, {nullable:false})
    isDeleted!: number;
    @Field(() => Int, {nullable:false})
    content!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class TemplateCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    uniqueKey?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    authorId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    placeholders?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isGlobal?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isPublished?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isDraft?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isDeleted?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@ObjectType()
export class TemplateCount {
    @Field(() => Int, {nullable:false})
    pages?: number;
}

@InputType()
export class TemplateCreateManyAuthorInputEnvelope {
    @Field(() => [TemplateCreateManyAuthorInput], {nullable:false})
    @Type(() => TemplateCreateManyAuthorInput)
    data!: Array<TemplateCreateManyAuthorInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class TemplateCreateManyAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    uniqueKey!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => GraphQLJSON, {nullable:false})
    placeholders!: any;
    @Field(() => Boolean, {nullable:true})
    isGlobal?: boolean;
    @Field(() => Boolean, {nullable:true})
    isPublished?: boolean;
    @Field(() => Boolean, {nullable:true})
    isDraft?: boolean;
    @Field(() => Boolean, {nullable:true})
    isDeleted?: boolean;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class TemplateCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    uniqueKey!: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => GraphQLJSON, {nullable:false})
    placeholders!: any;
    @Field(() => Boolean, {nullable:true})
    isGlobal?: boolean;
    @Field(() => Boolean, {nullable:true})
    isPublished?: boolean;
    @Field(() => Boolean, {nullable:true})
    isDraft?: boolean;
    @Field(() => Boolean, {nullable:true})
    isDeleted?: boolean;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class TemplateCreateNestedManyWithoutAuthorInput {
    @Field(() => [TemplateCreateWithoutAuthorInput], {nullable:true})
    @Type(() => TemplateCreateWithoutAuthorInput)
    create?: Array<TemplateCreateWithoutAuthorInput>;
    @Field(() => [TemplateCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => TemplateCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<TemplateCreateOrConnectWithoutAuthorInput>;
    @Field(() => TemplateCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => TemplateCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof TemplateCreateManyAuthorInputEnvelope>;
    @Field(() => [TemplateWhereUniqueInput], {nullable:true})
    @Type(() => TemplateWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>>;
}

@InputType()
export class TemplateCreateNestedOneWithoutPagesInput {
    @Field(() => TemplateCreateWithoutPagesInput, {nullable:true})
    @Type(() => TemplateCreateWithoutPagesInput)
    create?: InstanceType<typeof TemplateCreateWithoutPagesInput>;
    @Field(() => TemplateCreateOrConnectWithoutPagesInput, {nullable:true})
    @Type(() => TemplateCreateOrConnectWithoutPagesInput)
    connectOrCreate?: InstanceType<typeof TemplateCreateOrConnectWithoutPagesInput>;
    @Field(() => TemplateWhereUniqueInput, {nullable:true})
    @Type(() => TemplateWhereUniqueInput)
    connect?: Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>;
}

@InputType()
export class TemplateCreateOrConnectWithoutAuthorInput {
    @Field(() => TemplateWhereUniqueInput, {nullable:false})
    @Type(() => TemplateWhereUniqueInput)
    where!: Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>;
    @Field(() => TemplateCreateWithoutAuthorInput, {nullable:false})
    @Type(() => TemplateCreateWithoutAuthorInput)
    create!: InstanceType<typeof TemplateCreateWithoutAuthorInput>;
}

@InputType()
export class TemplateCreateOrConnectWithoutPagesInput {
    @Field(() => TemplateWhereUniqueInput, {nullable:false})
    @Type(() => TemplateWhereUniqueInput)
    where!: Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>;
    @Field(() => TemplateCreateWithoutPagesInput, {nullable:false})
    @Type(() => TemplateCreateWithoutPagesInput)
    create!: InstanceType<typeof TemplateCreateWithoutPagesInput>;
}

@InputType()
export class TemplateCreateWithoutAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    uniqueKey!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => GraphQLJSON, {nullable:false})
    placeholders!: any;
    @Field(() => Boolean, {nullable:true})
    isGlobal?: boolean;
    @Field(() => Boolean, {nullable:true})
    isPublished?: boolean;
    @Field(() => Boolean, {nullable:true})
    isDraft?: boolean;
    @Field(() => Boolean, {nullable:true})
    isDeleted?: boolean;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => ExitPageCreateNestedManyWithoutTemplateInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageCreateNestedManyWithoutTemplateInput>;
}

@InputType()
export class TemplateCreateWithoutPagesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    uniqueKey!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => GraphQLJSON, {nullable:false})
    placeholders!: any;
    @Field(() => Boolean, {nullable:true})
    isGlobal?: boolean;
    @Field(() => Boolean, {nullable:true})
    isPublished?: boolean;
    @Field(() => Boolean, {nullable:true})
    isDraft?: boolean;
    @Field(() => Boolean, {nullable:true})
    isDeleted?: boolean;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutTemplateInput, {nullable:true})
    author?: InstanceType<typeof UserCreateNestedOneWithoutTemplateInput>;
}

@InputType()
export class TemplateCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    uniqueKey!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => GraphQLJSON, {nullable:false})
    placeholders!: any;
    @Field(() => Boolean, {nullable:true})
    isGlobal?: boolean;
    @Field(() => Boolean, {nullable:true})
    isPublished?: boolean;
    @Field(() => Boolean, {nullable:true})
    isDraft?: boolean;
    @Field(() => Boolean, {nullable:true})
    isDeleted?: boolean;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutTemplateInput, {nullable:true})
    author?: InstanceType<typeof UserCreateNestedOneWithoutTemplateInput>;
    @Field(() => ExitPageCreateNestedManyWithoutTemplateInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageCreateNestedManyWithoutTemplateInput>;
}

@ArgsType()
export class TemplateGroupByArgs {
    @Field(() => TemplateWhereInput, {nullable:true})
    @Type(() => TemplateWhereInput)
    where?: InstanceType<typeof TemplateWhereInput>;
    @Field(() => [TemplateOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TemplateOrderByWithAggregationInput>;
    @Field(() => [TemplateScalarFieldEnum], {nullable:false})
    by!: Array<`${TemplateScalarFieldEnum}`>;
    @Field(() => TemplateScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof TemplateScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TemplateCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TemplateCountAggregateInput>;
    @Field(() => TemplateMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TemplateMinAggregateInput>;
    @Field(() => TemplateMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TemplateMaxAggregateInput>;
}

@ObjectType()
export class TemplateGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    uniqueKey!: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => GraphQLJSON, {nullable:false})
    placeholders!: any;
    @Field(() => Boolean, {nullable:true})
    isGlobal?: boolean;
    @Field(() => Boolean, {nullable:true})
    isPublished?: boolean;
    @Field(() => Boolean, {nullable:true})
    isDraft?: boolean;
    @Field(() => Boolean, {nullable:true})
    isDeleted?: boolean;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => TemplateCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TemplateCountAggregate>;
    @Field(() => TemplateMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TemplateMinAggregate>;
    @Field(() => TemplateMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TemplateMaxAggregate>;
}

@InputType()
export class TemplateListRelationFilter {
    @Field(() => TemplateWhereInput, {nullable:true})
    every?: InstanceType<typeof TemplateWhereInput>;
    @Field(() => TemplateWhereInput, {nullable:true})
    some?: InstanceType<typeof TemplateWhereInput>;
    @Field(() => TemplateWhereInput, {nullable:true})
    none?: InstanceType<typeof TemplateWhereInput>;
}

@InputType()
export class TemplateMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    uniqueKey?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    isGlobal?: true;
    @Field(() => Boolean, {nullable:true})
    isPublished?: true;
    @Field(() => Boolean, {nullable:true})
    isDraft?: true;
    @Field(() => Boolean, {nullable:true})
    isDeleted?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class TemplateMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    uniqueKey?: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:true})
    isGlobal?: boolean;
    @Field(() => Boolean, {nullable:true})
    isPublished?: boolean;
    @Field(() => Boolean, {nullable:true})
    isDraft?: boolean;
    @Field(() => Boolean, {nullable:true})
    isDeleted?: boolean;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class TemplateMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    uniqueKey?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    authorId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isGlobal?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isPublished?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isDraft?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isDeleted?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class TemplateMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    uniqueKey?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    isGlobal?: true;
    @Field(() => Boolean, {nullable:true})
    isPublished?: true;
    @Field(() => Boolean, {nullable:true})
    isDraft?: true;
    @Field(() => Boolean, {nullable:true})
    isDeleted?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class TemplateMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    uniqueKey?: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:true})
    isGlobal?: boolean;
    @Field(() => Boolean, {nullable:true})
    isPublished?: boolean;
    @Field(() => Boolean, {nullable:true})
    isDraft?: boolean;
    @Field(() => Boolean, {nullable:true})
    isDeleted?: boolean;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class TemplateMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    uniqueKey?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    authorId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isGlobal?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isPublished?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isDraft?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isDeleted?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class TemplateNo_duplicate_key_per_userCompoundUniqueInput {
    @Field(() => String, {nullable:false})
    uniqueKey!: string;
    @Field(() => String, {nullable:false})
    authorId!: string;
}

@InputType()
export class TemplateOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class TemplateOrderByRelevanceInput {
    @Field(() => [TemplateOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${TemplateOrderByRelevanceFieldEnum}`>;
    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;
    @Field(() => String, {nullable:false})
    search!: string;
}

@InputType()
export class TemplateOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    uniqueKey?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    authorId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    placeholders?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    isGlobal?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    isPublished?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    isDraft?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    isDeleted?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => TemplateCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TemplateCountOrderByAggregateInput>;
    @Field(() => TemplateMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TemplateMaxOrderByAggregateInput>;
    @Field(() => TemplateMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TemplateMinOrderByAggregateInput>;
}

@InputType()
export class TemplateOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    uniqueKey?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    authorId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    placeholders?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    isGlobal?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    isPublished?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    isDraft?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    isDeleted?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    author?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => ExitPageOrderByRelationAggregateInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageOrderByRelationAggregateInput>;
    @Field(() => TemplateOrderByRelevanceInput, {nullable:true})
    _relevance?: InstanceType<typeof TemplateOrderByRelevanceInput>;
}

@InputType()
export class TemplateScalarRelationFilter {
    @Field(() => TemplateWhereInput, {nullable:true})
    is?: InstanceType<typeof TemplateWhereInput>;
    @Field(() => TemplateWhereInput, {nullable:true})
    isNot?: InstanceType<typeof TemplateWhereInput>;
}

@InputType()
export class TemplateScalarWhereWithAggregatesInput {
    @Field(() => [TemplateScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TemplateScalarWhereWithAggregatesInput>;
    @Field(() => [TemplateScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TemplateScalarWhereWithAggregatesInput>;
    @Field(() => [TemplateScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TemplateScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    uniqueKey?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    authorId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    placeholders?: InstanceType<typeof JsonWithAggregatesFilter>;
    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    isGlobal?: InstanceType<typeof BoolNullableWithAggregatesFilter>;
    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    isPublished?: InstanceType<typeof BoolNullableWithAggregatesFilter>;
    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    isDraft?: InstanceType<typeof BoolNullableWithAggregatesFilter>;
    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    isDeleted?: InstanceType<typeof BoolNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class TemplateScalarWhereInput {
    @Field(() => [TemplateScalarWhereInput], {nullable:true})
    AND?: Array<TemplateScalarWhereInput>;
    @Field(() => [TemplateScalarWhereInput], {nullable:true})
    OR?: Array<TemplateScalarWhereInput>;
    @Field(() => [TemplateScalarWhereInput], {nullable:true})
    NOT?: Array<TemplateScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    uniqueKey?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    authorId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => JsonFilter, {nullable:true})
    placeholders?: InstanceType<typeof JsonFilter>;
    @Field(() => BoolNullableFilter, {nullable:true})
    isGlobal?: InstanceType<typeof BoolNullableFilter>;
    @Field(() => BoolNullableFilter, {nullable:true})
    isPublished?: InstanceType<typeof BoolNullableFilter>;
    @Field(() => BoolNullableFilter, {nullable:true})
    isDraft?: InstanceType<typeof BoolNullableFilter>;
    @Field(() => BoolNullableFilter, {nullable:true})
    isDeleted?: InstanceType<typeof BoolNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class TemplateUncheckedCreateNestedManyWithoutAuthorInput {
    @Field(() => [TemplateCreateWithoutAuthorInput], {nullable:true})
    @Type(() => TemplateCreateWithoutAuthorInput)
    create?: Array<TemplateCreateWithoutAuthorInput>;
    @Field(() => [TemplateCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => TemplateCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<TemplateCreateOrConnectWithoutAuthorInput>;
    @Field(() => TemplateCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => TemplateCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof TemplateCreateManyAuthorInputEnvelope>;
    @Field(() => [TemplateWhereUniqueInput], {nullable:true})
    @Type(() => TemplateWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>>;
}

@InputType()
export class TemplateUncheckedCreateWithoutAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    uniqueKey!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => GraphQLJSON, {nullable:false})
    placeholders!: any;
    @Field(() => Boolean, {nullable:true})
    isGlobal?: boolean;
    @Field(() => Boolean, {nullable:true})
    isPublished?: boolean;
    @Field(() => Boolean, {nullable:true})
    isDraft?: boolean;
    @Field(() => Boolean, {nullable:true})
    isDeleted?: boolean;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => ExitPageUncheckedCreateNestedManyWithoutTemplateInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUncheckedCreateNestedManyWithoutTemplateInput>;
}

@InputType()
export class TemplateUncheckedCreateWithoutPagesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    uniqueKey!: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => GraphQLJSON, {nullable:false})
    placeholders!: any;
    @Field(() => Boolean, {nullable:true})
    isGlobal?: boolean;
    @Field(() => Boolean, {nullable:true})
    isPublished?: boolean;
    @Field(() => Boolean, {nullable:true})
    isDraft?: boolean;
    @Field(() => Boolean, {nullable:true})
    isDeleted?: boolean;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class TemplateUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    uniqueKey!: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => GraphQLJSON, {nullable:false})
    placeholders!: any;
    @Field(() => Boolean, {nullable:true})
    isGlobal?: boolean;
    @Field(() => Boolean, {nullable:true})
    isPublished?: boolean;
    @Field(() => Boolean, {nullable:true})
    isDraft?: boolean;
    @Field(() => Boolean, {nullable:true})
    isDeleted?: boolean;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => ExitPageUncheckedCreateNestedManyWithoutTemplateInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUncheckedCreateNestedManyWithoutTemplateInput>;
}

@InputType()
export class TemplateUncheckedUpdateManyWithoutAuthorNestedInput {
    @Field(() => [TemplateCreateWithoutAuthorInput], {nullable:true})
    @Type(() => TemplateCreateWithoutAuthorInput)
    create?: Array<TemplateCreateWithoutAuthorInput>;
    @Field(() => [TemplateCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => TemplateCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<TemplateCreateOrConnectWithoutAuthorInput>;
    @Field(() => [TemplateUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => TemplateUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<TemplateUpsertWithWhereUniqueWithoutAuthorInput>;
    @Field(() => TemplateCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => TemplateCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof TemplateCreateManyAuthorInputEnvelope>;
    @Field(() => [TemplateWhereUniqueInput], {nullable:true})
    @Type(() => TemplateWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>>;
    @Field(() => [TemplateWhereUniqueInput], {nullable:true})
    @Type(() => TemplateWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>>;
    @Field(() => [TemplateWhereUniqueInput], {nullable:true})
    @Type(() => TemplateWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>>;
    @Field(() => [TemplateWhereUniqueInput], {nullable:true})
    @Type(() => TemplateWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>>;
    @Field(() => [TemplateUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => TemplateUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<TemplateUpdateWithWhereUniqueWithoutAuthorInput>;
    @Field(() => [TemplateUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => TemplateUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<TemplateUpdateManyWithWhereWithoutAuthorInput>;
    @Field(() => [TemplateScalarWhereInput], {nullable:true})
    @Type(() => TemplateScalarWhereInput)
    deleteMany?: Array<TemplateScalarWhereInput>;
}

@InputType()
export class TemplateUncheckedUpdateManyWithoutAuthorInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    uniqueKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    placeholders?: any;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isGlobal?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isPublished?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isDraft?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isDeleted?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class TemplateUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    uniqueKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    placeholders?: any;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isGlobal?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isPublished?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isDraft?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isDeleted?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class TemplateUncheckedUpdateWithoutAuthorInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    uniqueKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    placeholders?: any;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isGlobal?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isPublished?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isDraft?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isDeleted?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ExitPageUncheckedUpdateManyWithoutTemplateNestedInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUncheckedUpdateManyWithoutTemplateNestedInput>;
}

@InputType()
export class TemplateUncheckedUpdateWithoutPagesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    uniqueKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    placeholders?: any;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isGlobal?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isPublished?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isDraft?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isDeleted?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class TemplateUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    uniqueKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    placeholders?: any;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isGlobal?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isPublished?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isDraft?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isDeleted?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ExitPageUncheckedUpdateManyWithoutTemplateNestedInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUncheckedUpdateManyWithoutTemplateNestedInput>;
}

@InputType()
export class TemplateUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    uniqueKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    placeholders?: any;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isGlobal?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isPublished?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isDraft?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isDeleted?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class TemplateUpdateManyWithWhereWithoutAuthorInput {
    @Field(() => TemplateScalarWhereInput, {nullable:false})
    @Type(() => TemplateScalarWhereInput)
    where!: InstanceType<typeof TemplateScalarWhereInput>;
    @Field(() => TemplateUpdateManyMutationInput, {nullable:false})
    @Type(() => TemplateUpdateManyMutationInput)
    data!: InstanceType<typeof TemplateUpdateManyMutationInput>;
}

@InputType()
export class TemplateUpdateManyWithoutAuthorNestedInput {
    @Field(() => [TemplateCreateWithoutAuthorInput], {nullable:true})
    @Type(() => TemplateCreateWithoutAuthorInput)
    create?: Array<TemplateCreateWithoutAuthorInput>;
    @Field(() => [TemplateCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => TemplateCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<TemplateCreateOrConnectWithoutAuthorInput>;
    @Field(() => [TemplateUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => TemplateUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<TemplateUpsertWithWhereUniqueWithoutAuthorInput>;
    @Field(() => TemplateCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => TemplateCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof TemplateCreateManyAuthorInputEnvelope>;
    @Field(() => [TemplateWhereUniqueInput], {nullable:true})
    @Type(() => TemplateWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>>;
    @Field(() => [TemplateWhereUniqueInput], {nullable:true})
    @Type(() => TemplateWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>>;
    @Field(() => [TemplateWhereUniqueInput], {nullable:true})
    @Type(() => TemplateWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>>;
    @Field(() => [TemplateWhereUniqueInput], {nullable:true})
    @Type(() => TemplateWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>>;
    @Field(() => [TemplateUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => TemplateUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<TemplateUpdateWithWhereUniqueWithoutAuthorInput>;
    @Field(() => [TemplateUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => TemplateUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<TemplateUpdateManyWithWhereWithoutAuthorInput>;
    @Field(() => [TemplateScalarWhereInput], {nullable:true})
    @Type(() => TemplateScalarWhereInput)
    deleteMany?: Array<TemplateScalarWhereInput>;
}

@InputType()
export class TemplateUpdateOneRequiredWithoutPagesNestedInput {
    @Field(() => TemplateCreateWithoutPagesInput, {nullable:true})
    @Type(() => TemplateCreateWithoutPagesInput)
    create?: InstanceType<typeof TemplateCreateWithoutPagesInput>;
    @Field(() => TemplateCreateOrConnectWithoutPagesInput, {nullable:true})
    @Type(() => TemplateCreateOrConnectWithoutPagesInput)
    connectOrCreate?: InstanceType<typeof TemplateCreateOrConnectWithoutPagesInput>;
    @Field(() => TemplateUpsertWithoutPagesInput, {nullable:true})
    @Type(() => TemplateUpsertWithoutPagesInput)
    upsert?: InstanceType<typeof TemplateUpsertWithoutPagesInput>;
    @Field(() => TemplateWhereUniqueInput, {nullable:true})
    @Type(() => TemplateWhereUniqueInput)
    connect?: Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>;
    @Field(() => TemplateUpdateToOneWithWhereWithoutPagesInput, {nullable:true})
    @Type(() => TemplateUpdateToOneWithWhereWithoutPagesInput)
    update?: InstanceType<typeof TemplateUpdateToOneWithWhereWithoutPagesInput>;
}

@InputType()
export class TemplateUpdateToOneWithWhereWithoutPagesInput {
    @Field(() => TemplateWhereInput, {nullable:true})
    @Type(() => TemplateWhereInput)
    where?: InstanceType<typeof TemplateWhereInput>;
    @Field(() => TemplateUpdateWithoutPagesInput, {nullable:false})
    @Type(() => TemplateUpdateWithoutPagesInput)
    data!: InstanceType<typeof TemplateUpdateWithoutPagesInput>;
}

@InputType()
export class TemplateUpdateWithWhereUniqueWithoutAuthorInput {
    @Field(() => TemplateWhereUniqueInput, {nullable:false})
    @Type(() => TemplateWhereUniqueInput)
    where!: Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>;
    @Field(() => TemplateUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => TemplateUpdateWithoutAuthorInput)
    data!: InstanceType<typeof TemplateUpdateWithoutAuthorInput>;
}

@InputType()
export class TemplateUpdateWithoutAuthorInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    uniqueKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    placeholders?: any;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isGlobal?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isPublished?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isDraft?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isDeleted?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ExitPageUpdateManyWithoutTemplateNestedInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUpdateManyWithoutTemplateNestedInput>;
}

@InputType()
export class TemplateUpdateWithoutPagesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    uniqueKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    placeholders?: any;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isGlobal?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isPublished?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isDraft?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isDeleted?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutTemplateNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneWithoutTemplateNestedInput>;
}

@InputType()
export class TemplateUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    uniqueKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    placeholders?: any;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isGlobal?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isPublished?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isDraft?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isDeleted?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutTemplateNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneWithoutTemplateNestedInput>;
    @Field(() => ExitPageUpdateManyWithoutTemplateNestedInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUpdateManyWithoutTemplateNestedInput>;
}

@InputType()
export class TemplateUpsertWithWhereUniqueWithoutAuthorInput {
    @Field(() => TemplateWhereUniqueInput, {nullable:false})
    @Type(() => TemplateWhereUniqueInput)
    where!: Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>;
    @Field(() => TemplateUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => TemplateUpdateWithoutAuthorInput)
    update!: InstanceType<typeof TemplateUpdateWithoutAuthorInput>;
    @Field(() => TemplateCreateWithoutAuthorInput, {nullable:false})
    @Type(() => TemplateCreateWithoutAuthorInput)
    create!: InstanceType<typeof TemplateCreateWithoutAuthorInput>;
}

@InputType()
export class TemplateUpsertWithoutPagesInput {
    @Field(() => TemplateUpdateWithoutPagesInput, {nullable:false})
    @Type(() => TemplateUpdateWithoutPagesInput)
    update!: InstanceType<typeof TemplateUpdateWithoutPagesInput>;
    @Field(() => TemplateCreateWithoutPagesInput, {nullable:false})
    @Type(() => TemplateCreateWithoutPagesInput)
    create!: InstanceType<typeof TemplateCreateWithoutPagesInput>;
    @Field(() => TemplateWhereInput, {nullable:true})
    @Type(() => TemplateWhereInput)
    where?: InstanceType<typeof TemplateWhereInput>;
}

@InputType()
export class TemplateWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => TemplateNo_duplicate_key_per_userCompoundUniqueInput, {nullable:true})
    no_duplicate_key_per_user?: InstanceType<typeof TemplateNo_duplicate_key_per_userCompoundUniqueInput>;
    @Field(() => [TemplateWhereInput], {nullable:true})
    AND?: Array<TemplateWhereInput>;
    @Field(() => [TemplateWhereInput], {nullable:true})
    OR?: Array<TemplateWhereInput>;
    @Field(() => [TemplateWhereInput], {nullable:true})
    NOT?: Array<TemplateWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    uniqueKey?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    authorId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => JsonFilter, {nullable:true})
    placeholders?: InstanceType<typeof JsonFilter>;
    @Field(() => BoolNullableFilter, {nullable:true})
    isGlobal?: InstanceType<typeof BoolNullableFilter>;
    @Field(() => BoolNullableFilter, {nullable:true})
    isPublished?: InstanceType<typeof BoolNullableFilter>;
    @Field(() => BoolNullableFilter, {nullable:true})
    isDraft?: InstanceType<typeof BoolNullableFilter>;
    @Field(() => BoolNullableFilter, {nullable:true})
    isDeleted?: InstanceType<typeof BoolNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    author?: InstanceType<typeof UserNullableScalarRelationFilter>;
    @Field(() => ExitPageListRelationFilter, {nullable:true})
    pages?: InstanceType<typeof ExitPageListRelationFilter>;
}

@InputType()
export class TemplateWhereInput {
    @Field(() => [TemplateWhereInput], {nullable:true})
    AND?: Array<TemplateWhereInput>;
    @Field(() => [TemplateWhereInput], {nullable:true})
    OR?: Array<TemplateWhereInput>;
    @Field(() => [TemplateWhereInput], {nullable:true})
    NOT?: Array<TemplateWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    uniqueKey?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    authorId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => JsonFilter, {nullable:true})
    placeholders?: InstanceType<typeof JsonFilter>;
    @Field(() => BoolNullableFilter, {nullable:true})
    isGlobal?: InstanceType<typeof BoolNullableFilter>;
    @Field(() => BoolNullableFilter, {nullable:true})
    isPublished?: InstanceType<typeof BoolNullableFilter>;
    @Field(() => BoolNullableFilter, {nullable:true})
    isDraft?: InstanceType<typeof BoolNullableFilter>;
    @Field(() => BoolNullableFilter, {nullable:true})
    isDeleted?: InstanceType<typeof BoolNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    author?: InstanceType<typeof UserNullableScalarRelationFilter>;
    @Field(() => ExitPageListRelationFilter, {nullable:true})
    pages?: InstanceType<typeof ExitPageListRelationFilter>;
}

@ObjectType()
export class Template {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    uniqueKey!: string;
    @Field(() => String, {nullable:true})
    authorId!: string | null;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => GraphQLJSON, {nullable:false})
    placeholders!: any;
    @Field(() => Boolean, {nullable:true})
    isGlobal!: boolean | null;
    @Field(() => Boolean, {nullable:true})
    isPublished!: boolean | null;
    @Field(() => Boolean, {nullable:true})
    isDraft!: boolean | null;
    @Field(() => Boolean, {nullable:true})
    isDeleted!: boolean | null;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => User, {nullable:true})
    author?: InstanceType<typeof User> | null;
    @Field(() => [ExitPage], {nullable:true})
    pages?: Array<ExitPage>;
    @Field(() => TemplateCount, {nullable:false})
    _count?: InstanceType<typeof TemplateCount>;
}

@ArgsType()
export class UpdateManyTemplateArgs {
    @Field(() => TemplateUpdateManyMutationInput, {nullable:false})
    @Type(() => TemplateUpdateManyMutationInput)
    data!: InstanceType<typeof TemplateUpdateManyMutationInput>;
    @Field(() => TemplateWhereInput, {nullable:true})
    @Type(() => TemplateWhereInput)
    where?: InstanceType<typeof TemplateWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneTemplateArgs {
    @Field(() => TemplateUpdateInput, {nullable:false})
    @Type(() => TemplateUpdateInput)
    data!: InstanceType<typeof TemplateUpdateInput>;
    @Field(() => TemplateWhereUniqueInput, {nullable:false})
    @Type(() => TemplateWhereUniqueInput)
    where!: Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>;
}

@ArgsType()
export class UpsertOneTemplateArgs {
    @Field(() => TemplateWhereUniqueInput, {nullable:false})
    @Type(() => TemplateWhereUniqueInput)
    where!: Prisma.AtLeast<TemplateWhereUniqueInput, 'id' | 'no_duplicate_key_per_user'>;
    @Field(() => TemplateCreateInput, {nullable:false})
    @Type(() => TemplateCreateInput)
    create!: InstanceType<typeof TemplateCreateInput>;
    @Field(() => TemplateUpdateInput, {nullable:false})
    @Type(() => TemplateUpdateInput)
    update!: InstanceType<typeof TemplateUpdateInput>;
}

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], {nullable:false})
    @Type(() => UserCreateManyInput)
    data!: Array<UserCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@ArgsType()
export class FindFirstUserOrThrowArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UserScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UserScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UserScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueUserOrThrowArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    @Type(() => UserUpdateManyMutationInput)
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    data!: InstanceType<typeof UserUpdateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    create!: InstanceType<typeof UserCreateInput>;
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    firstName?: true;
    @Field(() => Boolean, {nullable:true})
    lastName?: true;
    @Field(() => Boolean, {nullable:true})
    phone?: true;
    @Field(() => Boolean, {nullable:true})
    username?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    isVerified?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    firstName!: number;
    @Field(() => Int, {nullable:false})
    lastName!: number;
    @Field(() => Int, {nullable:false})
    phone!: number;
    @Field(() => Int, {nullable:false})
    username!: number;
    @Field(() => Int, {nullable:false})
    password!: number;
    @Field(() => Int, {nullable:false})
    isVerified!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    firstName?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    lastName?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    phone?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    username?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isVerified?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@ObjectType()
export class UserCount {
    @Field(() => Int, {nullable:false})
    tokens?: number;
    @Field(() => Int, {nullable:false})
    images?: number;
    @Field(() => Int, {nullable:false})
    pages?: number;
    @Field(() => Int, {nullable:false})
    reactions?: number;
    @Field(() => Int, {nullable:false})
    votes?: number;
    @Field(() => Int, {nullable:false})
    comments?: number;
    @Field(() => Int, {nullable:false})
    views?: number;
    @Field(() => Int, {nullable:false})
    shares?: number;
    @Field(() => Int, {nullable:false})
    versions?: number;
    @Field(() => Int, {nullable:false})
    Role?: number;
    @Field(() => Int, {nullable:false})
    Template?: number;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserCreateNestedManyWithoutRoleInput {
    @Field(() => [UserCreateWithoutRoleInput], {nullable:true})
    @Type(() => UserCreateWithoutRoleInput)
    create?: Array<UserCreateWithoutRoleInput>;
    @Field(() => [UserCreateOrConnectWithoutRoleInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRoleInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutRoleInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>>;
}

@InputType()
export class UserCreateNestedOneWithoutCommentsInput {
    @Field(() => UserCreateWithoutCommentsInput, {nullable:true})
    @Type(() => UserCreateWithoutCommentsInput)
    create?: InstanceType<typeof UserCreateWithoutCommentsInput>;
    @Field(() => UserCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutCommentsInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@InputType()
export class UserCreateNestedOneWithoutImagesInput {
    @Field(() => UserCreateWithoutImagesInput, {nullable:true})
    @Type(() => UserCreateWithoutImagesInput)
    create?: InstanceType<typeof UserCreateWithoutImagesInput>;
    @Field(() => UserCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutImagesInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutImagesInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@InputType()
export class UserCreateNestedOneWithoutPagesInput {
    @Field(() => UserCreateWithoutPagesInput, {nullable:true})
    @Type(() => UserCreateWithoutPagesInput)
    create?: InstanceType<typeof UserCreateWithoutPagesInput>;
    @Field(() => UserCreateOrConnectWithoutPagesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPagesInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutPagesInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@InputType()
export class UserCreateNestedOneWithoutReactionsInput {
    @Field(() => UserCreateWithoutReactionsInput, {nullable:true})
    @Type(() => UserCreateWithoutReactionsInput)
    create?: InstanceType<typeof UserCreateWithoutReactionsInput>;
    @Field(() => UserCreateOrConnectWithoutReactionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReactionsInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutReactionsInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@InputType()
export class UserCreateNestedOneWithoutSharesInput {
    @Field(() => UserCreateWithoutSharesInput, {nullable:true})
    @Type(() => UserCreateWithoutSharesInput)
    create?: InstanceType<typeof UserCreateWithoutSharesInput>;
    @Field(() => UserCreateOrConnectWithoutSharesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSharesInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutSharesInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@InputType()
export class UserCreateNestedOneWithoutTemplateInput {
    @Field(() => UserCreateWithoutTemplateInput, {nullable:true})
    @Type(() => UserCreateWithoutTemplateInput)
    create?: InstanceType<typeof UserCreateWithoutTemplateInput>;
    @Field(() => UserCreateOrConnectWithoutTemplateInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTemplateInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutTemplateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@InputType()
export class UserCreateNestedOneWithoutTokensInput {
    @Field(() => UserCreateWithoutTokensInput, {nullable:true})
    @Type(() => UserCreateWithoutTokensInput)
    create?: InstanceType<typeof UserCreateWithoutTokensInput>;
    @Field(() => UserCreateOrConnectWithoutTokensInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTokensInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutTokensInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@InputType()
export class UserCreateNestedOneWithoutVersionsInput {
    @Field(() => UserCreateWithoutVersionsInput, {nullable:true})
    @Type(() => UserCreateWithoutVersionsInput)
    create?: InstanceType<typeof UserCreateWithoutVersionsInput>;
    @Field(() => UserCreateOrConnectWithoutVersionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutVersionsInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutVersionsInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@InputType()
export class UserCreateNestedOneWithoutViewsInput {
    @Field(() => UserCreateWithoutViewsInput, {nullable:true})
    @Type(() => UserCreateWithoutViewsInput)
    create?: InstanceType<typeof UserCreateWithoutViewsInput>;
    @Field(() => UserCreateOrConnectWithoutViewsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutViewsInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutViewsInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@InputType()
export class UserCreateNestedOneWithoutVotesInput {
    @Field(() => UserCreateWithoutVotesInput, {nullable:true})
    @Type(() => UserCreateWithoutVotesInput)
    create?: InstanceType<typeof UserCreateWithoutVotesInput>;
    @Field(() => UserCreateOrConnectWithoutVotesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutVotesInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutVotesInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@InputType()
export class UserCreateOrConnectWithoutCommentsInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserCreateWithoutCommentsInput, {nullable:false})
    @Type(() => UserCreateWithoutCommentsInput)
    create!: InstanceType<typeof UserCreateWithoutCommentsInput>;
}

@InputType()
export class UserCreateOrConnectWithoutImagesInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserCreateWithoutImagesInput, {nullable:false})
    @Type(() => UserCreateWithoutImagesInput)
    create!: InstanceType<typeof UserCreateWithoutImagesInput>;
}

@InputType()
export class UserCreateOrConnectWithoutPagesInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserCreateWithoutPagesInput, {nullable:false})
    @Type(() => UserCreateWithoutPagesInput)
    create!: InstanceType<typeof UserCreateWithoutPagesInput>;
}

@InputType()
export class UserCreateOrConnectWithoutReactionsInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserCreateWithoutReactionsInput, {nullable:false})
    @Type(() => UserCreateWithoutReactionsInput)
    create!: InstanceType<typeof UserCreateWithoutReactionsInput>;
}

@InputType()
export class UserCreateOrConnectWithoutRoleInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserCreateWithoutRoleInput, {nullable:false})
    @Type(() => UserCreateWithoutRoleInput)
    create!: InstanceType<typeof UserCreateWithoutRoleInput>;
}

@InputType()
export class UserCreateOrConnectWithoutSharesInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserCreateWithoutSharesInput, {nullable:false})
    @Type(() => UserCreateWithoutSharesInput)
    create!: InstanceType<typeof UserCreateWithoutSharesInput>;
}

@InputType()
export class UserCreateOrConnectWithoutTemplateInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserCreateWithoutTemplateInput, {nullable:false})
    @Type(() => UserCreateWithoutTemplateInput)
    create!: InstanceType<typeof UserCreateWithoutTemplateInput>;
}

@InputType()
export class UserCreateOrConnectWithoutTokensInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserCreateWithoutTokensInput, {nullable:false})
    @Type(() => UserCreateWithoutTokensInput)
    create!: InstanceType<typeof UserCreateWithoutTokensInput>;
}

@InputType()
export class UserCreateOrConnectWithoutVersionsInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserCreateWithoutVersionsInput, {nullable:false})
    @Type(() => UserCreateWithoutVersionsInput)
    create!: InstanceType<typeof UserCreateWithoutVersionsInput>;
}

@InputType()
export class UserCreateOrConnectWithoutViewsInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserCreateWithoutViewsInput, {nullable:false})
    @Type(() => UserCreateWithoutViewsInput)
    create!: InstanceType<typeof UserCreateWithoutViewsInput>;
}

@InputType()
export class UserCreateOrConnectWithoutVotesInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserCreateWithoutVotesInput, {nullable:false})
    @Type(() => UserCreateWithoutVotesInput)
    create!: InstanceType<typeof UserCreateWithoutVotesInput>;
}

@InputType()
export class UserCreateWithoutCommentsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenCreateNestedManyWithoutUserInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenCreateNestedManyWithoutUserInput>;
    @Field(() => UserImageCreateNestedManyWithoutUserInput, {nullable:true})
    images?: InstanceType<typeof UserImageCreateNestedManyWithoutUserInput>;
    @Field(() => ExitPageCreateNestedManyWithoutAuthorInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageCreateNestedManyWithoutAuthorInput>;
    @Field(() => ReactionCreateNestedManyWithoutUserInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionCreateNestedManyWithoutUserInput>;
    @Field(() => VoteCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutUserInput>;
    @Field(() => PageViewCreateNestedManyWithoutUserInput, {nullable:true})
    views?: InstanceType<typeof PageViewCreateNestedManyWithoutUserInput>;
    @Field(() => PageShareCreateNestedManyWithoutUserInput, {nullable:true})
    shares?: InstanceType<typeof PageShareCreateNestedManyWithoutUserInput>;
    @Field(() => PageVersionCreateNestedManyWithoutUpdatedByInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionCreateNestedManyWithoutUpdatedByInput>;
    @Field(() => RoleCreateNestedManyWithoutUsersInput, {nullable:true})
    Role?: InstanceType<typeof RoleCreateNestedManyWithoutUsersInput>;
    @Field(() => TemplateCreateNestedManyWithoutAuthorInput, {nullable:true})
    Template?: InstanceType<typeof TemplateCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserCreateWithoutImagesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenCreateNestedManyWithoutUserInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenCreateNestedManyWithoutUserInput>;
    @Field(() => ExitPageCreateNestedManyWithoutAuthorInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageCreateNestedManyWithoutAuthorInput>;
    @Field(() => ReactionCreateNestedManyWithoutUserInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionCreateNestedManyWithoutUserInput>;
    @Field(() => VoteCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutUserInput>;
    @Field(() => CommentCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutUserInput>;
    @Field(() => PageViewCreateNestedManyWithoutUserInput, {nullable:true})
    views?: InstanceType<typeof PageViewCreateNestedManyWithoutUserInput>;
    @Field(() => PageShareCreateNestedManyWithoutUserInput, {nullable:true})
    shares?: InstanceType<typeof PageShareCreateNestedManyWithoutUserInput>;
    @Field(() => PageVersionCreateNestedManyWithoutUpdatedByInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionCreateNestedManyWithoutUpdatedByInput>;
    @Field(() => RoleCreateNestedManyWithoutUsersInput, {nullable:true})
    Role?: InstanceType<typeof RoleCreateNestedManyWithoutUsersInput>;
    @Field(() => TemplateCreateNestedManyWithoutAuthorInput, {nullable:true})
    Template?: InstanceType<typeof TemplateCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserCreateWithoutPagesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenCreateNestedManyWithoutUserInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenCreateNestedManyWithoutUserInput>;
    @Field(() => UserImageCreateNestedManyWithoutUserInput, {nullable:true})
    images?: InstanceType<typeof UserImageCreateNestedManyWithoutUserInput>;
    @Field(() => ReactionCreateNestedManyWithoutUserInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionCreateNestedManyWithoutUserInput>;
    @Field(() => VoteCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutUserInput>;
    @Field(() => CommentCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutUserInput>;
    @Field(() => PageViewCreateNestedManyWithoutUserInput, {nullable:true})
    views?: InstanceType<typeof PageViewCreateNestedManyWithoutUserInput>;
    @Field(() => PageShareCreateNestedManyWithoutUserInput, {nullable:true})
    shares?: InstanceType<typeof PageShareCreateNestedManyWithoutUserInput>;
    @Field(() => PageVersionCreateNestedManyWithoutUpdatedByInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionCreateNestedManyWithoutUpdatedByInput>;
    @Field(() => RoleCreateNestedManyWithoutUsersInput, {nullable:true})
    Role?: InstanceType<typeof RoleCreateNestedManyWithoutUsersInput>;
    @Field(() => TemplateCreateNestedManyWithoutAuthorInput, {nullable:true})
    Template?: InstanceType<typeof TemplateCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserCreateWithoutReactionsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenCreateNestedManyWithoutUserInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenCreateNestedManyWithoutUserInput>;
    @Field(() => UserImageCreateNestedManyWithoutUserInput, {nullable:true})
    images?: InstanceType<typeof UserImageCreateNestedManyWithoutUserInput>;
    @Field(() => ExitPageCreateNestedManyWithoutAuthorInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageCreateNestedManyWithoutAuthorInput>;
    @Field(() => VoteCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutUserInput>;
    @Field(() => CommentCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutUserInput>;
    @Field(() => PageViewCreateNestedManyWithoutUserInput, {nullable:true})
    views?: InstanceType<typeof PageViewCreateNestedManyWithoutUserInput>;
    @Field(() => PageShareCreateNestedManyWithoutUserInput, {nullable:true})
    shares?: InstanceType<typeof PageShareCreateNestedManyWithoutUserInput>;
    @Field(() => PageVersionCreateNestedManyWithoutUpdatedByInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionCreateNestedManyWithoutUpdatedByInput>;
    @Field(() => RoleCreateNestedManyWithoutUsersInput, {nullable:true})
    Role?: InstanceType<typeof RoleCreateNestedManyWithoutUsersInput>;
    @Field(() => TemplateCreateNestedManyWithoutAuthorInput, {nullable:true})
    Template?: InstanceType<typeof TemplateCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserCreateWithoutRoleInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenCreateNestedManyWithoutUserInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenCreateNestedManyWithoutUserInput>;
    @Field(() => UserImageCreateNestedManyWithoutUserInput, {nullable:true})
    images?: InstanceType<typeof UserImageCreateNestedManyWithoutUserInput>;
    @Field(() => ExitPageCreateNestedManyWithoutAuthorInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageCreateNestedManyWithoutAuthorInput>;
    @Field(() => ReactionCreateNestedManyWithoutUserInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionCreateNestedManyWithoutUserInput>;
    @Field(() => VoteCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutUserInput>;
    @Field(() => CommentCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutUserInput>;
    @Field(() => PageViewCreateNestedManyWithoutUserInput, {nullable:true})
    views?: InstanceType<typeof PageViewCreateNestedManyWithoutUserInput>;
    @Field(() => PageShareCreateNestedManyWithoutUserInput, {nullable:true})
    shares?: InstanceType<typeof PageShareCreateNestedManyWithoutUserInput>;
    @Field(() => PageVersionCreateNestedManyWithoutUpdatedByInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionCreateNestedManyWithoutUpdatedByInput>;
    @Field(() => TemplateCreateNestedManyWithoutAuthorInput, {nullable:true})
    Template?: InstanceType<typeof TemplateCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserCreateWithoutSharesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenCreateNestedManyWithoutUserInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenCreateNestedManyWithoutUserInput>;
    @Field(() => UserImageCreateNestedManyWithoutUserInput, {nullable:true})
    images?: InstanceType<typeof UserImageCreateNestedManyWithoutUserInput>;
    @Field(() => ExitPageCreateNestedManyWithoutAuthorInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageCreateNestedManyWithoutAuthorInput>;
    @Field(() => ReactionCreateNestedManyWithoutUserInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionCreateNestedManyWithoutUserInput>;
    @Field(() => VoteCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutUserInput>;
    @Field(() => CommentCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutUserInput>;
    @Field(() => PageViewCreateNestedManyWithoutUserInput, {nullable:true})
    views?: InstanceType<typeof PageViewCreateNestedManyWithoutUserInput>;
    @Field(() => PageVersionCreateNestedManyWithoutUpdatedByInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionCreateNestedManyWithoutUpdatedByInput>;
    @Field(() => RoleCreateNestedManyWithoutUsersInput, {nullable:true})
    Role?: InstanceType<typeof RoleCreateNestedManyWithoutUsersInput>;
    @Field(() => TemplateCreateNestedManyWithoutAuthorInput, {nullable:true})
    Template?: InstanceType<typeof TemplateCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserCreateWithoutTemplateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenCreateNestedManyWithoutUserInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenCreateNestedManyWithoutUserInput>;
    @Field(() => UserImageCreateNestedManyWithoutUserInput, {nullable:true})
    images?: InstanceType<typeof UserImageCreateNestedManyWithoutUserInput>;
    @Field(() => ExitPageCreateNestedManyWithoutAuthorInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageCreateNestedManyWithoutAuthorInput>;
    @Field(() => ReactionCreateNestedManyWithoutUserInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionCreateNestedManyWithoutUserInput>;
    @Field(() => VoteCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutUserInput>;
    @Field(() => CommentCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutUserInput>;
    @Field(() => PageViewCreateNestedManyWithoutUserInput, {nullable:true})
    views?: InstanceType<typeof PageViewCreateNestedManyWithoutUserInput>;
    @Field(() => PageShareCreateNestedManyWithoutUserInput, {nullable:true})
    shares?: InstanceType<typeof PageShareCreateNestedManyWithoutUserInput>;
    @Field(() => PageVersionCreateNestedManyWithoutUpdatedByInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionCreateNestedManyWithoutUpdatedByInput>;
    @Field(() => RoleCreateNestedManyWithoutUsersInput, {nullable:true})
    Role?: InstanceType<typeof RoleCreateNestedManyWithoutUsersInput>;
}

@InputType()
export class UserCreateWithoutTokensInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserImageCreateNestedManyWithoutUserInput, {nullable:true})
    images?: InstanceType<typeof UserImageCreateNestedManyWithoutUserInput>;
    @Field(() => ExitPageCreateNestedManyWithoutAuthorInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageCreateNestedManyWithoutAuthorInput>;
    @Field(() => ReactionCreateNestedManyWithoutUserInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionCreateNestedManyWithoutUserInput>;
    @Field(() => VoteCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutUserInput>;
    @Field(() => CommentCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutUserInput>;
    @Field(() => PageViewCreateNestedManyWithoutUserInput, {nullable:true})
    views?: InstanceType<typeof PageViewCreateNestedManyWithoutUserInput>;
    @Field(() => PageShareCreateNestedManyWithoutUserInput, {nullable:true})
    shares?: InstanceType<typeof PageShareCreateNestedManyWithoutUserInput>;
    @Field(() => PageVersionCreateNestedManyWithoutUpdatedByInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionCreateNestedManyWithoutUpdatedByInput>;
    @Field(() => RoleCreateNestedManyWithoutUsersInput, {nullable:true})
    Role?: InstanceType<typeof RoleCreateNestedManyWithoutUsersInput>;
    @Field(() => TemplateCreateNestedManyWithoutAuthorInput, {nullable:true})
    Template?: InstanceType<typeof TemplateCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserCreateWithoutVersionsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenCreateNestedManyWithoutUserInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenCreateNestedManyWithoutUserInput>;
    @Field(() => UserImageCreateNestedManyWithoutUserInput, {nullable:true})
    images?: InstanceType<typeof UserImageCreateNestedManyWithoutUserInput>;
    @Field(() => ExitPageCreateNestedManyWithoutAuthorInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageCreateNestedManyWithoutAuthorInput>;
    @Field(() => ReactionCreateNestedManyWithoutUserInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionCreateNestedManyWithoutUserInput>;
    @Field(() => VoteCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutUserInput>;
    @Field(() => CommentCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutUserInput>;
    @Field(() => PageViewCreateNestedManyWithoutUserInput, {nullable:true})
    views?: InstanceType<typeof PageViewCreateNestedManyWithoutUserInput>;
    @Field(() => PageShareCreateNestedManyWithoutUserInput, {nullable:true})
    shares?: InstanceType<typeof PageShareCreateNestedManyWithoutUserInput>;
    @Field(() => RoleCreateNestedManyWithoutUsersInput, {nullable:true})
    Role?: InstanceType<typeof RoleCreateNestedManyWithoutUsersInput>;
    @Field(() => TemplateCreateNestedManyWithoutAuthorInput, {nullable:true})
    Template?: InstanceType<typeof TemplateCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserCreateWithoutViewsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenCreateNestedManyWithoutUserInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenCreateNestedManyWithoutUserInput>;
    @Field(() => UserImageCreateNestedManyWithoutUserInput, {nullable:true})
    images?: InstanceType<typeof UserImageCreateNestedManyWithoutUserInput>;
    @Field(() => ExitPageCreateNestedManyWithoutAuthorInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageCreateNestedManyWithoutAuthorInput>;
    @Field(() => ReactionCreateNestedManyWithoutUserInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionCreateNestedManyWithoutUserInput>;
    @Field(() => VoteCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutUserInput>;
    @Field(() => CommentCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutUserInput>;
    @Field(() => PageShareCreateNestedManyWithoutUserInput, {nullable:true})
    shares?: InstanceType<typeof PageShareCreateNestedManyWithoutUserInput>;
    @Field(() => PageVersionCreateNestedManyWithoutUpdatedByInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionCreateNestedManyWithoutUpdatedByInput>;
    @Field(() => RoleCreateNestedManyWithoutUsersInput, {nullable:true})
    Role?: InstanceType<typeof RoleCreateNestedManyWithoutUsersInput>;
    @Field(() => TemplateCreateNestedManyWithoutAuthorInput, {nullable:true})
    Template?: InstanceType<typeof TemplateCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserCreateWithoutVotesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenCreateNestedManyWithoutUserInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenCreateNestedManyWithoutUserInput>;
    @Field(() => UserImageCreateNestedManyWithoutUserInput, {nullable:true})
    images?: InstanceType<typeof UserImageCreateNestedManyWithoutUserInput>;
    @Field(() => ExitPageCreateNestedManyWithoutAuthorInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageCreateNestedManyWithoutAuthorInput>;
    @Field(() => ReactionCreateNestedManyWithoutUserInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionCreateNestedManyWithoutUserInput>;
    @Field(() => CommentCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutUserInput>;
    @Field(() => PageViewCreateNestedManyWithoutUserInput, {nullable:true})
    views?: InstanceType<typeof PageViewCreateNestedManyWithoutUserInput>;
    @Field(() => PageShareCreateNestedManyWithoutUserInput, {nullable:true})
    shares?: InstanceType<typeof PageShareCreateNestedManyWithoutUserInput>;
    @Field(() => PageVersionCreateNestedManyWithoutUpdatedByInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionCreateNestedManyWithoutUpdatedByInput>;
    @Field(() => RoleCreateNestedManyWithoutUsersInput, {nullable:true})
    Role?: InstanceType<typeof RoleCreateNestedManyWithoutUsersInput>;
    @Field(() => TemplateCreateNestedManyWithoutAuthorInput, {nullable:true})
    Template?: InstanceType<typeof TemplateCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenCreateNestedManyWithoutUserInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenCreateNestedManyWithoutUserInput>;
    @Field(() => UserImageCreateNestedManyWithoutUserInput, {nullable:true})
    images?: InstanceType<typeof UserImageCreateNestedManyWithoutUserInput>;
    @Field(() => ExitPageCreateNestedManyWithoutAuthorInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageCreateNestedManyWithoutAuthorInput>;
    @Field(() => ReactionCreateNestedManyWithoutUserInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionCreateNestedManyWithoutUserInput>;
    @Field(() => VoteCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutUserInput>;
    @Field(() => CommentCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutUserInput>;
    @Field(() => PageViewCreateNestedManyWithoutUserInput, {nullable:true})
    views?: InstanceType<typeof PageViewCreateNestedManyWithoutUserInput>;
    @Field(() => PageShareCreateNestedManyWithoutUserInput, {nullable:true})
    shares?: InstanceType<typeof PageShareCreateNestedManyWithoutUserInput>;
    @Field(() => PageVersionCreateNestedManyWithoutUpdatedByInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionCreateNestedManyWithoutUpdatedByInput>;
    @Field(() => RoleCreateNestedManyWithoutUsersInput, {nullable:true})
    Role?: InstanceType<typeof RoleCreateNestedManyWithoutUsersInput>;
    @Field(() => TemplateCreateNestedManyWithoutAuthorInput, {nullable:true})
    Template?: InstanceType<typeof TemplateCreateNestedManyWithoutAuthorInput>;
}

@ArgsType()
export class UserGroupByArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithAggregationInput>;
    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<`${UserScalarFieldEnum}`>;
    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:false})
    isVerified!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserListRelationFilter {
    @Field(() => UserWhereInput, {nullable:true})
    every?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    some?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    none?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    firstName?: true;
    @Field(() => Boolean, {nullable:true})
    lastName?: true;
    @Field(() => Boolean, {nullable:true})
    phone?: true;
    @Field(() => Boolean, {nullable:true})
    username?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    isVerified?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class UserMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    firstName?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    lastName?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    phone?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    username?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isVerified?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    firstName?: true;
    @Field(() => Boolean, {nullable:true})
    lastName?: true;
    @Field(() => Boolean, {nullable:true})
    phone?: true;
    @Field(() => Boolean, {nullable:true})
    username?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    isVerified?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class UserMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    firstName?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    lastName?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    phone?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    username?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isVerified?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class UserNullableScalarRelationFilter {
    @Field(() => UserWhereInput, {nullable:true})
    is?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    isNot?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class UserOrderByRelevanceInput {
    @Field(() => [UserOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${UserOrderByRelevanceFieldEnum}`>;
    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;
    @Field(() => String, {nullable:false})
    search!: string;
}

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    firstName?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    lastName?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    phone?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    username?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isVerified?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    firstName?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    lastName?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    phone?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    username?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isVerified?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => RefreshTokenOrderByRelationAggregateInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenOrderByRelationAggregateInput>;
    @Field(() => UserImageOrderByRelationAggregateInput, {nullable:true})
    images?: InstanceType<typeof UserImageOrderByRelationAggregateInput>;
    @Field(() => ExitPageOrderByRelationAggregateInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageOrderByRelationAggregateInput>;
    @Field(() => ReactionOrderByRelationAggregateInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionOrderByRelationAggregateInput>;
    @Field(() => VoteOrderByRelationAggregateInput, {nullable:true})
    votes?: InstanceType<typeof VoteOrderByRelationAggregateInput>;
    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    comments?: InstanceType<typeof CommentOrderByRelationAggregateInput>;
    @Field(() => PageViewOrderByRelationAggregateInput, {nullable:true})
    views?: InstanceType<typeof PageViewOrderByRelationAggregateInput>;
    @Field(() => PageShareOrderByRelationAggregateInput, {nullable:true})
    shares?: InstanceType<typeof PageShareOrderByRelationAggregateInput>;
    @Field(() => PageVersionOrderByRelationAggregateInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionOrderByRelationAggregateInput>;
    @Field(() => RoleOrderByRelationAggregateInput, {nullable:true})
    Role?: InstanceType<typeof RoleOrderByRelationAggregateInput>;
    @Field(() => TemplateOrderByRelationAggregateInput, {nullable:true})
    Template?: InstanceType<typeof TemplateOrderByRelationAggregateInput>;
    @Field(() => UserOrderByRelevanceInput, {nullable:true})
    _relevance?: InstanceType<typeof UserOrderByRelevanceInput>;
}

@InputType()
export class UserScalarRelationFilter {
    @Field(() => UserWhereInput, {nullable:true})
    is?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    isNot?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    firstName?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    lastName?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    phone?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    username?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isVerified?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class UserScalarWhereInput {
    @Field(() => [UserScalarWhereInput], {nullable:true})
    AND?: Array<UserScalarWhereInput>;
    @Field(() => [UserScalarWhereInput], {nullable:true})
    OR?: Array<UserScalarWhereInput>;
    @Field(() => [UserScalarWhereInput], {nullable:true})
    NOT?: Array<UserScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    firstName?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    lastName?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    phone?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    username?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    isVerified?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class UserUncheckedCreateNestedManyWithoutRoleInput {
    @Field(() => [UserCreateWithoutRoleInput], {nullable:true})
    @Type(() => UserCreateWithoutRoleInput)
    create?: Array<UserCreateWithoutRoleInput>;
    @Field(() => [UserCreateOrConnectWithoutRoleInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRoleInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutRoleInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>>;
}

@InputType()
export class UserUncheckedCreateWithoutCommentsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => UserImageUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    images?: InstanceType<typeof UserImageUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => ExitPageUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => ReactionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageViewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageShareUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageVersionUncheckedCreateNestedManyWithoutUpdatedByInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedCreateNestedManyWithoutUpdatedByInput>;
    @Field(() => RoleUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    Role?: InstanceType<typeof RoleUncheckedCreateNestedManyWithoutUsersInput>;
    @Field(() => TemplateUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUncheckedCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserUncheckedCreateWithoutImagesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => ExitPageUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => ReactionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageViewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageShareUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageVersionUncheckedCreateNestedManyWithoutUpdatedByInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedCreateNestedManyWithoutUpdatedByInput>;
    @Field(() => RoleUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    Role?: InstanceType<typeof RoleUncheckedCreateNestedManyWithoutUsersInput>;
    @Field(() => TemplateUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUncheckedCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserUncheckedCreateWithoutPagesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => UserImageUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    images?: InstanceType<typeof UserImageUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => ReactionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageViewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageShareUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageVersionUncheckedCreateNestedManyWithoutUpdatedByInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedCreateNestedManyWithoutUpdatedByInput>;
    @Field(() => RoleUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    Role?: InstanceType<typeof RoleUncheckedCreateNestedManyWithoutUsersInput>;
    @Field(() => TemplateUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUncheckedCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserUncheckedCreateWithoutReactionsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => UserImageUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    images?: InstanceType<typeof UserImageUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => ExitPageUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageViewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageShareUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageVersionUncheckedCreateNestedManyWithoutUpdatedByInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedCreateNestedManyWithoutUpdatedByInput>;
    @Field(() => RoleUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    Role?: InstanceType<typeof RoleUncheckedCreateNestedManyWithoutUsersInput>;
    @Field(() => TemplateUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUncheckedCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserUncheckedCreateWithoutRoleInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => UserImageUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    images?: InstanceType<typeof UserImageUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => ExitPageUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => ReactionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageViewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageShareUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageVersionUncheckedCreateNestedManyWithoutUpdatedByInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedCreateNestedManyWithoutUpdatedByInput>;
    @Field(() => TemplateUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUncheckedCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserUncheckedCreateWithoutSharesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => UserImageUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    images?: InstanceType<typeof UserImageUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => ExitPageUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => ReactionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageViewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageVersionUncheckedCreateNestedManyWithoutUpdatedByInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedCreateNestedManyWithoutUpdatedByInput>;
    @Field(() => RoleUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    Role?: InstanceType<typeof RoleUncheckedCreateNestedManyWithoutUsersInput>;
    @Field(() => TemplateUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUncheckedCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserUncheckedCreateWithoutTemplateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => UserImageUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    images?: InstanceType<typeof UserImageUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => ExitPageUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => ReactionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageViewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageShareUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageVersionUncheckedCreateNestedManyWithoutUpdatedByInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedCreateNestedManyWithoutUpdatedByInput>;
    @Field(() => RoleUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    Role?: InstanceType<typeof RoleUncheckedCreateNestedManyWithoutUsersInput>;
}

@InputType()
export class UserUncheckedCreateWithoutTokensInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserImageUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    images?: InstanceType<typeof UserImageUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => ExitPageUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => ReactionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageViewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageShareUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageVersionUncheckedCreateNestedManyWithoutUpdatedByInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedCreateNestedManyWithoutUpdatedByInput>;
    @Field(() => RoleUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    Role?: InstanceType<typeof RoleUncheckedCreateNestedManyWithoutUsersInput>;
    @Field(() => TemplateUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUncheckedCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserUncheckedCreateWithoutVersionsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => UserImageUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    images?: InstanceType<typeof UserImageUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => ExitPageUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => ReactionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageViewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageShareUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => RoleUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    Role?: InstanceType<typeof RoleUncheckedCreateNestedManyWithoutUsersInput>;
    @Field(() => TemplateUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUncheckedCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserUncheckedCreateWithoutViewsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => UserImageUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    images?: InstanceType<typeof UserImageUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => ExitPageUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => ReactionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageShareUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageVersionUncheckedCreateNestedManyWithoutUpdatedByInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedCreateNestedManyWithoutUpdatedByInput>;
    @Field(() => RoleUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    Role?: InstanceType<typeof RoleUncheckedCreateNestedManyWithoutUsersInput>;
    @Field(() => TemplateUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUncheckedCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserUncheckedCreateWithoutVotesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => UserImageUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    images?: InstanceType<typeof UserImageUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => ExitPageUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => ReactionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageViewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageShareUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageVersionUncheckedCreateNestedManyWithoutUpdatedByInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedCreateNestedManyWithoutUpdatedByInput>;
    @Field(() => RoleUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    Role?: InstanceType<typeof RoleUncheckedCreateNestedManyWithoutUsersInput>;
    @Field(() => TemplateUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUncheckedCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => UserImageUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    images?: InstanceType<typeof UserImageUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => ExitPageUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => ReactionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageViewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageShareUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PageVersionUncheckedCreateNestedManyWithoutUpdatedByInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedCreateNestedManyWithoutUpdatedByInput>;
    @Field(() => RoleUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    Role?: InstanceType<typeof RoleUncheckedCreateNestedManyWithoutUsersInput>;
    @Field(() => TemplateUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUncheckedCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserUncheckedUpdateManyWithoutRoleNestedInput {
    @Field(() => [UserCreateWithoutRoleInput], {nullable:true})
    @Type(() => UserCreateWithoutRoleInput)
    create?: Array<UserCreateWithoutRoleInput>;
    @Field(() => [UserCreateOrConnectWithoutRoleInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRoleInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutRoleInput>;
    @Field(() => [UserUpsertWithWhereUniqueWithoutRoleInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutRoleInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutRoleInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>>;
    @Field(() => [UserUpdateWithWhereUniqueWithoutRoleInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutRoleInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutRoleInput>;
    @Field(() => [UserUpdateManyWithWhereWithoutRoleInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutRoleInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutRoleInput>;
    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}

@InputType()
export class UserUncheckedUpdateManyWithoutRoleInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutCommentsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => UserImageUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    images?: InstanceType<typeof UserImageUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => ExitPageUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => ReactionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageViewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageShareUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageVersionUncheckedUpdateManyWithoutUpdatedByNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedUpdateManyWithoutUpdatedByNestedInput>;
    @Field(() => RoleUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    Role?: InstanceType<typeof RoleUncheckedUpdateManyWithoutUsersNestedInput>;
    @Field(() => TemplateUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUncheckedUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutImagesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => ExitPageUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => ReactionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageViewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageShareUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageVersionUncheckedUpdateManyWithoutUpdatedByNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedUpdateManyWithoutUpdatedByNestedInput>;
    @Field(() => RoleUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    Role?: InstanceType<typeof RoleUncheckedUpdateManyWithoutUsersNestedInput>;
    @Field(() => TemplateUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUncheckedUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutPagesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => UserImageUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    images?: InstanceType<typeof UserImageUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => ReactionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageViewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageShareUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageVersionUncheckedUpdateManyWithoutUpdatedByNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedUpdateManyWithoutUpdatedByNestedInput>;
    @Field(() => RoleUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    Role?: InstanceType<typeof RoleUncheckedUpdateManyWithoutUsersNestedInput>;
    @Field(() => TemplateUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUncheckedUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutReactionsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => UserImageUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    images?: InstanceType<typeof UserImageUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => ExitPageUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageViewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageShareUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageVersionUncheckedUpdateManyWithoutUpdatedByNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedUpdateManyWithoutUpdatedByNestedInput>;
    @Field(() => RoleUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    Role?: InstanceType<typeof RoleUncheckedUpdateManyWithoutUsersNestedInput>;
    @Field(() => TemplateUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUncheckedUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutRoleInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => UserImageUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    images?: InstanceType<typeof UserImageUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => ExitPageUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => ReactionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageViewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageShareUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageVersionUncheckedUpdateManyWithoutUpdatedByNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedUpdateManyWithoutUpdatedByNestedInput>;
    @Field(() => TemplateUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUncheckedUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutSharesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => UserImageUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    images?: InstanceType<typeof UserImageUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => ExitPageUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => ReactionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageViewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageVersionUncheckedUpdateManyWithoutUpdatedByNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedUpdateManyWithoutUpdatedByNestedInput>;
    @Field(() => RoleUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    Role?: InstanceType<typeof RoleUncheckedUpdateManyWithoutUsersNestedInput>;
    @Field(() => TemplateUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUncheckedUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutTemplateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => UserImageUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    images?: InstanceType<typeof UserImageUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => ExitPageUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => ReactionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageViewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageShareUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageVersionUncheckedUpdateManyWithoutUpdatedByNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedUpdateManyWithoutUpdatedByNestedInput>;
    @Field(() => RoleUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    Role?: InstanceType<typeof RoleUncheckedUpdateManyWithoutUsersNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutTokensInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserImageUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    images?: InstanceType<typeof UserImageUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => ExitPageUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => ReactionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageViewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageShareUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageVersionUncheckedUpdateManyWithoutUpdatedByNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedUpdateManyWithoutUpdatedByNestedInput>;
    @Field(() => RoleUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    Role?: InstanceType<typeof RoleUncheckedUpdateManyWithoutUsersNestedInput>;
    @Field(() => TemplateUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUncheckedUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutVersionsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => UserImageUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    images?: InstanceType<typeof UserImageUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => ExitPageUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => ReactionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageViewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageShareUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => RoleUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    Role?: InstanceType<typeof RoleUncheckedUpdateManyWithoutUsersNestedInput>;
    @Field(() => TemplateUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUncheckedUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutViewsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => UserImageUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    images?: InstanceType<typeof UserImageUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => ExitPageUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => ReactionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageShareUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageVersionUncheckedUpdateManyWithoutUpdatedByNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedUpdateManyWithoutUpdatedByNestedInput>;
    @Field(() => RoleUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    Role?: InstanceType<typeof RoleUncheckedUpdateManyWithoutUsersNestedInput>;
    @Field(() => TemplateUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUncheckedUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutVotesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => UserImageUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    images?: InstanceType<typeof UserImageUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => ExitPageUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => ReactionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageViewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageShareUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageVersionUncheckedUpdateManyWithoutUpdatedByNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedUpdateManyWithoutUpdatedByNestedInput>;
    @Field(() => RoleUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    Role?: InstanceType<typeof RoleUncheckedUpdateManyWithoutUsersNestedInput>;
    @Field(() => TemplateUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUncheckedUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => UserImageUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    images?: InstanceType<typeof UserImageUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => ExitPageUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => ReactionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageViewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageShareUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PageVersionUncheckedUpdateManyWithoutUpdatedByNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUncheckedUpdateManyWithoutUpdatedByNestedInput>;
    @Field(() => RoleUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    Role?: InstanceType<typeof RoleUncheckedUpdateManyWithoutUsersNestedInput>;
    @Field(() => TemplateUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUncheckedUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUpdateManyWithWhereWithoutRoleInput {
    @Field(() => UserScalarWhereInput, {nullable:false})
    @Type(() => UserScalarWhereInput)
    where!: InstanceType<typeof UserScalarWhereInput>;
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    @Type(() => UserUpdateManyMutationInput)
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
}

@InputType()
export class UserUpdateManyWithoutRoleNestedInput {
    @Field(() => [UserCreateWithoutRoleInput], {nullable:true})
    @Type(() => UserCreateWithoutRoleInput)
    create?: Array<UserCreateWithoutRoleInput>;
    @Field(() => [UserCreateOrConnectWithoutRoleInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRoleInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutRoleInput>;
    @Field(() => [UserUpsertWithWhereUniqueWithoutRoleInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutRoleInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutRoleInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>>;
    @Field(() => [UserUpdateWithWhereUniqueWithoutRoleInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutRoleInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutRoleInput>;
    @Field(() => [UserUpdateManyWithWhereWithoutRoleInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutRoleInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutRoleInput>;
    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutImagesNestedInput {
    @Field(() => UserCreateWithoutImagesInput, {nullable:true})
    @Type(() => UserCreateWithoutImagesInput)
    create?: InstanceType<typeof UserCreateWithoutImagesInput>;
    @Field(() => UserCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutImagesInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutImagesInput>;
    @Field(() => UserUpsertWithoutImagesInput, {nullable:true})
    @Type(() => UserUpsertWithoutImagesInput)
    upsert?: InstanceType<typeof UserUpsertWithoutImagesInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserUpdateToOneWithWhereWithoutImagesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutImagesInput)
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutImagesInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutTokensNestedInput {
    @Field(() => UserCreateWithoutTokensInput, {nullable:true})
    @Type(() => UserCreateWithoutTokensInput)
    create?: InstanceType<typeof UserCreateWithoutTokensInput>;
    @Field(() => UserCreateOrConnectWithoutTokensInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTokensInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutTokensInput>;
    @Field(() => UserUpsertWithoutTokensInput, {nullable:true})
    @Type(() => UserUpsertWithoutTokensInput)
    upsert?: InstanceType<typeof UserUpsertWithoutTokensInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserUpdateToOneWithWhereWithoutTokensInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutTokensInput)
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutTokensInput>;
}

@InputType()
export class UserUpdateOneWithoutCommentsNestedInput {
    @Field(() => UserCreateWithoutCommentsInput, {nullable:true})
    @Type(() => UserCreateWithoutCommentsInput)
    create?: InstanceType<typeof UserCreateWithoutCommentsInput>;
    @Field(() => UserCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutCommentsInput>;
    @Field(() => UserUpsertWithoutCommentsInput, {nullable:true})
    @Type(() => UserUpsertWithoutCommentsInput)
    upsert?: InstanceType<typeof UserUpsertWithoutCommentsInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserUpdateToOneWithWhereWithoutCommentsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutCommentsInput)
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutCommentsInput>;
}

@InputType()
export class UserUpdateOneWithoutPagesNestedInput {
    @Field(() => UserCreateWithoutPagesInput, {nullable:true})
    @Type(() => UserCreateWithoutPagesInput)
    create?: InstanceType<typeof UserCreateWithoutPagesInput>;
    @Field(() => UserCreateOrConnectWithoutPagesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPagesInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutPagesInput>;
    @Field(() => UserUpsertWithoutPagesInput, {nullable:true})
    @Type(() => UserUpsertWithoutPagesInput)
    upsert?: InstanceType<typeof UserUpsertWithoutPagesInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserUpdateToOneWithWhereWithoutPagesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutPagesInput)
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutPagesInput>;
}

@InputType()
export class UserUpdateOneWithoutReactionsNestedInput {
    @Field(() => UserCreateWithoutReactionsInput, {nullable:true})
    @Type(() => UserCreateWithoutReactionsInput)
    create?: InstanceType<typeof UserCreateWithoutReactionsInput>;
    @Field(() => UserCreateOrConnectWithoutReactionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReactionsInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutReactionsInput>;
    @Field(() => UserUpsertWithoutReactionsInput, {nullable:true})
    @Type(() => UserUpsertWithoutReactionsInput)
    upsert?: InstanceType<typeof UserUpsertWithoutReactionsInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserUpdateToOneWithWhereWithoutReactionsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutReactionsInput)
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutReactionsInput>;
}

@InputType()
export class UserUpdateOneWithoutSharesNestedInput {
    @Field(() => UserCreateWithoutSharesInput, {nullable:true})
    @Type(() => UserCreateWithoutSharesInput)
    create?: InstanceType<typeof UserCreateWithoutSharesInput>;
    @Field(() => UserCreateOrConnectWithoutSharesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSharesInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutSharesInput>;
    @Field(() => UserUpsertWithoutSharesInput, {nullable:true})
    @Type(() => UserUpsertWithoutSharesInput)
    upsert?: InstanceType<typeof UserUpsertWithoutSharesInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserUpdateToOneWithWhereWithoutSharesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutSharesInput)
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutSharesInput>;
}

@InputType()
export class UserUpdateOneWithoutTemplateNestedInput {
    @Field(() => UserCreateWithoutTemplateInput, {nullable:true})
    @Type(() => UserCreateWithoutTemplateInput)
    create?: InstanceType<typeof UserCreateWithoutTemplateInput>;
    @Field(() => UserCreateOrConnectWithoutTemplateInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTemplateInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutTemplateInput>;
    @Field(() => UserUpsertWithoutTemplateInput, {nullable:true})
    @Type(() => UserUpsertWithoutTemplateInput)
    upsert?: InstanceType<typeof UserUpsertWithoutTemplateInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserUpdateToOneWithWhereWithoutTemplateInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutTemplateInput)
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutTemplateInput>;
}

@InputType()
export class UserUpdateOneWithoutVersionsNestedInput {
    @Field(() => UserCreateWithoutVersionsInput, {nullable:true})
    @Type(() => UserCreateWithoutVersionsInput)
    create?: InstanceType<typeof UserCreateWithoutVersionsInput>;
    @Field(() => UserCreateOrConnectWithoutVersionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutVersionsInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutVersionsInput>;
    @Field(() => UserUpsertWithoutVersionsInput, {nullable:true})
    @Type(() => UserUpsertWithoutVersionsInput)
    upsert?: InstanceType<typeof UserUpsertWithoutVersionsInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserUpdateToOneWithWhereWithoutVersionsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutVersionsInput)
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutVersionsInput>;
}

@InputType()
export class UserUpdateOneWithoutViewsNestedInput {
    @Field(() => UserCreateWithoutViewsInput, {nullable:true})
    @Type(() => UserCreateWithoutViewsInput)
    create?: InstanceType<typeof UserCreateWithoutViewsInput>;
    @Field(() => UserCreateOrConnectWithoutViewsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutViewsInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutViewsInput>;
    @Field(() => UserUpsertWithoutViewsInput, {nullable:true})
    @Type(() => UserUpsertWithoutViewsInput)
    upsert?: InstanceType<typeof UserUpsertWithoutViewsInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserUpdateToOneWithWhereWithoutViewsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutViewsInput)
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutViewsInput>;
}

@InputType()
export class UserUpdateOneWithoutVotesNestedInput {
    @Field(() => UserCreateWithoutVotesInput, {nullable:true})
    @Type(() => UserCreateWithoutVotesInput)
    create?: InstanceType<typeof UserCreateWithoutVotesInput>;
    @Field(() => UserCreateOrConnectWithoutVotesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutVotesInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutVotesInput>;
    @Field(() => UserUpsertWithoutVotesInput, {nullable:true})
    @Type(() => UserUpsertWithoutVotesInput)
    upsert?: InstanceType<typeof UserUpsertWithoutVotesInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserUpdateToOneWithWhereWithoutVotesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutVotesInput)
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutVotesInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutCommentsInput {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => UserUpdateWithoutCommentsInput)
    data!: InstanceType<typeof UserUpdateWithoutCommentsInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutImagesInput {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserUpdateWithoutImagesInput, {nullable:false})
    @Type(() => UserUpdateWithoutImagesInput)
    data!: InstanceType<typeof UserUpdateWithoutImagesInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutPagesInput {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserUpdateWithoutPagesInput, {nullable:false})
    @Type(() => UserUpdateWithoutPagesInput)
    data!: InstanceType<typeof UserUpdateWithoutPagesInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutReactionsInput {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserUpdateWithoutReactionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutReactionsInput)
    data!: InstanceType<typeof UserUpdateWithoutReactionsInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutSharesInput {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserUpdateWithoutSharesInput, {nullable:false})
    @Type(() => UserUpdateWithoutSharesInput)
    data!: InstanceType<typeof UserUpdateWithoutSharesInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutTemplateInput {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserUpdateWithoutTemplateInput, {nullable:false})
    @Type(() => UserUpdateWithoutTemplateInput)
    data!: InstanceType<typeof UserUpdateWithoutTemplateInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutTokensInput {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserUpdateWithoutTokensInput, {nullable:false})
    @Type(() => UserUpdateWithoutTokensInput)
    data!: InstanceType<typeof UserUpdateWithoutTokensInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutVersionsInput {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserUpdateWithoutVersionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutVersionsInput)
    data!: InstanceType<typeof UserUpdateWithoutVersionsInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutViewsInput {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserUpdateWithoutViewsInput, {nullable:false})
    @Type(() => UserUpdateWithoutViewsInput)
    data!: InstanceType<typeof UserUpdateWithoutViewsInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutVotesInput {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserUpdateWithoutVotesInput, {nullable:false})
    @Type(() => UserUpdateWithoutVotesInput)
    data!: InstanceType<typeof UserUpdateWithoutVotesInput>;
}

@InputType()
export class UserUpdateWithWhereUniqueWithoutRoleInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserUpdateWithoutRoleInput, {nullable:false})
    @Type(() => UserUpdateWithoutRoleInput)
    data!: InstanceType<typeof UserUpdateWithoutRoleInput>;
}

@InputType()
export class UserUpdateWithoutCommentsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => UserImageUpdateManyWithoutUserNestedInput, {nullable:true})
    images?: InstanceType<typeof UserImageUpdateManyWithoutUserNestedInput>;
    @Field(() => ExitPageUpdateManyWithoutAuthorNestedInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUpdateManyWithoutAuthorNestedInput>;
    @Field(() => ReactionUpdateManyWithoutUserNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUpdateManyWithoutUserNestedInput>;
    @Field(() => VoteUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutUserNestedInput>;
    @Field(() => PageViewUpdateManyWithoutUserNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUpdateManyWithoutUserNestedInput>;
    @Field(() => PageShareUpdateManyWithoutUserNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUpdateManyWithoutUserNestedInput>;
    @Field(() => PageVersionUpdateManyWithoutUpdatedByNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUpdateManyWithoutUpdatedByNestedInput>;
    @Field(() => RoleUpdateManyWithoutUsersNestedInput, {nullable:true})
    Role?: InstanceType<typeof RoleUpdateManyWithoutUsersNestedInput>;
    @Field(() => TemplateUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUpdateWithoutImagesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => ExitPageUpdateManyWithoutAuthorNestedInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUpdateManyWithoutAuthorNestedInput>;
    @Field(() => ReactionUpdateManyWithoutUserNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUpdateManyWithoutUserNestedInput>;
    @Field(() => VoteUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutUserNestedInput>;
    @Field(() => PageViewUpdateManyWithoutUserNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUpdateManyWithoutUserNestedInput>;
    @Field(() => PageShareUpdateManyWithoutUserNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUpdateManyWithoutUserNestedInput>;
    @Field(() => PageVersionUpdateManyWithoutUpdatedByNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUpdateManyWithoutUpdatedByNestedInput>;
    @Field(() => RoleUpdateManyWithoutUsersNestedInput, {nullable:true})
    Role?: InstanceType<typeof RoleUpdateManyWithoutUsersNestedInput>;
    @Field(() => TemplateUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUpdateWithoutPagesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => UserImageUpdateManyWithoutUserNestedInput, {nullable:true})
    images?: InstanceType<typeof UserImageUpdateManyWithoutUserNestedInput>;
    @Field(() => ReactionUpdateManyWithoutUserNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUpdateManyWithoutUserNestedInput>;
    @Field(() => VoteUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutUserNestedInput>;
    @Field(() => PageViewUpdateManyWithoutUserNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUpdateManyWithoutUserNestedInput>;
    @Field(() => PageShareUpdateManyWithoutUserNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUpdateManyWithoutUserNestedInput>;
    @Field(() => PageVersionUpdateManyWithoutUpdatedByNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUpdateManyWithoutUpdatedByNestedInput>;
    @Field(() => RoleUpdateManyWithoutUsersNestedInput, {nullable:true})
    Role?: InstanceType<typeof RoleUpdateManyWithoutUsersNestedInput>;
    @Field(() => TemplateUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUpdateWithoutReactionsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => UserImageUpdateManyWithoutUserNestedInput, {nullable:true})
    images?: InstanceType<typeof UserImageUpdateManyWithoutUserNestedInput>;
    @Field(() => ExitPageUpdateManyWithoutAuthorNestedInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUpdateManyWithoutAuthorNestedInput>;
    @Field(() => VoteUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutUserNestedInput>;
    @Field(() => PageViewUpdateManyWithoutUserNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUpdateManyWithoutUserNestedInput>;
    @Field(() => PageShareUpdateManyWithoutUserNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUpdateManyWithoutUserNestedInput>;
    @Field(() => PageVersionUpdateManyWithoutUpdatedByNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUpdateManyWithoutUpdatedByNestedInput>;
    @Field(() => RoleUpdateManyWithoutUsersNestedInput, {nullable:true})
    Role?: InstanceType<typeof RoleUpdateManyWithoutUsersNestedInput>;
    @Field(() => TemplateUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUpdateWithoutRoleInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => UserImageUpdateManyWithoutUserNestedInput, {nullable:true})
    images?: InstanceType<typeof UserImageUpdateManyWithoutUserNestedInput>;
    @Field(() => ExitPageUpdateManyWithoutAuthorNestedInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUpdateManyWithoutAuthorNestedInput>;
    @Field(() => ReactionUpdateManyWithoutUserNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUpdateManyWithoutUserNestedInput>;
    @Field(() => VoteUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutUserNestedInput>;
    @Field(() => PageViewUpdateManyWithoutUserNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUpdateManyWithoutUserNestedInput>;
    @Field(() => PageShareUpdateManyWithoutUserNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUpdateManyWithoutUserNestedInput>;
    @Field(() => PageVersionUpdateManyWithoutUpdatedByNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUpdateManyWithoutUpdatedByNestedInput>;
    @Field(() => TemplateUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUpdateWithoutSharesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => UserImageUpdateManyWithoutUserNestedInput, {nullable:true})
    images?: InstanceType<typeof UserImageUpdateManyWithoutUserNestedInput>;
    @Field(() => ExitPageUpdateManyWithoutAuthorNestedInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUpdateManyWithoutAuthorNestedInput>;
    @Field(() => ReactionUpdateManyWithoutUserNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUpdateManyWithoutUserNestedInput>;
    @Field(() => VoteUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutUserNestedInput>;
    @Field(() => PageViewUpdateManyWithoutUserNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUpdateManyWithoutUserNestedInput>;
    @Field(() => PageVersionUpdateManyWithoutUpdatedByNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUpdateManyWithoutUpdatedByNestedInput>;
    @Field(() => RoleUpdateManyWithoutUsersNestedInput, {nullable:true})
    Role?: InstanceType<typeof RoleUpdateManyWithoutUsersNestedInput>;
    @Field(() => TemplateUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUpdateWithoutTemplateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => UserImageUpdateManyWithoutUserNestedInput, {nullable:true})
    images?: InstanceType<typeof UserImageUpdateManyWithoutUserNestedInput>;
    @Field(() => ExitPageUpdateManyWithoutAuthorNestedInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUpdateManyWithoutAuthorNestedInput>;
    @Field(() => ReactionUpdateManyWithoutUserNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUpdateManyWithoutUserNestedInput>;
    @Field(() => VoteUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutUserNestedInput>;
    @Field(() => PageViewUpdateManyWithoutUserNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUpdateManyWithoutUserNestedInput>;
    @Field(() => PageShareUpdateManyWithoutUserNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUpdateManyWithoutUserNestedInput>;
    @Field(() => PageVersionUpdateManyWithoutUpdatedByNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUpdateManyWithoutUpdatedByNestedInput>;
    @Field(() => RoleUpdateManyWithoutUsersNestedInput, {nullable:true})
    Role?: InstanceType<typeof RoleUpdateManyWithoutUsersNestedInput>;
}

@InputType()
export class UserUpdateWithoutTokensInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserImageUpdateManyWithoutUserNestedInput, {nullable:true})
    images?: InstanceType<typeof UserImageUpdateManyWithoutUserNestedInput>;
    @Field(() => ExitPageUpdateManyWithoutAuthorNestedInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUpdateManyWithoutAuthorNestedInput>;
    @Field(() => ReactionUpdateManyWithoutUserNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUpdateManyWithoutUserNestedInput>;
    @Field(() => VoteUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutUserNestedInput>;
    @Field(() => PageViewUpdateManyWithoutUserNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUpdateManyWithoutUserNestedInput>;
    @Field(() => PageShareUpdateManyWithoutUserNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUpdateManyWithoutUserNestedInput>;
    @Field(() => PageVersionUpdateManyWithoutUpdatedByNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUpdateManyWithoutUpdatedByNestedInput>;
    @Field(() => RoleUpdateManyWithoutUsersNestedInput, {nullable:true})
    Role?: InstanceType<typeof RoleUpdateManyWithoutUsersNestedInput>;
    @Field(() => TemplateUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUpdateWithoutVersionsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => UserImageUpdateManyWithoutUserNestedInput, {nullable:true})
    images?: InstanceType<typeof UserImageUpdateManyWithoutUserNestedInput>;
    @Field(() => ExitPageUpdateManyWithoutAuthorNestedInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUpdateManyWithoutAuthorNestedInput>;
    @Field(() => ReactionUpdateManyWithoutUserNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUpdateManyWithoutUserNestedInput>;
    @Field(() => VoteUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutUserNestedInput>;
    @Field(() => PageViewUpdateManyWithoutUserNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUpdateManyWithoutUserNestedInput>;
    @Field(() => PageShareUpdateManyWithoutUserNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUpdateManyWithoutUserNestedInput>;
    @Field(() => RoleUpdateManyWithoutUsersNestedInput, {nullable:true})
    Role?: InstanceType<typeof RoleUpdateManyWithoutUsersNestedInput>;
    @Field(() => TemplateUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUpdateWithoutViewsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => UserImageUpdateManyWithoutUserNestedInput, {nullable:true})
    images?: InstanceType<typeof UserImageUpdateManyWithoutUserNestedInput>;
    @Field(() => ExitPageUpdateManyWithoutAuthorNestedInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUpdateManyWithoutAuthorNestedInput>;
    @Field(() => ReactionUpdateManyWithoutUserNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUpdateManyWithoutUserNestedInput>;
    @Field(() => VoteUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutUserNestedInput>;
    @Field(() => PageShareUpdateManyWithoutUserNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUpdateManyWithoutUserNestedInput>;
    @Field(() => PageVersionUpdateManyWithoutUpdatedByNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUpdateManyWithoutUpdatedByNestedInput>;
    @Field(() => RoleUpdateManyWithoutUsersNestedInput, {nullable:true})
    Role?: InstanceType<typeof RoleUpdateManyWithoutUsersNestedInput>;
    @Field(() => TemplateUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUpdateWithoutVotesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => UserImageUpdateManyWithoutUserNestedInput, {nullable:true})
    images?: InstanceType<typeof UserImageUpdateManyWithoutUserNestedInput>;
    @Field(() => ExitPageUpdateManyWithoutAuthorNestedInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUpdateManyWithoutAuthorNestedInput>;
    @Field(() => ReactionUpdateManyWithoutUserNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutUserNestedInput>;
    @Field(() => PageViewUpdateManyWithoutUserNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUpdateManyWithoutUserNestedInput>;
    @Field(() => PageShareUpdateManyWithoutUserNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUpdateManyWithoutUserNestedInput>;
    @Field(() => PageVersionUpdateManyWithoutUpdatedByNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUpdateManyWithoutUpdatedByNestedInput>;
    @Field(() => RoleUpdateManyWithoutUsersNestedInput, {nullable:true})
    Role?: InstanceType<typeof RoleUpdateManyWithoutUsersNestedInput>;
    @Field(() => TemplateUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => UserImageUpdateManyWithoutUserNestedInput, {nullable:true})
    images?: InstanceType<typeof UserImageUpdateManyWithoutUserNestedInput>;
    @Field(() => ExitPageUpdateManyWithoutAuthorNestedInput, {nullable:true})
    pages?: InstanceType<typeof ExitPageUpdateManyWithoutAuthorNestedInput>;
    @Field(() => ReactionUpdateManyWithoutUserNestedInput, {nullable:true})
    reactions?: InstanceType<typeof ReactionUpdateManyWithoutUserNestedInput>;
    @Field(() => VoteUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutUserNestedInput>;
    @Field(() => PageViewUpdateManyWithoutUserNestedInput, {nullable:true})
    views?: InstanceType<typeof PageViewUpdateManyWithoutUserNestedInput>;
    @Field(() => PageShareUpdateManyWithoutUserNestedInput, {nullable:true})
    shares?: InstanceType<typeof PageShareUpdateManyWithoutUserNestedInput>;
    @Field(() => PageVersionUpdateManyWithoutUpdatedByNestedInput, {nullable:true})
    versions?: InstanceType<typeof PageVersionUpdateManyWithoutUpdatedByNestedInput>;
    @Field(() => RoleUpdateManyWithoutUsersNestedInput, {nullable:true})
    Role?: InstanceType<typeof RoleUpdateManyWithoutUsersNestedInput>;
    @Field(() => TemplateUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Template?: InstanceType<typeof TemplateUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUpsertWithWhereUniqueWithoutRoleInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserUpdateWithoutRoleInput, {nullable:false})
    @Type(() => UserUpdateWithoutRoleInput)
    update!: InstanceType<typeof UserUpdateWithoutRoleInput>;
    @Field(() => UserCreateWithoutRoleInput, {nullable:false})
    @Type(() => UserCreateWithoutRoleInput)
    create!: InstanceType<typeof UserCreateWithoutRoleInput>;
}

@InputType()
export class UserUpsertWithoutCommentsInput {
    @Field(() => UserUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => UserUpdateWithoutCommentsInput)
    update!: InstanceType<typeof UserUpdateWithoutCommentsInput>;
    @Field(() => UserCreateWithoutCommentsInput, {nullable:false})
    @Type(() => UserCreateWithoutCommentsInput)
    create!: InstanceType<typeof UserCreateWithoutCommentsInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserUpsertWithoutImagesInput {
    @Field(() => UserUpdateWithoutImagesInput, {nullable:false})
    @Type(() => UserUpdateWithoutImagesInput)
    update!: InstanceType<typeof UserUpdateWithoutImagesInput>;
    @Field(() => UserCreateWithoutImagesInput, {nullable:false})
    @Type(() => UserCreateWithoutImagesInput)
    create!: InstanceType<typeof UserCreateWithoutImagesInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserUpsertWithoutPagesInput {
    @Field(() => UserUpdateWithoutPagesInput, {nullable:false})
    @Type(() => UserUpdateWithoutPagesInput)
    update!: InstanceType<typeof UserUpdateWithoutPagesInput>;
    @Field(() => UserCreateWithoutPagesInput, {nullable:false})
    @Type(() => UserCreateWithoutPagesInput)
    create!: InstanceType<typeof UserCreateWithoutPagesInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserUpsertWithoutReactionsInput {
    @Field(() => UserUpdateWithoutReactionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutReactionsInput)
    update!: InstanceType<typeof UserUpdateWithoutReactionsInput>;
    @Field(() => UserCreateWithoutReactionsInput, {nullable:false})
    @Type(() => UserCreateWithoutReactionsInput)
    create!: InstanceType<typeof UserCreateWithoutReactionsInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserUpsertWithoutSharesInput {
    @Field(() => UserUpdateWithoutSharesInput, {nullable:false})
    @Type(() => UserUpdateWithoutSharesInput)
    update!: InstanceType<typeof UserUpdateWithoutSharesInput>;
    @Field(() => UserCreateWithoutSharesInput, {nullable:false})
    @Type(() => UserCreateWithoutSharesInput)
    create!: InstanceType<typeof UserCreateWithoutSharesInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserUpsertWithoutTemplateInput {
    @Field(() => UserUpdateWithoutTemplateInput, {nullable:false})
    @Type(() => UserUpdateWithoutTemplateInput)
    update!: InstanceType<typeof UserUpdateWithoutTemplateInput>;
    @Field(() => UserCreateWithoutTemplateInput, {nullable:false})
    @Type(() => UserCreateWithoutTemplateInput)
    create!: InstanceType<typeof UserCreateWithoutTemplateInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserUpsertWithoutTokensInput {
    @Field(() => UserUpdateWithoutTokensInput, {nullable:false})
    @Type(() => UserUpdateWithoutTokensInput)
    update!: InstanceType<typeof UserUpdateWithoutTokensInput>;
    @Field(() => UserCreateWithoutTokensInput, {nullable:false})
    @Type(() => UserCreateWithoutTokensInput)
    create!: InstanceType<typeof UserCreateWithoutTokensInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserUpsertWithoutVersionsInput {
    @Field(() => UserUpdateWithoutVersionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutVersionsInput)
    update!: InstanceType<typeof UserUpdateWithoutVersionsInput>;
    @Field(() => UserCreateWithoutVersionsInput, {nullable:false})
    @Type(() => UserCreateWithoutVersionsInput)
    create!: InstanceType<typeof UserCreateWithoutVersionsInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserUpsertWithoutViewsInput {
    @Field(() => UserUpdateWithoutViewsInput, {nullable:false})
    @Type(() => UserUpdateWithoutViewsInput)
    update!: InstanceType<typeof UserUpdateWithoutViewsInput>;
    @Field(() => UserCreateWithoutViewsInput, {nullable:false})
    @Type(() => UserCreateWithoutViewsInput)
    create!: InstanceType<typeof UserCreateWithoutViewsInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserUpsertWithoutVotesInput {
    @Field(() => UserUpdateWithoutVotesInput, {nullable:false})
    @Type(() => UserUpdateWithoutVotesInput)
    update!: InstanceType<typeof UserUpdateWithoutVotesInput>;
    @Field(() => UserCreateWithoutVotesInput, {nullable:false})
    @Type(() => UserCreateWithoutVotesInput)
    create!: InstanceType<typeof UserCreateWithoutVotesInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

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
    firstName?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    lastName?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    phone?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    isVerified?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => RefreshTokenListRelationFilter, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenListRelationFilter>;
    @Field(() => UserImageListRelationFilter, {nullable:true})
    images?: InstanceType<typeof UserImageListRelationFilter>;
    @Field(() => ExitPageListRelationFilter, {nullable:true})
    pages?: InstanceType<typeof ExitPageListRelationFilter>;
    @Field(() => ReactionListRelationFilter, {nullable:true})
    reactions?: InstanceType<typeof ReactionListRelationFilter>;
    @Field(() => VoteListRelationFilter, {nullable:true})
    votes?: InstanceType<typeof VoteListRelationFilter>;
    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: InstanceType<typeof CommentListRelationFilter>;
    @Field(() => PageViewListRelationFilter, {nullable:true})
    views?: InstanceType<typeof PageViewListRelationFilter>;
    @Field(() => PageShareListRelationFilter, {nullable:true})
    shares?: InstanceType<typeof PageShareListRelationFilter>;
    @Field(() => PageVersionListRelationFilter, {nullable:true})
    versions?: InstanceType<typeof PageVersionListRelationFilter>;
    @Field(() => RoleListRelationFilter, {nullable:true})
    Role?: InstanceType<typeof RoleListRelationFilter>;
    @Field(() => TemplateListRelationFilter, {nullable:true})
    Template?: InstanceType<typeof TemplateListRelationFilter>;
}

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    firstName?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    lastName?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    phone?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    username?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    isVerified?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => RefreshTokenListRelationFilter, {nullable:true})
    tokens?: InstanceType<typeof RefreshTokenListRelationFilter>;
    @Field(() => UserImageListRelationFilter, {nullable:true})
    images?: InstanceType<typeof UserImageListRelationFilter>;
    @Field(() => ExitPageListRelationFilter, {nullable:true})
    pages?: InstanceType<typeof ExitPageListRelationFilter>;
    @Field(() => ReactionListRelationFilter, {nullable:true})
    reactions?: InstanceType<typeof ReactionListRelationFilter>;
    @Field(() => VoteListRelationFilter, {nullable:true})
    votes?: InstanceType<typeof VoteListRelationFilter>;
    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: InstanceType<typeof CommentListRelationFilter>;
    @Field(() => PageViewListRelationFilter, {nullable:true})
    views?: InstanceType<typeof PageViewListRelationFilter>;
    @Field(() => PageShareListRelationFilter, {nullable:true})
    shares?: InstanceType<typeof PageShareListRelationFilter>;
    @Field(() => PageVersionListRelationFilter, {nullable:true})
    versions?: InstanceType<typeof PageVersionListRelationFilter>;
    @Field(() => RoleListRelationFilter, {nullable:true})
    Role?: InstanceType<typeof RoleListRelationFilter>;
    @Field(() => TemplateListRelationFilter, {nullable:true})
    Template?: InstanceType<typeof TemplateListRelationFilter>;
}

@ObjectType()
export class User {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:true})
    lastName!: string | null;
    @Field(() => String, {nullable:true})
    phone!: string | null;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {defaultValue:false,nullable:false})
    isVerified!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [RefreshToken], {nullable:true})
    tokens?: Array<RefreshToken>;
    @Field(() => [UserImage], {nullable:true})
    images?: Array<UserImage>;
    @Field(() => [ExitPage], {nullable:true})
    pages?: Array<ExitPage>;
    @Field(() => [Reaction], {nullable:true})
    reactions?: Array<Reaction>;
    @Field(() => [Vote], {nullable:true})
    votes?: Array<Vote>;
    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;
    @Field(() => [PageView], {nullable:true})
    views?: Array<PageView>;
    @Field(() => [PageShare], {nullable:true})
    shares?: Array<PageShare>;
    @Field(() => [PageVersion], {nullable:true})
    versions?: Array<PageVersion>;
    @Field(() => [Role], {nullable:true})
    Role?: Array<Role>;
    @Field(() => [Template], {nullable:true})
    Template?: Array<Template>;
    @Field(() => UserCount, {nullable:false})
    _count?: InstanceType<typeof UserCount>;
}

@ObjectType()
export class AggregateUserImage {
    @Field(() => UserImageCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserImageCountAggregate>;
    @Field(() => UserImageMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserImageMinAggregate>;
    @Field(() => UserImageMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserImageMaxAggregate>;
}

@ArgsType()
export class CreateManyUserImageArgs {
    @Field(() => [UserImageCreateManyInput], {nullable:false})
    @Type(() => UserImageCreateManyInput)
    data!: Array<UserImageCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserImageArgs {
    @Field(() => UserImageCreateInput, {nullable:false})
    @Type(() => UserImageCreateInput)
    data!: InstanceType<typeof UserImageCreateInput>;
}

@ArgsType()
export class DeleteManyUserImageArgs {
    @Field(() => UserImageWhereInput, {nullable:true})
    @Type(() => UserImageWhereInput)
    where?: InstanceType<typeof UserImageWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneUserImageArgs {
    @Field(() => UserImageWhereUniqueInput, {nullable:false})
    @Type(() => UserImageWhereUniqueInput)
    where!: Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstUserImageOrThrowArgs {
    @Field(() => UserImageWhereInput, {nullable:true})
    @Type(() => UserImageWhereInput)
    where?: InstanceType<typeof UserImageWhereInput>;
    @Field(() => [UserImageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserImageOrderByWithRelationInput>;
    @Field(() => UserImageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserImageScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UserImageScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstUserImageArgs {
    @Field(() => UserImageWhereInput, {nullable:true})
    @Type(() => UserImageWhereInput)
    where?: InstanceType<typeof UserImageWhereInput>;
    @Field(() => [UserImageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserImageOrderByWithRelationInput>;
    @Field(() => UserImageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserImageScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UserImageScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyUserImageArgs {
    @Field(() => UserImageWhereInput, {nullable:true})
    @Type(() => UserImageWhereInput)
    where?: InstanceType<typeof UserImageWhereInput>;
    @Field(() => [UserImageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserImageOrderByWithRelationInput>;
    @Field(() => UserImageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserImageScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UserImageScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueUserImageOrThrowArgs {
    @Field(() => UserImageWhereUniqueInput, {nullable:false})
    @Type(() => UserImageWhereUniqueInput)
    where!: Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueUserImageArgs {
    @Field(() => UserImageWhereUniqueInput, {nullable:false})
    @Type(() => UserImageWhereUniqueInput)
    where!: Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpdateManyUserImageArgs {
    @Field(() => UserImageUpdateManyMutationInput, {nullable:false})
    @Type(() => UserImageUpdateManyMutationInput)
    data!: InstanceType<typeof UserImageUpdateManyMutationInput>;
    @Field(() => UserImageWhereInput, {nullable:true})
    @Type(() => UserImageWhereInput)
    where?: InstanceType<typeof UserImageWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneUserImageArgs {
    @Field(() => UserImageUpdateInput, {nullable:false})
    @Type(() => UserImageUpdateInput)
    data!: InstanceType<typeof UserImageUpdateInput>;
    @Field(() => UserImageWhereUniqueInput, {nullable:false})
    @Type(() => UserImageWhereUniqueInput)
    where!: Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneUserImageArgs {
    @Field(() => UserImageWhereUniqueInput, {nullable:false})
    @Type(() => UserImageWhereUniqueInput)
    where!: Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>;
    @Field(() => UserImageCreateInput, {nullable:false})
    @Type(() => UserImageCreateInput)
    create!: InstanceType<typeof UserImageCreateInput>;
    @Field(() => UserImageUpdateInput, {nullable:false})
    @Type(() => UserImageUpdateInput)
    update!: InstanceType<typeof UserImageUpdateInput>;
}

@ArgsType()
export class UserImageAggregateArgs {
    @Field(() => UserImageWhereInput, {nullable:true})
    @Type(() => UserImageWhereInput)
    where?: InstanceType<typeof UserImageWhereInput>;
    @Field(() => [UserImageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserImageOrderByWithRelationInput>;
    @Field(() => UserImageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserImageCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserImageCountAggregateInput>;
    @Field(() => UserImageMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserImageMinAggregateInput>;
    @Field(() => UserImageMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserImageMaxAggregateInput>;
}

@InputType()
export class UserImageCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    url?: true;
    @Field(() => Boolean, {nullable:true})
    type?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserImageCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    url!: number;
    @Field(() => Int, {nullable:false})
    type!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserImageCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    url?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
}

@InputType()
export class UserImageCreateManyUserInputEnvelope {
    @Field(() => [UserImageCreateManyUserInput], {nullable:false})
    @Type(() => UserImageCreateManyUserInput)
    data!: Array<UserImageCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class UserImageCreateManyUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => String, {nullable:false})
    type!: string;
}

@InputType()
export class UserImageCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => String, {nullable:false})
    type!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
}

@InputType()
export class UserImageCreateNestedManyWithoutUserInput {
    @Field(() => [UserImageCreateWithoutUserInput], {nullable:true})
    @Type(() => UserImageCreateWithoutUserInput)
    create?: Array<UserImageCreateWithoutUserInput>;
    @Field(() => [UserImageCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserImageCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserImageCreateOrConnectWithoutUserInput>;
    @Field(() => UserImageCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserImageCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof UserImageCreateManyUserInputEnvelope>;
    @Field(() => [UserImageWhereUniqueInput], {nullable:true})
    @Type(() => UserImageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>>;
}

@InputType()
export class UserImageCreateOrConnectWithoutUserInput {
    @Field(() => UserImageWhereUniqueInput, {nullable:false})
    @Type(() => UserImageWhereUniqueInput)
    where!: Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>;
    @Field(() => UserImageCreateWithoutUserInput, {nullable:false})
    @Type(() => UserImageCreateWithoutUserInput)
    create!: InstanceType<typeof UserImageCreateWithoutUserInput>;
}

@InputType()
export class UserImageCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => String, {nullable:false})
    type!: string;
}

@InputType()
export class UserImageCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => String, {nullable:false})
    type!: string;
    @Field(() => UserCreateNestedOneWithoutImagesInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutImagesInput>;
}

@ArgsType()
export class UserImageGroupByArgs {
    @Field(() => UserImageWhereInput, {nullable:true})
    @Type(() => UserImageWhereInput)
    where?: InstanceType<typeof UserImageWhereInput>;
    @Field(() => [UserImageOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserImageOrderByWithAggregationInput>;
    @Field(() => [UserImageScalarFieldEnum], {nullable:false})
    by!: Array<`${UserImageScalarFieldEnum}`>;
    @Field(() => UserImageScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserImageScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserImageCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserImageCountAggregateInput>;
    @Field(() => UserImageMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserImageMinAggregateInput>;
    @Field(() => UserImageMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserImageMaxAggregateInput>;
}

@ObjectType()
export class UserImageGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => String, {nullable:false})
    type!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => UserImageCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserImageCountAggregate>;
    @Field(() => UserImageMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserImageMinAggregate>;
    @Field(() => UserImageMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserImageMaxAggregate>;
}

@InputType()
export class UserImageListRelationFilter {
    @Field(() => UserImageWhereInput, {nullable:true})
    every?: InstanceType<typeof UserImageWhereInput>;
    @Field(() => UserImageWhereInput, {nullable:true})
    some?: InstanceType<typeof UserImageWhereInput>;
    @Field(() => UserImageWhereInput, {nullable:true})
    none?: InstanceType<typeof UserImageWhereInput>;
}

@InputType()
export class UserImageMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    url?: true;
    @Field(() => Boolean, {nullable:true})
    type?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
}

@ObjectType()
export class UserImageMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    url?: string;
    @Field(() => String, {nullable:true})
    type?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
}

@InputType()
export class UserImageMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    url?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
}

@InputType()
export class UserImageMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    url?: true;
    @Field(() => Boolean, {nullable:true})
    type?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
}

@ObjectType()
export class UserImageMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    url?: string;
    @Field(() => String, {nullable:true})
    type?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
}

@InputType()
export class UserImageMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    url?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
}

@InputType()
export class UserImageOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class UserImageOrderByRelevanceInput {
    @Field(() => [UserImageOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${UserImageOrderByRelevanceFieldEnum}`>;
    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;
    @Field(() => String, {nullable:false})
    search!: string;
}

@InputType()
export class UserImageOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    url?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => UserImageCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserImageCountOrderByAggregateInput>;
    @Field(() => UserImageMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserImageMaxOrderByAggregateInput>;
    @Field(() => UserImageMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserImageMinOrderByAggregateInput>;
}

@InputType()
export class UserImageOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    url?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => UserImageOrderByRelevanceInput, {nullable:true})
    _relevance?: InstanceType<typeof UserImageOrderByRelevanceInput>;
}

@InputType()
export class UserImageScalarWhereWithAggregatesInput {
    @Field(() => [UserImageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserImageScalarWhereWithAggregatesInput>;
    @Field(() => [UserImageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserImageScalarWhereWithAggregatesInput>;
    @Field(() => [UserImageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserImageScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    url?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    type?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class UserImageScalarWhereInput {
    @Field(() => [UserImageScalarWhereInput], {nullable:true})
    AND?: Array<UserImageScalarWhereInput>;
    @Field(() => [UserImageScalarWhereInput], {nullable:true})
    OR?: Array<UserImageScalarWhereInput>;
    @Field(() => [UserImageScalarWhereInput], {nullable:true})
    NOT?: Array<UserImageScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    url?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    type?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class UserImageUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [UserImageCreateWithoutUserInput], {nullable:true})
    @Type(() => UserImageCreateWithoutUserInput)
    create?: Array<UserImageCreateWithoutUserInput>;
    @Field(() => [UserImageCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserImageCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserImageCreateOrConnectWithoutUserInput>;
    @Field(() => UserImageCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserImageCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof UserImageCreateManyUserInputEnvelope>;
    @Field(() => [UserImageWhereUniqueInput], {nullable:true})
    @Type(() => UserImageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>>;
}

@InputType()
export class UserImageUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => String, {nullable:false})
    type!: string;
}

@InputType()
export class UserImageUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => String, {nullable:false})
    type!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
}

@InputType()
export class UserImageUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [UserImageCreateWithoutUserInput], {nullable:true})
    @Type(() => UserImageCreateWithoutUserInput)
    create?: Array<UserImageCreateWithoutUserInput>;
    @Field(() => [UserImageCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserImageCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserImageCreateOrConnectWithoutUserInput>;
    @Field(() => [UserImageUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserImageUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserImageUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => UserImageCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserImageCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof UserImageCreateManyUserInputEnvelope>;
    @Field(() => [UserImageWhereUniqueInput], {nullable:true})
    @Type(() => UserImageWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>>;
    @Field(() => [UserImageWhereUniqueInput], {nullable:true})
    @Type(() => UserImageWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>>;
    @Field(() => [UserImageWhereUniqueInput], {nullable:true})
    @Type(() => UserImageWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>>;
    @Field(() => [UserImageWhereUniqueInput], {nullable:true})
    @Type(() => UserImageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>>;
    @Field(() => [UserImageUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserImageUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserImageUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [UserImageUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserImageUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserImageUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [UserImageScalarWhereInput], {nullable:true})
    @Type(() => UserImageScalarWhereInput)
    deleteMany?: Array<UserImageScalarWhereInput>;
}

@InputType()
export class UserImageUncheckedUpdateManyWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class UserImageUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class UserImageUncheckedUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class UserImageUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class UserImageUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class UserImageUpdateManyWithWhereWithoutUserInput {
    @Field(() => UserImageScalarWhereInput, {nullable:false})
    @Type(() => UserImageScalarWhereInput)
    where!: InstanceType<typeof UserImageScalarWhereInput>;
    @Field(() => UserImageUpdateManyMutationInput, {nullable:false})
    @Type(() => UserImageUpdateManyMutationInput)
    data!: InstanceType<typeof UserImageUpdateManyMutationInput>;
}

@InputType()
export class UserImageUpdateManyWithoutUserNestedInput {
    @Field(() => [UserImageCreateWithoutUserInput], {nullable:true})
    @Type(() => UserImageCreateWithoutUserInput)
    create?: Array<UserImageCreateWithoutUserInput>;
    @Field(() => [UserImageCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserImageCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserImageCreateOrConnectWithoutUserInput>;
    @Field(() => [UserImageUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserImageUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserImageUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => UserImageCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserImageCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof UserImageCreateManyUserInputEnvelope>;
    @Field(() => [UserImageWhereUniqueInput], {nullable:true})
    @Type(() => UserImageWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>>;
    @Field(() => [UserImageWhereUniqueInput], {nullable:true})
    @Type(() => UserImageWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>>;
    @Field(() => [UserImageWhereUniqueInput], {nullable:true})
    @Type(() => UserImageWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>>;
    @Field(() => [UserImageWhereUniqueInput], {nullable:true})
    @Type(() => UserImageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>>;
    @Field(() => [UserImageUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserImageUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserImageUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [UserImageUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserImageUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserImageUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [UserImageScalarWhereInput], {nullable:true})
    @Type(() => UserImageScalarWhereInput)
    deleteMany?: Array<UserImageScalarWhereInput>;
}

@InputType()
export class UserImageUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => UserImageWhereUniqueInput, {nullable:false})
    @Type(() => UserImageWhereUniqueInput)
    where!: Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>;
    @Field(() => UserImageUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserImageUpdateWithoutUserInput)
    data!: InstanceType<typeof UserImageUpdateWithoutUserInput>;
}

@InputType()
export class UserImageUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class UserImageUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutImagesNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutImagesNestedInput>;
}

@InputType()
export class UserImageUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => UserImageWhereUniqueInput, {nullable:false})
    @Type(() => UserImageWhereUniqueInput)
    where!: Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>;
    @Field(() => UserImageUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserImageUpdateWithoutUserInput)
    update!: InstanceType<typeof UserImageUpdateWithoutUserInput>;
    @Field(() => UserImageCreateWithoutUserInput, {nullable:false})
    @Type(() => UserImageCreateWithoutUserInput)
    create!: InstanceType<typeof UserImageCreateWithoutUserInput>;
}

@InputType()
export class UserImageWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [UserImageWhereInput], {nullable:true})
    AND?: Array<UserImageWhereInput>;
    @Field(() => [UserImageWhereInput], {nullable:true})
    OR?: Array<UserImageWhereInput>;
    @Field(() => [UserImageWhereInput], {nullable:true})
    NOT?: Array<UserImageWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    url?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    type?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserScalarRelationFilter>;
}

@InputType()
export class UserImageWhereInput {
    @Field(() => [UserImageWhereInput], {nullable:true})
    AND?: Array<UserImageWhereInput>;
    @Field(() => [UserImageWhereInput], {nullable:true})
    OR?: Array<UserImageWhereInput>;
    @Field(() => [UserImageWhereInput], {nullable:true})
    NOT?: Array<UserImageWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    url?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    type?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserScalarRelationFilter>;
}

@ObjectType()
export class UserImage {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => String, {nullable:false})
    type!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => User, {nullable:false})
    user?: InstanceType<typeof User>;
}

@ObjectType()
export class AggregateVote {
    @Field(() => VoteCountAggregate, {nullable:true})
    _count?: InstanceType<typeof VoteCountAggregate>;
    @Field(() => VoteMinAggregate, {nullable:true})
    _min?: InstanceType<typeof VoteMinAggregate>;
    @Field(() => VoteMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof VoteMaxAggregate>;
}

@ArgsType()
export class CreateManyVoteArgs {
    @Field(() => [VoteCreateManyInput], {nullable:false})
    @Type(() => VoteCreateManyInput)
    data!: Array<VoteCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneVoteArgs {
    @Field(() => VoteCreateInput, {nullable:false})
    @Type(() => VoteCreateInput)
    data!: InstanceType<typeof VoteCreateInput>;
}

@ArgsType()
export class DeleteManyVoteArgs {
    @Field(() => VoteWhereInput, {nullable:true})
    @Type(() => VoteWhereInput)
    where?: InstanceType<typeof VoteWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneVoteArgs {
    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>;
}

@ArgsType()
export class FindFirstVoteOrThrowArgs {
    @Field(() => VoteWhereInput, {nullable:true})
    @Type(() => VoteWhereInput)
    where?: InstanceType<typeof VoteWhereInput>;
    @Field(() => [VoteOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VoteOrderByWithRelationInput>;
    @Field(() => VoteWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [VoteScalarFieldEnum], {nullable:true})
    distinct?: Array<`${VoteScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstVoteArgs {
    @Field(() => VoteWhereInput, {nullable:true})
    @Type(() => VoteWhereInput)
    where?: InstanceType<typeof VoteWhereInput>;
    @Field(() => [VoteOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VoteOrderByWithRelationInput>;
    @Field(() => VoteWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [VoteScalarFieldEnum], {nullable:true})
    distinct?: Array<`${VoteScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyVoteArgs {
    @Field(() => VoteWhereInput, {nullable:true})
    @Type(() => VoteWhereInput)
    where?: InstanceType<typeof VoteWhereInput>;
    @Field(() => [VoteOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VoteOrderByWithRelationInput>;
    @Field(() => VoteWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [VoteScalarFieldEnum], {nullable:true})
    distinct?: Array<`${VoteScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueVoteOrThrowArgs {
    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>;
}

@ArgsType()
export class FindUniqueVoteArgs {
    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>;
}

@ArgsType()
export class UpdateManyVoteArgs {
    @Field(() => VoteUpdateManyMutationInput, {nullable:false})
    @Type(() => VoteUpdateManyMutationInput)
    data!: InstanceType<typeof VoteUpdateManyMutationInput>;
    @Field(() => VoteWhereInput, {nullable:true})
    @Type(() => VoteWhereInput)
    where?: InstanceType<typeof VoteWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneVoteArgs {
    @Field(() => VoteUpdateInput, {nullable:false})
    @Type(() => VoteUpdateInput)
    data!: InstanceType<typeof VoteUpdateInput>;
    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>;
}

@ArgsType()
export class UpsertOneVoteArgs {
    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>;
    @Field(() => VoteCreateInput, {nullable:false})
    @Type(() => VoteCreateInput)
    create!: InstanceType<typeof VoteCreateInput>;
    @Field(() => VoteUpdateInput, {nullable:false})
    @Type(() => VoteUpdateInput)
    update!: InstanceType<typeof VoteUpdateInput>;
}

@ArgsType()
export class VoteAggregateArgs {
    @Field(() => VoteWhereInput, {nullable:true})
    @Type(() => VoteWhereInput)
    where?: InstanceType<typeof VoteWhereInput>;
    @Field(() => [VoteOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VoteOrderByWithRelationInput>;
    @Field(() => VoteWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => VoteCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof VoteCountAggregateInput>;
    @Field(() => VoteMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof VoteMinAggregateInput>;
    @Field(() => VoteMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof VoteMaxAggregateInput>;
}

@InputType()
export class VoteCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    pageId?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class VoteCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    pageId!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class VoteCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class VoteCreateManyPageInputEnvelope {
    @Field(() => [VoteCreateManyPageInput], {nullable:false})
    @Type(() => VoteCreateManyPageInput)
    data!: Array<VoteCreateManyPageInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class VoteCreateManyPageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class VoteCreateManyUserInputEnvelope {
    @Field(() => [VoteCreateManyUserInput], {nullable:false})
    @Type(() => VoteCreateManyUserInput)
    data!: Array<VoteCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class VoteCreateManyUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class VoteCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class VoteCreateNestedManyWithoutPageInput {
    @Field(() => [VoteCreateWithoutPageInput], {nullable:true})
    @Type(() => VoteCreateWithoutPageInput)
    create?: Array<VoteCreateWithoutPageInput>;
    @Field(() => [VoteCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => VoteCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<VoteCreateOrConnectWithoutPageInput>;
    @Field(() => VoteCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => VoteCreateManyPageInputEnvelope)
    createMany?: InstanceType<typeof VoteCreateManyPageInputEnvelope>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>>;
}

@InputType()
export class VoteCreateNestedManyWithoutUserInput {
    @Field(() => [VoteCreateWithoutUserInput], {nullable:true})
    @Type(() => VoteCreateWithoutUserInput)
    create?: Array<VoteCreateWithoutUserInput>;
    @Field(() => [VoteCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => VoteCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<VoteCreateOrConnectWithoutUserInput>;
    @Field(() => VoteCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => VoteCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof VoteCreateManyUserInputEnvelope>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>>;
}

@InputType()
export class VoteCreateOrConnectWithoutPageInput {
    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>;
    @Field(() => VoteCreateWithoutPageInput, {nullable:false})
    @Type(() => VoteCreateWithoutPageInput)
    create!: InstanceType<typeof VoteCreateWithoutPageInput>;
}

@InputType()
export class VoteCreateOrConnectWithoutUserInput {
    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>;
    @Field(() => VoteCreateWithoutUserInput, {nullable:false})
    @Type(() => VoteCreateWithoutUserInput)
    create!: InstanceType<typeof VoteCreateWithoutUserInput>;
}

@InputType()
export class VoteCreateWithoutPageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutVotesInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutVotesInput>;
}

@InputType()
export class VoteCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => ExitPageCreateNestedOneWithoutVotesInput, {nullable:false})
    page!: InstanceType<typeof ExitPageCreateNestedOneWithoutVotesInput>;
}

@InputType()
export class VoteCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => ExitPageCreateNestedOneWithoutVotesInput, {nullable:false})
    page!: InstanceType<typeof ExitPageCreateNestedOneWithoutVotesInput>;
    @Field(() => UserCreateNestedOneWithoutVotesInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutVotesInput>;
}

@ArgsType()
export class VoteGroupByArgs {
    @Field(() => VoteWhereInput, {nullable:true})
    @Type(() => VoteWhereInput)
    where?: InstanceType<typeof VoteWhereInput>;
    @Field(() => [VoteOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<VoteOrderByWithAggregationInput>;
    @Field(() => [VoteScalarFieldEnum], {nullable:false})
    by!: Array<`${VoteScalarFieldEnum}`>;
    @Field(() => VoteScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof VoteScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => VoteCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof VoteCountAggregateInput>;
    @Field(() => VoteMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof VoteMinAggregateInput>;
    @Field(() => VoteMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof VoteMaxAggregateInput>;
}

@ObjectType()
export class VoteGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => VoteCountAggregate, {nullable:true})
    _count?: InstanceType<typeof VoteCountAggregate>;
    @Field(() => VoteMinAggregate, {nullable:true})
    _min?: InstanceType<typeof VoteMinAggregate>;
    @Field(() => VoteMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof VoteMaxAggregate>;
}

@InputType()
export class VoteListRelationFilter {
    @Field(() => VoteWhereInput, {nullable:true})
    every?: InstanceType<typeof VoteWhereInput>;
    @Field(() => VoteWhereInput, {nullable:true})
    some?: InstanceType<typeof VoteWhereInput>;
    @Field(() => VoteWhereInput, {nullable:true})
    none?: InstanceType<typeof VoteWhereInput>;
}

@InputType()
export class VoteMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    pageId?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class VoteMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    pageId?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class VoteMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class VoteMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    pageId?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class VoteMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    pageId?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class VoteMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class VoteOne_vote_per_user_pageCompoundUniqueInput {
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
}

@InputType()
export class VoteOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class VoteOrderByRelevanceInput {
    @Field(() => [VoteOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${VoteOrderByRelevanceFieldEnum}`>;
    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;
    @Field(() => String, {nullable:false})
    search!: string;
}

@InputType()
export class VoteOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    userId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => VoteCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof VoteCountOrderByAggregateInput>;
    @Field(() => VoteMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof VoteMaxOrderByAggregateInput>;
    @Field(() => VoteMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof VoteMinOrderByAggregateInput>;
}

@InputType()
export class VoteOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    userId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => ExitPageOrderByWithRelationInput, {nullable:true})
    page?: InstanceType<typeof ExitPageOrderByWithRelationInput>;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => VoteOrderByRelevanceInput, {nullable:true})
    _relevance?: InstanceType<typeof VoteOrderByRelevanceInput>;
}

@InputType()
export class VoteScalarWhereWithAggregatesInput {
    @Field(() => [VoteScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<VoteScalarWhereWithAggregatesInput>;
    @Field(() => [VoteScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<VoteScalarWhereWithAggregatesInput>;
    @Field(() => [VoteScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<VoteScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    pageId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class VoteScalarWhereInput {
    @Field(() => [VoteScalarWhereInput], {nullable:true})
    AND?: Array<VoteScalarWhereInput>;
    @Field(() => [VoteScalarWhereInput], {nullable:true})
    OR?: Array<VoteScalarWhereInput>;
    @Field(() => [VoteScalarWhereInput], {nullable:true})
    NOT?: Array<VoteScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    pageId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    userId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class VoteUncheckedCreateNestedManyWithoutPageInput {
    @Field(() => [VoteCreateWithoutPageInput], {nullable:true})
    @Type(() => VoteCreateWithoutPageInput)
    create?: Array<VoteCreateWithoutPageInput>;
    @Field(() => [VoteCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => VoteCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<VoteCreateOrConnectWithoutPageInput>;
    @Field(() => VoteCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => VoteCreateManyPageInputEnvelope)
    createMany?: InstanceType<typeof VoteCreateManyPageInputEnvelope>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>>;
}

@InputType()
export class VoteUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [VoteCreateWithoutUserInput], {nullable:true})
    @Type(() => VoteCreateWithoutUserInput)
    create?: Array<VoteCreateWithoutUserInput>;
    @Field(() => [VoteCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => VoteCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<VoteCreateOrConnectWithoutUserInput>;
    @Field(() => VoteCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => VoteCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof VoteCreateManyUserInputEnvelope>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>>;
}

@InputType()
export class VoteUncheckedCreateWithoutPageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class VoteUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class VoteUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class VoteUncheckedUpdateManyWithoutPageNestedInput {
    @Field(() => [VoteCreateWithoutPageInput], {nullable:true})
    @Type(() => VoteCreateWithoutPageInput)
    create?: Array<VoteCreateWithoutPageInput>;
    @Field(() => [VoteCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => VoteCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<VoteCreateOrConnectWithoutPageInput>;
    @Field(() => [VoteUpsertWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => VoteUpsertWithWhereUniqueWithoutPageInput)
    upsert?: Array<VoteUpsertWithWhereUniqueWithoutPageInput>;
    @Field(() => VoteCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => VoteCreateManyPageInputEnvelope)
    createMany?: InstanceType<typeof VoteCreateManyPageInputEnvelope>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    set?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>>;
    @Field(() => [VoteUpdateWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => VoteUpdateWithWhereUniqueWithoutPageInput)
    update?: Array<VoteUpdateWithWhereUniqueWithoutPageInput>;
    @Field(() => [VoteUpdateManyWithWhereWithoutPageInput], {nullable:true})
    @Type(() => VoteUpdateManyWithWhereWithoutPageInput)
    updateMany?: Array<VoteUpdateManyWithWhereWithoutPageInput>;
    @Field(() => [VoteScalarWhereInput], {nullable:true})
    @Type(() => VoteScalarWhereInput)
    deleteMany?: Array<VoteScalarWhereInput>;
}

@InputType()
export class VoteUncheckedUpdateManyWithoutPageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class VoteUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [VoteCreateWithoutUserInput], {nullable:true})
    @Type(() => VoteCreateWithoutUserInput)
    create?: Array<VoteCreateWithoutUserInput>;
    @Field(() => [VoteCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => VoteCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<VoteCreateOrConnectWithoutUserInput>;
    @Field(() => [VoteUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => VoteUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<VoteUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => VoteCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => VoteCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof VoteCreateManyUserInputEnvelope>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    set?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>>;
    @Field(() => [VoteUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => VoteUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<VoteUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [VoteUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => VoteUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<VoteUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [VoteScalarWhereInput], {nullable:true})
    @Type(() => VoteScalarWhereInput)
    deleteMany?: Array<VoteScalarWhereInput>;
}

@InputType()
export class VoteUncheckedUpdateManyWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class VoteUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class VoteUncheckedUpdateWithoutPageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class VoteUncheckedUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class VoteUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class VoteUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class VoteUpdateManyWithWhereWithoutPageInput {
    @Field(() => VoteScalarWhereInput, {nullable:false})
    @Type(() => VoteScalarWhereInput)
    where!: InstanceType<typeof VoteScalarWhereInput>;
    @Field(() => VoteUpdateManyMutationInput, {nullable:false})
    @Type(() => VoteUpdateManyMutationInput)
    data!: InstanceType<typeof VoteUpdateManyMutationInput>;
}

@InputType()
export class VoteUpdateManyWithWhereWithoutUserInput {
    @Field(() => VoteScalarWhereInput, {nullable:false})
    @Type(() => VoteScalarWhereInput)
    where!: InstanceType<typeof VoteScalarWhereInput>;
    @Field(() => VoteUpdateManyMutationInput, {nullable:false})
    @Type(() => VoteUpdateManyMutationInput)
    data!: InstanceType<typeof VoteUpdateManyMutationInput>;
}

@InputType()
export class VoteUpdateManyWithoutPageNestedInput {
    @Field(() => [VoteCreateWithoutPageInput], {nullable:true})
    @Type(() => VoteCreateWithoutPageInput)
    create?: Array<VoteCreateWithoutPageInput>;
    @Field(() => [VoteCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => VoteCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<VoteCreateOrConnectWithoutPageInput>;
    @Field(() => [VoteUpsertWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => VoteUpsertWithWhereUniqueWithoutPageInput)
    upsert?: Array<VoteUpsertWithWhereUniqueWithoutPageInput>;
    @Field(() => VoteCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => VoteCreateManyPageInputEnvelope)
    createMany?: InstanceType<typeof VoteCreateManyPageInputEnvelope>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    set?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>>;
    @Field(() => [VoteUpdateWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => VoteUpdateWithWhereUniqueWithoutPageInput)
    update?: Array<VoteUpdateWithWhereUniqueWithoutPageInput>;
    @Field(() => [VoteUpdateManyWithWhereWithoutPageInput], {nullable:true})
    @Type(() => VoteUpdateManyWithWhereWithoutPageInput)
    updateMany?: Array<VoteUpdateManyWithWhereWithoutPageInput>;
    @Field(() => [VoteScalarWhereInput], {nullable:true})
    @Type(() => VoteScalarWhereInput)
    deleteMany?: Array<VoteScalarWhereInput>;
}

@InputType()
export class VoteUpdateManyWithoutUserNestedInput {
    @Field(() => [VoteCreateWithoutUserInput], {nullable:true})
    @Type(() => VoteCreateWithoutUserInput)
    create?: Array<VoteCreateWithoutUserInput>;
    @Field(() => [VoteCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => VoteCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<VoteCreateOrConnectWithoutUserInput>;
    @Field(() => [VoteUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => VoteUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<VoteUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => VoteCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => VoteCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof VoteCreateManyUserInputEnvelope>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    set?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>>;
    @Field(() => [VoteUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => VoteUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<VoteUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [VoteUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => VoteUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<VoteUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [VoteScalarWhereInput], {nullable:true})
    @Type(() => VoteScalarWhereInput)
    deleteMany?: Array<VoteScalarWhereInput>;
}

@InputType()
export class VoteUpdateWithWhereUniqueWithoutPageInput {
    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>;
    @Field(() => VoteUpdateWithoutPageInput, {nullable:false})
    @Type(() => VoteUpdateWithoutPageInput)
    data!: InstanceType<typeof VoteUpdateWithoutPageInput>;
}

@InputType()
export class VoteUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>;
    @Field(() => VoteUpdateWithoutUserInput, {nullable:false})
    @Type(() => VoteUpdateWithoutUserInput)
    data!: InstanceType<typeof VoteUpdateWithoutUserInput>;
}

@InputType()
export class VoteUpdateWithoutPageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutVotesNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutVotesNestedInput>;
}

@InputType()
export class VoteUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ExitPageUpdateOneRequiredWithoutVotesNestedInput, {nullable:true})
    page?: InstanceType<typeof ExitPageUpdateOneRequiredWithoutVotesNestedInput>;
}

@InputType()
export class VoteUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ExitPageUpdateOneRequiredWithoutVotesNestedInput, {nullable:true})
    page?: InstanceType<typeof ExitPageUpdateOneRequiredWithoutVotesNestedInput>;
    @Field(() => UserUpdateOneWithoutVotesNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutVotesNestedInput>;
}

@InputType()
export class VoteUpsertWithWhereUniqueWithoutPageInput {
    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>;
    @Field(() => VoteUpdateWithoutPageInput, {nullable:false})
    @Type(() => VoteUpdateWithoutPageInput)
    update!: InstanceType<typeof VoteUpdateWithoutPageInput>;
    @Field(() => VoteCreateWithoutPageInput, {nullable:false})
    @Type(() => VoteCreateWithoutPageInput)
    create!: InstanceType<typeof VoteCreateWithoutPageInput>;
}

@InputType()
export class VoteUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'one_vote_per_user_page'>;
    @Field(() => VoteUpdateWithoutUserInput, {nullable:false})
    @Type(() => VoteUpdateWithoutUserInput)
    update!: InstanceType<typeof VoteUpdateWithoutUserInput>;
    @Field(() => VoteCreateWithoutUserInput, {nullable:false})
    @Type(() => VoteCreateWithoutUserInput)
    create!: InstanceType<typeof VoteCreateWithoutUserInput>;
}

@InputType()
export class VoteWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => VoteOne_vote_per_user_pageCompoundUniqueInput, {nullable:true})
    one_vote_per_user_page?: InstanceType<typeof VoteOne_vote_per_user_pageCompoundUniqueInput>;
    @Field(() => [VoteWhereInput], {nullable:true})
    AND?: Array<VoteWhereInput>;
    @Field(() => [VoteWhereInput], {nullable:true})
    OR?: Array<VoteWhereInput>;
    @Field(() => [VoteWhereInput], {nullable:true})
    NOT?: Array<VoteWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    pageId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    userId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => ExitPageScalarRelationFilter, {nullable:true})
    page?: InstanceType<typeof ExitPageScalarRelationFilter>;
    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserNullableScalarRelationFilter>;
}

@InputType()
export class VoteWhereInput {
    @Field(() => [VoteWhereInput], {nullable:true})
    AND?: Array<VoteWhereInput>;
    @Field(() => [VoteWhereInput], {nullable:true})
    OR?: Array<VoteWhereInput>;
    @Field(() => [VoteWhereInput], {nullable:true})
    NOT?: Array<VoteWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    pageId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    userId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => ExitPageScalarRelationFilter, {nullable:true})
    page?: InstanceType<typeof ExitPageScalarRelationFilter>;
    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserNullableScalarRelationFilter>;
}

@ObjectType()
export class Vote {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    pageId!: string;
    @Field(() => String, {nullable:true})
    userId!: string | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => ExitPage, {nullable:false})
    page?: InstanceType<typeof ExitPage>;
    @Field(() => User, {nullable:true})
    user?: InstanceType<typeof User> | null;
}
