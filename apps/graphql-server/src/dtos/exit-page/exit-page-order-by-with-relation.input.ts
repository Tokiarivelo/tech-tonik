import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { TemplateOrderByWithRelationInput } from '../template/template-order-by-with-relation.input';
import { ReactionOrderByRelationAggregateInput } from '../reaction/reaction-order-by-relation-aggregate.input';
import { VoteOrderByRelationAggregateInput } from '../vote/vote-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { PageViewOrderByRelationAggregateInput } from '../page-view/page-view-order-by-relation-aggregate.input';
import { PageShareOrderByRelationAggregateInput } from '../page-share/page-share-order-by-relation-aggregate.input';
import { PageVersionOrderByRelationAggregateInput } from '../page-version/page-version-order-by-relation-aggregate.input';
import { TagOrderByRelationAggregateInput } from '../tag/tag-order-by-relation-aggregate.input';
import { ExitPageOrderByRelevanceInput } from './exit-page-order-by-relevance.input';

@InputType()
export class ExitPageOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    authorId?: SortOrderInput;

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
    author?: UserOrderByWithRelationInput;

    @Field(() => TemplateOrderByWithRelationInput, {nullable:true})
    template?: TemplateOrderByWithRelationInput;

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

    @Field(() => TagOrderByRelationAggregateInput, {nullable:true})
    tags?: TagOrderByRelationAggregateInput;

    @Field(() => ExitPageOrderByRelevanceInput, {nullable:true})
    _relevance?: ExitPageOrderByRelevanceInput;
}
