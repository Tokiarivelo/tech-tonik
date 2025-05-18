import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Tone } from '../prisma/tone.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { UserCreateNestedOneWithoutPagesInput } from '../user/user-create-nested-one-without-pages.input';
import { TemplateCreateNestedOneWithoutPagesInput } from '../template/template-create-nested-one-without-pages.input';
import { ReactionCreateNestedManyWithoutPageInput } from '../reaction/reaction-create-nested-many-without-page.input';
import { VoteCreateNestedManyWithoutPageInput } from '../vote/vote-create-nested-many-without-page.input';
import { CommentCreateNestedManyWithoutPageInput } from '../comment/comment-create-nested-many-without-page.input';
import { PageViewCreateNestedManyWithoutPageInput } from '../page-view/page-view-create-nested-many-without-page.input';
import { PageVersionCreateNestedManyWithoutPageInput } from '../page-version/page-version-create-nested-many-without-page.input';
import { TagCreateNestedManyWithoutExitPageInput } from '../tag/tag-create-nested-many-without-exit-page.input';

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
    author?: UserCreateNestedOneWithoutPagesInput;

    @Field(() => TemplateCreateNestedOneWithoutPagesInput, {nullable:false})
    template!: TemplateCreateNestedOneWithoutPagesInput;

    @Field(() => ReactionCreateNestedManyWithoutPageInput, {nullable:true})
    reactions?: ReactionCreateNestedManyWithoutPageInput;

    @Field(() => VoteCreateNestedManyWithoutPageInput, {nullable:true})
    votes?: VoteCreateNestedManyWithoutPageInput;

    @Field(() => CommentCreateNestedManyWithoutPageInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutPageInput;

    @Field(() => PageViewCreateNestedManyWithoutPageInput, {nullable:true})
    views?: PageViewCreateNestedManyWithoutPageInput;

    @Field(() => PageVersionCreateNestedManyWithoutPageInput, {nullable:true})
    versions?: PageVersionCreateNestedManyWithoutPageInput;

    @Field(() => TagCreateNestedManyWithoutExitPageInput, {nullable:true})
    tags?: TagCreateNestedManyWithoutExitPageInput;
}
