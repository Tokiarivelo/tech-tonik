import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { RefreshTokenOrderByRelationAggregateInput } from '../refresh-token/refresh-token-order-by-relation-aggregate.input';
import { UserImageOrderByRelationAggregateInput } from '../user-image/user-image-order-by-relation-aggregate.input';
import { ExitPageOrderByRelationAggregateInput } from '../exit-page/exit-page-order-by-relation-aggregate.input';
import { ReactionOrderByRelationAggregateInput } from '../reaction/reaction-order-by-relation-aggregate.input';
import { VoteOrderByRelationAggregateInput } from '../vote/vote-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { PageViewOrderByRelationAggregateInput } from '../page-view/page-view-order-by-relation-aggregate.input';
import { PageShareOrderByRelationAggregateInput } from '../page-share/page-share-order-by-relation-aggregate.input';
import { PageVersionOrderByRelationAggregateInput } from '../page-version/page-version-order-by-relation-aggregate.input';
import { RoleOrderByRelationAggregateInput } from '../role/role-order-by-relation-aggregate.input';
import { UserOrderByRelevanceInput } from './user-order-by-relevance.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    firstName?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    lastName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    phone?: SortOrderInput;

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
    tokens?: RefreshTokenOrderByRelationAggregateInput;

    @Field(() => UserImageOrderByRelationAggregateInput, {nullable:true})
    images?: UserImageOrderByRelationAggregateInput;

    @Field(() => ExitPageOrderByRelationAggregateInput, {nullable:true})
    pages?: ExitPageOrderByRelationAggregateInput;

    @Field(() => ReactionOrderByRelationAggregateInput, {nullable:true})
    reactions?: ReactionOrderByRelationAggregateInput;

    @Field(() => VoteOrderByRelationAggregateInput, {nullable:true})
    votes?: VoteOrderByRelationAggregateInput;

    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    comments?: CommentOrderByRelationAggregateInput;

    @Field(() => PageViewOrderByRelationAggregateInput, {nullable:true})
    views?: PageViewOrderByRelationAggregateInput;

    @Field(() => PageShareOrderByRelationAggregateInput, {nullable:true})
    shares?: PageShareOrderByRelationAggregateInput;

    @Field(() => PageVersionOrderByRelationAggregateInput, {nullable:true})
    versions?: PageVersionOrderByRelationAggregateInput;

    @Field(() => RoleOrderByRelationAggregateInput, {nullable:true})
    Role?: RoleOrderByRelationAggregateInput;

    @Field(() => UserOrderByRelevanceInput, {nullable:true})
    _relevance?: UserOrderByRelevanceInput;
}
