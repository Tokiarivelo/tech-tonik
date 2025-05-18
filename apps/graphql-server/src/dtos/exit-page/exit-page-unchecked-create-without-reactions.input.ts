import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Tone } from '../prisma/tone.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { VoteUncheckedCreateNestedManyWithoutPageInput } from '../vote/vote-unchecked-create-nested-many-without-page.input';
import { CommentUncheckedCreateNestedManyWithoutPageInput } from '../comment/comment-unchecked-create-nested-many-without-page.input';
import { PageViewUncheckedCreateNestedManyWithoutPageInput } from '../page-view/page-view-unchecked-create-nested-many-without-page.input';
import { PageShareUncheckedCreateNestedManyWithoutPageInput } from '../page-share/page-share-unchecked-create-nested-many-without-page.input';
import { PageVersionUncheckedCreateNestedManyWithoutPageInput } from '../page-version/page-version-unchecked-create-nested-many-without-page.input';
import { TagUncheckedCreateNestedManyWithoutExitPageInput } from '../tag/tag-unchecked-create-nested-many-without-exit-page.input';

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
    votes?: VoteUncheckedCreateNestedManyWithoutPageInput;

    @Field(() => CommentUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    comments?: CommentUncheckedCreateNestedManyWithoutPageInput;

    @Field(() => PageViewUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    views?: PageViewUncheckedCreateNestedManyWithoutPageInput;

    @Field(() => PageShareUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    shares?: PageShareUncheckedCreateNestedManyWithoutPageInput;

    @Field(() => PageVersionUncheckedCreateNestedManyWithoutPageInput, {nullable:true})
    versions?: PageVersionUncheckedCreateNestedManyWithoutPageInput;

    @Field(() => TagUncheckedCreateNestedManyWithoutExitPageInput, {nullable:true})
    tags?: TagUncheckedCreateNestedManyWithoutExitPageInput;
}
